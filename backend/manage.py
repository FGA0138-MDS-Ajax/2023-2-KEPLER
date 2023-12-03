"""Utilitário de linha de comando do Django para tarefas administrativas."""
import os
import sys
import dotenv

def main():
    # Carrega variáveis de ambiente de um arquivo .env
    dotenv.load_dotenv()

    """Executa tarefas administrativas."""
    # Define o módulo de configurações padrão do Django para o projeto
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'djangoauthapi1.settings')
    
    try:
        # Importa a função execute_from_command_line do Django
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        # Levanta um ImportError se o Django não estiver instalado ou não estiver disponível
        raise ImportError(
            "Não foi possível importar o Django. Você tem certeza de que está "
            "instalado e disponível na variável de ambiente PYTHONPATH? Esqueceu "
            "de ativar um ambiente virtual?"
        ) from exc
        
    # Executa comandos de gerenciamento do Django a partir dos argumentos da linha de comando
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    # Executa a função principal quando o script é executado
    main()
