from rest_framework import renderers
import json

# Renderizador personalizado para usuários
class UserRenderer(renderers.JSONRenderer):
    # Conjunto de caracteres utilizado
    charset = 'utf-8'

    def render(self, data, accepted_media_type=None, renderer_context=None):
        # Inicializa a resposta como uma string vazia
        response = ''
        
        # Verifica se há instâncias de 'ErrorDetail' nos dados
        if 'ErrorDetail' in str(data):
            # Se houver, encapsula os erros em um dicionário 'errors'
            response = json.dumps({'errors': data})
        else:
            # Se não houver, converte os dados para formato JSON
            response = json.dumps(data)

        return response