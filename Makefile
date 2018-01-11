test:
	flake8 djangocms_text_ckeditor --max-line-length=120 --ignore=E731 --exclude=.*,*/migrations/*,*/static/*,*__init__*
	coverage erase
	coverage run setup.py test
	coverage report
