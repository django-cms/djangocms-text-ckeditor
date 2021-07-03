def get_page_placeholders(page, language=None):
    try:
        # cms 3.6 compat
        return page.get_placeholders()
    except TypeError:
        return page.get_placeholders(language)
