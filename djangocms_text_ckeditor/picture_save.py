from cms.models.pluginmodel import CMSPlugin
from django.conf import settings
import os
import random

def create_picture_plugin(image_type, file_ending, image, parent_plugin, width, height):
    from cms.plugins.picture.models import Picture
    pic = Picture()
    pic.placeholder = parent_plugin.placeholder
    pic.parent = parent_plugin
    pic.position = CMSPlugin.objects.filter(parent=parent_plugin).count()
    pic.language = parent_plugin.language
    pic.plugin_type = 'PicturePlugin'
    if width or height:
        image.rezise(width=width, height=height)
    name = ""
    while len(name) < 10:
        name += random.choice("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")
    path = pic.get_media_path(name + "." + file_ending)
    full_path = os.path.join(settings.MEDIA_ROOT, path)
    if not os.path.exists(os.path.dirname(full_path)):
        os.makedirs(os.path.dirname(full_path))
    pic.image = path
    f = open(full_path, "wb")
    image.save(f, image_type)
    pic.save()
    return pic
