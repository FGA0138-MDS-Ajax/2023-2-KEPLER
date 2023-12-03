# Gerado pelo Django 4.0.3 em 2023-11-25 18:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        # Criação do Modelo 'Materias'
        migrations.CreateModel(
            name='Materias',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('codigo', models.CharField(max_length=7, verbose_name='Código')),
                ('disciplina', models.CharField(max_length=70, verbose_name='Disciplinas')),
            ],
        ),
    ]