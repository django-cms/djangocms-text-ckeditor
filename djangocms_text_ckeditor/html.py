# -*- coding: utf-8 -*-
from html5lib import sanitizer, serializer, treebuilders, treewalkers
import html5lib
import re

DEFAULT_PARSER = html5lib.HTMLParser(tokenizer=sanitizer.HTMLSanitizer,
                                     tree=treebuilders.getTreeBuilder("dom"))

RE_IMG = re.compile(r'<img[^>]*\ssrc="(.*?)"', re.IGNORECASE)

def clean_html(data, full=True, parser=DEFAULT_PARSER):
    """
    Cleans HTML from XSS vulnerabilities using html5lib
    
    If full is False, only the contents inside <body> will be returned (without
    the <body> tags).
    """
    data = extract_images(data)
    if full:
        dom_tree = parser.parse(data)
    else:
        dom_tree = parser.parseFragment(data)
    walker = treewalkers.getTreeWalker("dom")
    stream = walker(dom_tree)
    s = serializer.htmlserializer.HTMLSerializer(omit_optional_tags=False,
                                                 quote_attr_values=True)
    return u''.join(s.serialize(stream))

def extract_images(data):
    matches = RE_IMG.match(data)
    print "extract images"
    print matches
    return matches
