#!/usr/bin/env python
# -*- coding: utf-8 -*-
from setuptools import setup

from djangocms_text_ckeditor import __version__

INSTALL_REQUIRES = [
    'django-cms>=3.4.5',
    'html5lib>=0.999999999',
    'Pillow',
]

CLASSIFIERS = [
    'Development Status :: 5 - Production/Stable',
    'Environment :: Web Environment',
    'Framework :: Django',
    'Intended Audience :: Developers',
    'License :: OSI Approved :: BSD License',
    'Operating System :: OS Independent',
    'Topic :: Communications',
    'Topic :: Internet :: WWW/HTTP :: Dynamic Content',
    'Topic :: Internet :: WWW/HTTP :: Dynamic Content :: Message Boards',
    'Programming Language :: Python',
    'Programming Language :: Python :: 2.7',
    'Programming Language :: Python :: 3.4',
    'Programming Language :: Python :: 3.5',
    'Programming Language :: Python :: 3.6',
    'Framework :: Django',
    'Framework :: Django :: 1.11',
    'Framework :: Django :: 2.0',
    'Framework :: Django :: 2.1',
]

setup(
    name='djangocms-text-ckeditor',
    version=__version__,
    description='Text Plugin for django CMS with CKEditor support',
    author='Divio AG',
    author_email='info@divio.ch',
    url='https://github.com/divio/djangocms-text-ckeditor',
    packages=[
        'djangocms_text_ckeditor',
        'djangocms_text_ckeditor.migrations',
        'djangocms_text_ckeditor.templatetags',
    ],
    install_requires=INSTALL_REQUIRES,
    license='LICENSE.txt',
    platforms=['OS Independent'],
    classifiers=CLASSIFIERS,
    long_description=open('README.rst').read(),
    include_package_data=True,
    zip_safe=False,
    test_suite='test_settings.test',
)
