from html5lib.filters import sanitizer


class AllowTokenParser():

    def parse(self, attribute, val):
        raise NotImplementedError


class TextSanitizer(sanitizer.Filter):

    allow_token_parsers = []

    def allowed_token(self, token):
        data_found = False
        allowed_attributes = self.allowed_attributes
        for key, value in token.get('data', {}).items():
            for allow_token_parser in self.allow_token_parsers:
                if allow_token_parser().parse(key[1], value) and key not in allowed_attributes:
                    self.allowed_attributes = self.allowed_attributes | frozenset((key,))
                    data_found = True
        allowed_token_res = super().allowed_token(token)
        if data_found:
            self.allowed_attributes = allowed_attributes
        return allowed_token_res
