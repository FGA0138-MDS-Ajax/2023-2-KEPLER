"""
Configuração ASGI para o projeto djangoauthapi1.

Isso expõe a função ASGI como uma variável de nível de módulo chamada ``application``.

Para mais informações sobre este arquivo, consulte
https://docs.djangoproject.com/en/4.0/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

# Define o módulo de configurações padrão do Django para o projeto ASGI
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'djangoauthapi1.settings')

# Obtém a aplicação ASGI do Django
application = get_asgi_application()