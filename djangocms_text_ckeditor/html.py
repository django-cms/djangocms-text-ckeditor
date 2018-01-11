# -*- coding: utf-8 -*-
import base64
import re
import uuid

import html5lib
from django.utils.module_loading import import_string
from django.utils.six import BytesIO
from html5lib import sanitizer, serializer, treebuilders, treewalkers
from PIL import Image

from . import settings
from .sanitizer import TextSanitizer
from .utils import plugin_to_tag


def _get_default_parser():
    opts = {}

    sanitizer.HTMLSanitizer.acceptable_elements.extend(['cms-plugin'])

    if settings.TEXT_HTML_SANITIZE:
        sanitizer.HTMLSanitizer.acceptable_elements.extend(
            settings.TEXT_ADDITIONAL_TAGS)
        sanitizer.HTMLSanitizer.acceptable_attributes.extend(
            settings.TEXT_ADDITIONAL_ATTRIBUTES)
        sanitizer.HTMLSanitizer.allowed_elements = (
            sanitizer.HTMLSanitizer.acceptable_elements +
            sanitizer.HTMLSanitizer.mathml_elements +
            sanitizer.HTMLSanitizer.svg_elements)
        sanitizer.HTMLSanitizer.allowed_attributes = (
            sanitizer.HTMLSanitizer.acceptable_attributes +
            sanitizer.HTMLSanitizer.mathml_attributes +
            sanitizer.HTMLSanitizer.svg_attributes)
        sanitizer.HTMLSanitizer.allowed_protocols = (
            sanitizer.HTMLSanitizer.acceptable_protocols +
            list(settings.TEXT_ADDITIONAL_PROTOCOLS))
        parser_classes = []
        for parser_class in settings.ALLOW_TOKEN_PARSERS:
            parser_classes.append(import_string(parser_class))

        TextSanitizer.allow_token_parsers = parser_classes
        opts['tokenizer'] = TextSanitizer

    return html5lib.HTMLParser(tree=treebuilders.getTreeBuilder("dom"),
                               **opts)


DEFAULT_PARSER = _get_default_parser()


def clean_html(data, full=True, parser=DEFAULT_PARSER):
    """
    Cleans HTML from XSS vulnerabilities using html5lib
    If full is False, only the contents inside <body> will be returned (without
    the <body> tags).
    """
    if full:
        dom_tree = parser.parse(data)
    else:
        dom_tree = parser.parseFragment(data)
    walker = treewalkers.getTreeWalker("dom")
    stream = walker(dom_tree)
    s = serializer.htmlserializer.HTMLSerializer(omit_optional_tags=False,
                                                 quote_attr_values=True)
    return u''.join(s.serialize(stream))


def extract_images(data, plugin):
    """
    extracts base64 encoded images from drag and drop actions in browser and saves
    those images as plugins
    """
    if not settings.TEXT_SAVE_IMAGE_FUNCTION:
        return data
    tree_builder = html5lib.treebuilders.getTreeBuilder('dom')
    parser = html5lib.html5parser.HTMLParser(tree=tree_builder)
    dom = parser.parse(data)
    found = False
    for img in dom.getElementsByTagName('img'):
        src = img.getAttribute('src')
        if not src.startswith('data:'):
            # nothing to do
            continue
        width = img.getAttribute('width')
        height = img.getAttribute('height')
        # extract the image data
        data_re = re.compile(r'data:(?P<mime_type>[^"]*);(?P<encoding>[^"]*),(?P<data>[^"]*)')
        m = data_re.search(src)
        dr = m.groupdict()
        mime_type = dr['mime_type']
        image_data = dr['data']
        if mime_type.find(";"):
            mime_type = mime_type.split(";")[0]
        try:
            image_data = base64.b64decode(image_data)
        except Exception:
            image_data = base64.urlsafe_b64decode(image_data)
        try:
            image_type = mime_type.split("/")[1]
        except IndexError:
            # No image type specified -- will convert to jpg below if it's valid image data
            image_type = ""
        image = BytesIO(image_data)
        # genarate filename and normalize image format
        if image_type == "jpg" or image_type == "jpeg":
            file_ending = "jpg"
        elif image_type == "png":
            file_ending = 'png'
        elif image_type == "gif":
            file_ending = "gif"
        else:
            # any not "web-safe" image format we try to convert to jpg
            im = Image.open(image)
            new_image = BytesIO()
            file_ending = "jpg"
            im.save(new_image, "JPEG")
            new_image.seek(0)
            image = new_image
        filename = u"%s.%s" % (uuid.uuid4(), file_ending)
        # transform image into a cms plugin
        image_plugin = img_data_to_plugin(
            filename, image, parent_plugin=plugin, width=width, height=height
        )
        # render the new html for the plugin
        new_img_html = plugin_to_tag(image_plugin)
        # replace the original image node with the newly created cms plugin html
        img.parentNode.replaceChild(parser.parseFragment(new_img_html).childNodes[0], img)
        found = True
    if found:
        return u''.join([y.toxml() for y in dom.getElementsByTagName('body')[0].childNodes])
    else:
        return data


def img_data_to_plugin(filename, image, parent_plugin, width=None, height=None):
    func_name = settings.TEXT_SAVE_IMAGE_FUNCTION.split(".")[-1]
    module = __import__(
        ".".join(settings.TEXT_SAVE_IMAGE_FUNCTION.split(".")[:-1]), fromlist=[func_name]
    )
    func = getattr(module, func_name)
    return func(filename, image, parent_plugin, width=width, height=height)
