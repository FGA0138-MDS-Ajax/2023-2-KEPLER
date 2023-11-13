from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('registrarCurso/', views.registrarCurso),
    path('editarCurso/<codigo>', views.editarCurso),
    path('edicaoCurso/', views.edicaoCurso),
    path('excluirCurso/<codigo>', views.excluirCurso),
    path('cadastro/', views.cadastro, name='cadastro'),
    path('login/', views.login, name='login'),
    path('plusFaltas/<codigo>', views.plusFaltas),
    path('menosFaltas/<codigo>', views.menosFaltas),
    
    
] 