#!/usr/bin/env python
from pathlib import Path

from setuptools import find_packages, setup

from djangocms_text_ckeditor import __version__


REQUIREMENTS = [
    'django-cms>=3.6',
    'html5lib>=1',
    'Pillow',
    'packaging',
]


CLASSIFIERS = [
    'Development Status :: 5 - Production/Stable',
    'Environment :: Web Environment',
    'Intended Audience :: Developers',
    'License :: OSI Approved :: BSD License',
    'Operating System :: OS Independent',
    'Programming Language :: Python',
    'Programming Language :: Python :: 3',
    'Programming Language :: Python :: 3.7',
    'Programming Language :: Python :: 3.8',
    'Programming Language :: Python :: 3.9',
    'Programming Language :: Python :: 3.10',
    'Programming Language :: Python :: 3.11',
    'Programming Language :: Python :: 3.12',
    'Framework :: Django',
    'Framework :: Django :: 2.2',
    'Framework :: Django :: 3.1',
    'Framework :: Django :: 3.2',
    'Framework :: Django :: 4.0',
    'Framework :: Django :: 4.1',
    'Framework :: Django :: 4.2',
    'Framework :: Django :: 5.0',
    'Framework :: Django CMS',
    'Framework :: Django CMS :: 3.6',
    'Framework :: Django CMS :: 3.7',
    'Framework :: Django CMS :: 3.8',
    'Framework :: Django CMS :: 3.9',
    'Framework :: Django CMS :: 3.10',
    'Framework :: Django CMS :: 3.11',
    'Framework :: Django CMS :: 4.0',
    'Framework :: Django CMS :: 4.1',
    'Topic :: Internet :: WWW/HTTP',
    'Topic :: Internet :: WWW/HTTP :: Dynamic Content',
    'Topic :: Software Development',
    'Topic :: Software Development :: Libraries',
]

this_directory = Path(__file__).parent
long_description = (this_directory / 'README.rst').read_text()

setup(
    name='djangocms-text-ckeditor',
    version=__version__,
    author='Divio AG',
    author_email='info@divio.ch',
    maintainer='Django CMS Association and contributors',
    maintainer_email='info@django-cms.org',
    url='https://github.com/django-cms/djangocms-text-ckeditor',
    license='BSD-3-Clause',
    description='Text Plugin for django CMS with CKEditor support',
    long_description=long_description,
    long_description_content_type='text/x-rst',
    packages=find_packages(exclude=['tests']),
    include_package_data=True,
    zip_safe=False,
    install_requires=REQUIREMENTS,
    classifiers=CLASSIFIERS,
    python_requires='>=3.7',
    test_suite='tests.settings.test',
)
