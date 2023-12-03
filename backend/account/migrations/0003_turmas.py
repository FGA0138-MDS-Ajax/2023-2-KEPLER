# Gerado pelo Django 4.0.3 em 2023-11-25 19:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_materias'),
    ]

    operations = [
        # Criação do Modelo 'Turmas'
        migrations.CreateModel(
            name='Turmas',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('professor', models.CharField(max_length=120, verbose_name='professor')),
                ('turma', models.IntegerField(max_length=2, verbose_name='turma')),
                ('horario', models.CharField(max_length=8, verbose_name='horario')),
                ('horas', models.IntegerField(max_length=2, verbose_name='horas')),
            ],
        ),
    ]