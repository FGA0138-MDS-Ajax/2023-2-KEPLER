from django.contrib import admin
from django.urls import path, include

# Configuração de Rotas do Django
urlpatterns = [
    path('admin/', admin.site.urls),  # Rota para a interface administrativa do Django
    path('api/user/', include('account.urls'))  # Rota para as URLs da aplicação 'account'
]
