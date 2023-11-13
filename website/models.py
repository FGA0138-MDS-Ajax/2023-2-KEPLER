from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Curso(models.Model): 
    codigo = models.CharField(primary_key=True, max_length=1000)
    nome = models.CharField(max_length=56)
    credito=models.PositiveSmallIntegerField()
    faltas=models.PositiveSmallIntegerField(default=0)
    fTotal = models.PositiveSmallIntegerField(default=0)
    fRestante=models.PositiveSmallIntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=0)

    def __str__(self):
        texto=f'{self.nome.title()} ({self.credito})'
        
        return texto