from django.core.mail import EmailMessage
import os

# Utilitário para envio de e-mail
class Util:
    @staticmethod
    def send_email(data):
        # Criação de uma instância de EmailMessage
        email = EmailMessage(
            subject=data['subject'],
            body=data['body'],
            from_email=os.environ.get('EMAIL_FROM'),
            to=[data['to_email']]
        )
        # Envio do e-mail
        email.send()