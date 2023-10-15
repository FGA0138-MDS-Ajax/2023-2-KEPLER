from django.db import models

class Customer(models.Model):
    name = models.CharField(max_length=100)
    matricula = models.CharField(max_length=10)
    email = models.CharField(max_length=100)
    senha = models.CharField(max_length=30)

    class Meta:
        ordering = ['name', 'matricula']

    def __str__(self):
        return f'{self.name}, {self.matricula}'