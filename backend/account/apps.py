from django.apps import AppConfig

class AccountConfig(AppConfig):
    # Configuração padrão do campo de chave primária
    default_auto_field = 'django.db.models.BigAutoField'
    # Nome da aplicação
    name = 'account'