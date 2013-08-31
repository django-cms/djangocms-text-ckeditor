try:
    from django.utils.text import Truncator
except ImportError:
    from django.utils.text import truncate_words # Django < 1.4
else:
    def truncate_words(value, length):
        return Truncator(value).words(length)
