import django

if django.VERSION < (1, 7):
    from django.utils.module_loading import import_by_path
    import_string = import_by_path
else:
    from django.utils.module_loading import import_string  # noqa
