#!/usr/bin/env python
# -*- coding: utf-8 -*-
from setuptools import setup
from djangocms_text_ckeditor import __version__


INSTALL_REQUIRES = [
    'html5lib',
]

CLASSIFIERS = [
    'Development Status :: 5 - Production/Stable',
    'Environment :: Web Environment',
    'Framework :: Django',
    'Intended Audience :: Developers',
    'License :: OSI Approved :: BSD License',
    'Operating System :: OS Independent',
    'Programming Language :: Python',
    'Topic :: Communications',
    'Topic :: Internet :: WWW/HTTP :: Dynamic Content',
    'Topic :: Internet :: WWW/HTTP :: Dynamic Content :: Message Boards',
    "Programming Language :: Python :: 2.6",
    "Programming Language :: Python :: 2.7",
    "Programming Language :: Python :: 3.3",
]

setup(
    name='djangocms-text-ckeditor',
    version=__version__,
    description='Text Plugin for django CMS with CKEditor support',
    author='Divio AG',
    author_email='info@divio.ch',
    url='https://github.com/divio/djangocms-text-ckeditor',
    packages=['djangocms_text_ckeditor', 'djangocms_text_ckeditor.migrations'],
    install_requires=INSTALL_REQUIRES,
    license='LICENSE.txt',
    platforms=['OS Independent'],
    classifiers=CLASSIFIERS,
    long_description=open('README.rst').read(),
    include_package_data=True,
    zip_safe=False
)
