from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = "lp-suplementos-dev-key"
DEBUG = True
ALLOWED_HOSTS = ["*"]

INSTALLED_APPS = [
    "django.contrib.staticfiles",
    "loja",
    "users",
    "core",
]

MIDDLEWARE = [
    "django.middleware.common.CommonMiddleware",
]

ROOT_URLCONF = "lp_site.urls"
WSGI_APPLICATION = "lp_site.wsgi.application"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "templates"],
        "APP_DIRS": True,
        "OPTIONS": {"context_processors": ["django.template.context_processors.request"]},
    }
]

STATIC_URL = "/static/"
STATICFILES_DIRS = [BASE_DIR / "static"]

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"
