INSTALLED_APPS = [
    'django.contrib.contenttypes',
    'django.contrib.auth',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.admin',
    'mptt',
    'cms',
    'menus',
    'djangocms_text_ckeditor',
    'south',
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': ':memory:',
    }
}

TEMPLATE_CONTEXT_PROCESSORS = [
    'django.core.context_processors.auth',
    'django.core.context_processors.i18n',
    'django.core.context_processors.request',
    'django.core.context_processors.media',
    'django.core.context_processors.static',
    'cms.context_processors.media',
    'sekizai.context_processors.sekizai',
]

ROOT_URLCONF = 'cms.urls'

SECRET_KEY = 'p*gkh#3zd6rpt*l%^4+4=2+*l$er!-uzef2ol3rmgu^m=-#f1w'

SOUTH_TESTS_MIGRATE = False