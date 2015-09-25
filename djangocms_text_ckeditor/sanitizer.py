# -*- coding: utf-8 -*-
from html5lib import sanitizer


class AllowTokenParser():

    def parse(self, attribute, val):
        raise NotImplementedError


class TextSanitizer(sanitizer.HTMLSanitizer):

    allow_token_parsers = []

    def allowed_token(self, token, token_type):
        data_found = False
        allowed_attributes = sanitizer.HTMLSanitizer.allowed_attributes
        allowed_attributes_len = len(allowed_attributes)
        for data in token['data']:
            for allow_token_parser in self.allow_token_parsers:
                if allow_token_parser().parse(data[0], data[1]) and data[0] not in allowed_attributes:
                    sanitizer.HTMLSanitizer.allowed_attributes.append(data[0])
                    data_found = True
        allowed_token_res = super(TextSanitizer, self).allowed_token(token, token_type)
        if data_found:
            old_allowed_attributes = allowed_attributes[0:allowed_attributes_len]
            sanitizer.HTMLSanitizer.allowed_attributes = old_allowed_attributes
        return allowed_token_res
