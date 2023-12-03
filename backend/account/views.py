from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from account.serializers import (
    SendPasswordResetEmailSerializer,
    UserChangePasswordSerializer,
    UserLoginSerializer,
    UserPasswordResetSerializer,
    UserProfileSerializer,
    UserRegistrationSerializer,
    SelecionarMateriaSerializer,
    MandarMateriaSerializer,
)
from django.contrib.auth import authenticate
from account.renderers import UserRenderer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from .models import MateriaSelecionada
import json

# Função auxiliar para gerar manualmente tokens de acesso e atualização
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

# View para o registro de usuário
class UserRegistrationView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, format=None):
        serializer = UserRegistrationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = get_tokens_for_user(user)
        return Response({'token': token, 'msg': 'Cadastro bem-sucedido'}, status=status.HTTP_201_CREATED)

# View para o login de usuário
class UserLoginView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, format=None):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.data.get('email')
        password = serializer.data.get('password')
        user = authenticate(email=email, password=password)
        if user is not None:
            token = get_tokens_for_user(user)
            return Response({'token': token, 'msg': 'Login bem-sucedido'}, status=status.HTTP_200_OK)
        else:
            return Response({'errors': {'non_field_errors': ['E-mail ou senha inválidos']}}, status=status.HTTP_404_NOT_FOUND)

# View para o perfil do usuário
class UserProfileView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

# View para alteração de senha do usuário
class UserChangePasswordView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        serializer = UserChangePasswordSerializer(data=request.data, context={'user': request.user})
        serializer.is_valid(raise_exception=True)
        return Response({'msg': 'Senha alterada com sucesso'}, status=status.HTTP_200_OK)

# View para envio de e-mail de redefinição de senha
class SendPasswordResetEmailView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, format=None):
        serializer = SendPasswordResetEmailSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response({'msg': 'Link de redefinição de senha enviado. Por favor, verifique seu e-mail'}, status=status.HTTP_200_OK)

# View para redefinição de senha do usuário
class UserPasswordResetView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, uid, token, format=None):
        serializer = UserPasswordResetSerializer(data=request.data, context={'uid': uid, 'token': token})
        serializer.is_valid(raise_exception=True)
        return Response({'msg': 'Senha redefinida com sucesso'}, status=status.HTTP_200_OK)

# View para processamento de horário
@csrf_exempt
def processar_horario(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        horario = data.get('horario', '')
        
        # Realize as operações necessárias com o horário, por exemplo, salve no banco de dados

        # Suponha que o arquivo JSON tenha uma chave 'horarios'
        with open('../frontend/src/data/turmas-professores.json') as json_file:
            data_json = json.load(json_file)
            materia_encontrada = [obj.get('nomeMateria', '') for obj in data_json if 'horario' in obj and obj['horario'] == horario]

        if materia_encontrada:
            return JsonResponse({'status': 'sucesso', 'materia_encontrada': materia_encontrada})
        else:
            return JsonResponse({'status': 'erro', 'message': 'Nenhuma matéria encontrada para o horário informado.'}, status=404)

    return JsonResponse({'status': 'erro', 'message': 'Método não permitido'}, status=405)

# View para selecionar matéria
@api_view(['POST'])
def selecionar_materia(request):
    serializer = SelecionarMateriaSerializer(data=request.data)
    if serializer.is_valid():
        id_turma_professor = serializer.validated_data['idTurmaProfessor']

        # Busque os dados correspondentes no arquivo JSON
        materia_json = obter_dados_do_json(id_turma_professor)

        if materia_json:
            # Crie uma instância do modelo e salve no banco de dados
            materia_selecionada = MateriaSelecionada(**materia_json)
            materia_selecionada.save()

            return Response({'status': 'Matéria selecionada com sucesso!'})
        else:
            return Response({'erro': 'ID de turma professor não encontrado no JSON'}, status=404)
    return Response(serializer.errors, status=400)

# Função auxiliar para obter dados do JSON
def obter_dados_do_json(id_turma_professor):
    # Abra o arquivo JSON e procure pelo id_turma_professor
    with open('../frontend/src/data/turmas-professores.json') as json_file:
        turmas_json = json.load(json_file)
        for turma in turmas_json:
            if turma['idTurmaProfessor'] == id_turma_professor:
                # Filtra as chaves que correspondem aos campos do modelo
                dados_filtrados = {campo.name: turma[campo.name] for campo in MateriaSelecionada._meta.get_fields() if campo.name in turma}
                return dados_filtrados
        return None
    

#manda a materia de volta para o frontend
class mandar_materiaView(APIView):
    def get(self, request):
        dados = MateriaSelecionada.objects.all()       
        serializer = MandarMateriaSerializer(dados, many=True)
      
        return Response(serializer.data)