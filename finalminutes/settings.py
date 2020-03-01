import datetime

import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SECRET_KEY = 'c06bxt!5&^yk8h&3pt!qeki69+_42v0j^fnydk1b*4wd6l@p7l'
    
DEBUG = True

ALLOWED_HOSTS = ['xvoice.xyz','127.0.0.1','www.xvoice.xyz']

INSTALLED_APPS = [
    "sslserver",
    'kamailio',
    'rest_framework',
    'django.contrib.contenttypes',
    'django.contrib.auth',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.admin',
    'corsheaders',
    'storages',
    'django_filters',
]

AUTH_USER_MODEL = 'kamailio.Customer'

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'finalminutes.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES':(
        'rest_framework.authentication.BasicAuthentication',
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
    ),
    'DEFAULT_FILTER_BACKENDS':('django_filters.rest_framework.DjangoFilterBackend',)
}

WSGI_APPLICATION = 'finalminutes.wsgi.application'


AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

USE_S3 = os.getenv('USE_S3') == 'TRUE'



if r"C:\Users" in BASE_DIR:
    switch=False
else:
    switch=True

SECURE_SSL_REDIRECT=switch

if switch:
    # aws settings
    AWS_ACCESS_KEY_ID = 'AKIAJSDAPWVWN4OZZHQA'
    AWS_SECRET_ACCESS_KEY = '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'
    AWS_STORAGE_BUCKET_NAME = 'carenmarketplace'
    AWS_DEFAULT_ACL = 'public-read'
    AWS_S3_CUSTOM_DOMAIN = '%s.s3.amazonaws.com'%(AWS_STORAGE_BUCKET_NAME)
    AWS_S3_OBJECT_PARAMETERS = {'CacheControl': 'max-age=86400'}
    # s3 static settings
    AWS_LOCATION = 'static'
    STATIC_URL = 'https://%s/%s/'%(AWS_S3_CUSTOM_DOMAIN,AWS_LOCATION)
    STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
    # DATABASES = {
    # 'default': {
    # 'ENGINE': 'django.db.backends.postgresql_psycopg2',
    # 'NAME': 'dc7th8ploivfp5',
    # 'USER': 'tjxvxajkvetvno',
    # 'PASSWORD': 'c11c9ae1d2491b804c4fed88542dfee1baef0ca881ab8d3fcef8418c4879bc4a',
    # 'HOST': 'ec2-174-129-27-158.compute-1.amazonaws.com',
    # 'PORT': '5432',}}
    DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'kamailio',
        'USER': 'root',
        'PASSWORD': 'Pri3to.Server',
        'HOST': '3.135.1.254',
        'PORT': '3306',
    }
}

else:
    STATIC_URL = '/static/'
    STATIC_ROOT = BASE_DIR + '\static'
    DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),}}

EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.carly.do'
EMAIL_HOST_USER = 'admin@carly.do'
EMAIL_HOST_PASSWORD = 'xlzl!Mo5'
EMAIL_PORT = 587

CORS_ORIGIN_WHITE_LIST = '127.0.0.1','localhost','carenproject.herokuapp.com','3.15.162.59',
CORS_ALLOW_CREDENTIALS = True
JWT_AUTH = {
    'JWT_RESPONSE_PAYLOAD_HANDLER' :   'kamailio.utils.custom_jwt_response_handler',
    'JWT_EXPIRATION_DELTA': datetime.timedelta(minutes=999999999)
}
LOGIN_URL = 'login'
LOGIN_REDIRECT_URL = 'home'


