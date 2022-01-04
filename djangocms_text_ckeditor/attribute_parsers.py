from .sanitizer import AllowTokenParser


class DataAttributeParser(AllowTokenParser):

    def parse(self, attribute, val):
        return attribute.startswith('data-')
