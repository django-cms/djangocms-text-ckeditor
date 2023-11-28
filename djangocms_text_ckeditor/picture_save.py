from django.core.files.base import ContentFile

from cms.models.pluginmodel import CMSPlugin


def create_picture_plugin(filename, file, parent_plugin, **kwargs):
    from djangocms_picture.models import Picture

    pic = Picture()
    pic.placeholder = parent_plugin.placeholder
    pic.parent = parent_plugin
    pic.position = CMSPlugin.objects.filter(parent=parent_plugin).count()
    pic.language = parent_plugin.language
    pic.plugin_type = 'PicturePlugin'

    # Set the FilerImageField value.
    from filer.settings import FILER_IMAGE_MODEL
    from filer.utils.loader import load_model
    image_class = load_model(FILER_IMAGE_MODEL)
    image_obj = image_class(file=ContentFile(file.read(), name=filename))
    image_obj.save()
    pic.picture = image_obj

    pic.save()
    return pic
