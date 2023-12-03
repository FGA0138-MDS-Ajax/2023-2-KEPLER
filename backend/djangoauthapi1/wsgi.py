"""
Configuração WSGI para o projeto djangoauthapi1.

Isso expõe a função WSGI como uma variável de nível de módulo chamada ``application``.

Para mais informações sobre este arquivo, consulte
https://docs.djangoproject.com/en/4.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

# Define o módulo de configurações padrão do Django para o projeto WSGI
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'djangoauthapi1.settings')

# Obtém a aplicação WSGI do Django
application = get_wsgi_application()