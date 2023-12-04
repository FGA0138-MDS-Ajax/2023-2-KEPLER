from django.urls import path
from account.views import (
    SendPasswordResetEmailView,
    UserChangePasswordView,
    UserLoginView,
    UserProfileView,
    UserRegistrationView,
    UserPasswordResetView,
    processar_horario,
    selecionar_materia,
    mandar_materiaView,
    remover_materia,
)

# Definição de padrões de URL para as visualizações correspondentes
urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),  # Rota para registro de usuário
    path('login/', UserLoginView.as_view(), name='login'),  # Rota para login de usuário
    path('profile/', UserProfileView.as_view(), name='profile'),  # Rota para perfil de usuário
    path('changepassword/', UserChangePasswordView.as_view(), name='changepassword'),  # Rota para alteração de senha
    path('send-reset-password-email/', SendPasswordResetEmailView.as_view(), name='send-reset-password-email'),  # Rota para envio de e-mail de redefinição de senha
    path('reset-password/<uid>/<token>/', UserPasswordResetView.as_view(), name='reset-password'),  # Rota para redefinição de senha
    path('horario/', processar_horario, name='processar_horario'),  # Rota para processamento de horário
    path('selecionar_materia/', selecionar_materia, name='selecionar_materia'),  # Rota para seleção de matéria
    path('mandar_materias/', mandar_materiaView.as_view(), name='mandar_materia'),
    path('remover_materia/', remover_materia, name='remover_materia'),
    

]