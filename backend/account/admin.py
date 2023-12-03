from django.contrib import admin
from account.models import User, MateriaSelecionada
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

class UserModelAdmin(BaseUserAdmin):
  # Campos a serem usados na exibição do modelo de Usuário.
  # Estes substituem as definições no BaseUserAdmin
  # que fazem referência a campos específicos em auth.User.
  list_display = ('id', 'email', 'name', 'tc', 'is_admin')
  list_filter = ('is_admin',)
  fieldsets = (
      ('Credenciais do Usuário', {'fields': ('email', 'password')}),
      ('Informações Pessoais', {'fields': ('name', 'tc')}),
      ('Permissões', {'fields': ('is_admin',)}),
  )
  # add_fieldsets não é um atributo padrão de ModelAdmin. UserModelAdmin
  # substitui get_fieldsets para usar este atributo ao criar um usuário.
  add_fieldsets = (
      (None, {
          'classes': ('wide',),
          'fields': ('email', 'name', 'tc', 'password1', 'password2'),
      }),
  )
  search_fields = ('email',)
  ordering = ('email', 'id')
  filter_horizontal = ()

# Agora registre o novo UserModelAdmin...
admin.site.register(User, UserModelAdmin)
admin.site.register(MateriaSelecionada)