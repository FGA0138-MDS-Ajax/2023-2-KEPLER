from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from django.utils.translation import gettext as _

# Gerenciador de Usuários Personalizado
class UserManager(BaseUserManager):
    def create_user(self, email, name, tc, password=None, password2=None):
        """
        Cria e salva um Usuário com o email, nome, tc e senha fornecidos.
        """
        if not email:
            raise ValueError('O usuário deve ter um endereço de e-mail')

        user = self.model(
            email=self.normalize_email(email),
            name=name,
            tc=tc,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, tc, password=None):
        """
        Cria e salva um superusuário com o email, nome, tc e senha fornecidos.
        """
        user = self.create_user(
            email,
            password=password,
            name=name,
            tc=tc,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user

# Modelo de Usuário Personalizado
class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name='Email',
        max_length=255,
        unique=True,
    )
    name = models.CharField(max_length=200)
    tc = models.BooleanField()
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'tc']

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "O usuário possui uma permissão específica?"
        # Resposta mais simples possível: Sim, sempre
        return self.is_admin

    def has_module_perms(self, app_label):
        "O usuário possui permissões para visualizar o aplicativo `app_label`?"
        # Resposta mais simples possível: Sim, sempre
        return True

    @property
    def is_staff(self):
        "O usuário é membro da equipe?"
        # Resposta mais simples possível: Todos os administradores são membros da equipe
        return self.is_admin

# Modelo para MateriaSelecionada
class MateriaSelecionada(models.Model):
    idTurmaProfessor = models.IntegerField(primary_key=True)
    nomeProfessor = models.CharField(max_length=255)
    numeroTurma = models.IntegerField()
    horario = models.CharField(max_length=10)
    carga = models.CharField(max_length=5)
    idmateria = models.IntegerField()
    codMateria = models.CharField(max_length=10)
    nomeMateria = models.CharField(max_length=255)
    curso = models.CharField(max_length=50)
    curso2 = models.CharField(max_length=50, blank=True)
    curso3 = models.CharField(max_length=50, blank=True)
    curso4 = models.CharField(max_length=50, blank=True)
    curso5 = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return f"{self.codMateria} - {self.nomeMateria} (Turma {self.numeroTurma})"