from cms.api import create_page, create_title
from django.apps import apps
from django.contrib.contenttypes.models import ContentType

DJANGO_CMS4 = apps.is_installed("djangocms_versioning")


class TestFixture:
    """Sets up generic setUp and tearDown methods for tests."""

    def setUp(self):
        self.language = "en"
        self.superuser = self.get_superuser()
        return super().setUp()

    def tearDown(self):
        if DJANGO_CMS4:
            from djangocms_versioning.models import Version

            Version.objects.all().delete()
        return super().tearDown()

    if DJANGO_CMS4:  # CMS V4

        def _get_version(self, grouper, version_state, language=None):
            language = language or self.language

            from djangocms_versioning.models import Version

            versions = Version.objects.filter_by_grouper(grouper).filter(
                state=version_state
            )
            for version in versions:
                if (
                    hasattr(version.content, "language")
                    and version.content.language == language
                ):
                    return version

        def publish(self, grouper, language=None):
            from djangocms_versioning.constants import DRAFT

            version = self._get_version(grouper, DRAFT, language)
            if version is not None:
                version.publish(self.superuser)

        def unpublish(self, grouper, language=None):
            from djangocms_versioning.constants import PUBLISHED

            version = self._get_version(grouper, PUBLISHED, language)
            if version is not None:
                version.unpublish(self.superuser)

        def create_page(self, title, template, **kwargs):
            kwargs.setdefault("language", self.language)
            kwargs.setdefault("created_by", self.superuser)
            page = create_page(title=title, template=template, **kwargs)
            page.save()
            return page

        def create_title(self, title, page, **kwargs):
            kwargs.setdefault("language", self.language)
            kwargs.setdefault("created_by", self.superuser)
            kwargs.setdefault("in_navigation", True)
            kwargs.setdefault("limit_visibility_in_menu", None)
            kwargs.setdefault("menu_title", title)
            return create_page(title=title, page=page, **kwargs)

        def get_placeholders(self, page, language=None):
            return page.get_placeholders(language or self.language)

        def create_url(
            self,
            site=None,
            content_object=None,
            manual_url="",
            relative_path="",
            phone="",
            mailto="",
            anchor="",
        ):
            from djangocms_url_manager.models import Url, UrlGrouper
            from djangocms_url_manager.utils import is_versioning_enabled
            from djangocms_versioning.constants import DRAFT
            from djangocms_versioning.models import Version

            if site is None:
                site = self.default_site

            url = Url.objects.create(
                site=site,
                content_object=content_object,
                manual_url=manual_url,
                relative_path=relative_path,
                phone=phone,
                mailto=mailto,
                anchor=anchor,
                url_grouper=UrlGrouper.objects.create(),
            )
            if is_versioning_enabled():
                Version.objects.create(
                    content=url,
                    created_by=self.superuser,
                    state=DRAFT,
                    content_type_id=ContentType.objects.get_for_model(Url).id,
                )

            return url

        def delete_urls(self):
            from djangocms_url_manager.models import Url

            Url.objects.all().delete()

    else: # CMS V3

        def publish(self, page, language=None):
            page.publish(language)

        def unpublish(self, page, language=None):
            page.unpublish(language)

        def create_page(self, title, template, **kwargs):
            kwargs.setdefault("language", self.language)
            kwargs.setdefault("menu_title", title)
            return create_page(title=title, template=template, **kwargs)

        def create_title(self, title, page, **kwargs):
            kwargs.setdefault("language", self.language)
            kwargs.setdefault("menu_title", title)
            return create_title(title=title, page=page, **kwargs)

        def get_placeholders(self, page, language=None):
            return page.get_placeholders()
