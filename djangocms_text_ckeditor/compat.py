try:
    from django.utils.text import Truncator
except ImportError:
    from django.utils.text import truncate_words # Django < 1.4
else:
    def truncate_words(s, num, end_text='...'):
        end_text = ' {0}'.format(end_text) if end_text else ''
        return Truncator(s).words(num, truncate=end_text)
