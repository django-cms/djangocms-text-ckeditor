# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import re

from django.db import migrations, models


def _replace_text_body(model, input_pattern, output_tag, id_format):
    regex = re.compile(input_pattern)

    def _do_replace(match):
        before_id, plugin_id, after_id = match.groups()

        if not plugin_id:
            return ''

        bits = []

        if before_id:
            bits.append(before_id.strip())

        bits.append(id_format.format(plugin_id))

        if after_id:
            bits.append(after_id.strip())

        # By using .join() we ensure the correct
        # amount of spaces are used to separate the different
        # attributes.
        tag_attrs = ' '.join(bits)
        return output_tag.format(tag_attrs)

    lookup = model.objects.filter

    for plugin in model.objects.all():
        new_body, count = regex.subn(_do_replace, plugin.body)

        if count >= 1:
            # Only update body if there were plugins in the text
            lookup(pk=plugin.pk).update(body=new_body)


def forwards(apps, schema_editor):
    _replace_text_body(
        model=apps.get_model('djangocms_text_ckeditor', 'Text'),
        input_pattern=r'<img ([^>]*)\bid="plugin_obj_(?P<pk>\d+)"([^>]*)/?>',
        output_tag='<cms-plugin {}></cms-plugin>',
        id_format='id="{}"',
    )


def backwards(apps, schema_editor):
    _replace_text_body(
        model=apps.get_model('djangocms_text_ckeditor', 'Text'),
        input_pattern=r'<cms-plugin ([^>]*)\bid="(?P<pk>\d+)"([^>]*)/?></cms-plugin>',
        output_tag='<img {}>',
        id_format='id="plugin_obj_{}"',
    )


class Migration(migrations.Migration):

    dependencies = [
        ('djangocms_text_ckeditor', '0003_set_related_name_for_cmsplugin_ptr'),
    ]

    operations = [
        migrations.RunPython(forwards, backwards)
    ]
