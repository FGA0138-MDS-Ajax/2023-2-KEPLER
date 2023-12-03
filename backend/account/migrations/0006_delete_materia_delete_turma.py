# Gerado pelo Django 4.0.3 em 2023-11-30 19:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0005_rename_materias_materia_rename_turmas_turma'),
    ]

    operations = [
        # Exclui o modelo 'Materia'
        migrations.DeleteModel(
            name='Materia',
        ),
        # Exclui o modelo 'Turma'
        migrations.DeleteModel(
            name='Turma',
        ),
    ]