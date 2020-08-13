# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-03-04 04:58
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('djangocms_text_ckeditor', '0002_remove_related_name_for_cmsplugin_ptr'),
    ]

    operations = [
        migrations.AlterField(
            model_name='text',
            name='cmsplugin_ptr',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, related_name='djangocms_text_ckeditor_text', serialize=False, to='cms.CMSPlugin'),
        ),
    ]
