# -*- coding: utf-8 -*-
from html5lib.filters import sanitizer


class AllowTokenParser():

    def parse(self, attribute, val):
        raise NotImplementedError


class TextSanitizer(sanitizer.Filter):

    allow_token_parsers = []

    def allowed_token(self, token):
        data_found = False
        allowed_attributes = self.allowed_attributes
        allowed_attributes_len = len(allowed_attributes)
        if 'data' in token:
            for data in token['data'].items():
                for allow_token_parser in self.allow_token_parsers:
                    if allow_token_parser().parse(data[0][1], data[1]) and data[0] not in allowed_attributes:
                        self.allowed_attributes = frozenset(tuple(self.allowed_attributes) + (data[0],))
                        data_found = True
        allowed_token_res = super(TextSanitizer, self).allowed_token(token)
        if data_found:
            old_allowed_attributes = frozenset([a for a in allowed_attributes][0:allowed_attributes_len])
            self.allowed_attributes = old_allowed_attributes
        return allowed_token_res
