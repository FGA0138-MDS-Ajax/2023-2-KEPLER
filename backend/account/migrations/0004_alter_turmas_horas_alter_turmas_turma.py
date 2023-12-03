# Gerado pelo Django 4.0.3 em 2023-11-25 19:45

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0003_turmas'),
    ]

    operations = [
        # Alteração do campo 'horas' no modelo 'Turmas'
        migrations.AlterField(
            model_name='turmas',
            name='horas',
            field=models.IntegerField(validators=[django.core.validators.MaxValueValidator(2)], verbose_name='horas'),
        ),
        # Alteração do campo 'turma' no modelo 'Turmas'
        migrations.AlterField(
            model_name='turmas',
            name='turma',
            field=models.IntegerField(validators=[django.core.validators.MaxValueValidator(2)], verbose_name='turma'),
        ),
    ]