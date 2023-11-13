from django.shortcuts import render, redirect
from .models import Curso
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth import login as login_django
from django.contrib.auth.decorators import login_required
import random
# Create your views here.

@login_required(login_url='/login/')
def home(request):
    cursosLista = Curso.objects.filter(user=request.user)
    return render(request,"Controle.html", {"cursos": cursosLista})



def registrarCurso(request):
    while True:
        random.seed()
        codigo = random.random()
        if Curso.objects.filter(codigo=codigo).first() == True:
            random.seed()
            codigo = random.random()
        else:
            break
    
            
            
    nome=request.POST['txtNome']
    credito=request.POST['numCreditos']
    faltas=0
    match credito:
        case '2':
            fTotal=3
        case '4':
            fTotal=7
        case '6':
            fTotal=11
        case _:
            fTotal=0
    fRestante=fTotal - faltas
    user=request.user
    
    curso= Curso.objects.create(codigo=codigo, nome=nome, credito=credito,faltas=faltas,fTotal=fTotal,fRestante=fRestante, user=user)
    
    messages.success(request, 'Disciplina cadastrada')
    return redirect("/")
    
  
def editarCurso(request, codigo):
    curso= Curso.objects.get(codigo=codigo)
    return render(request,"editarCurso.html", {"curso":curso})


def edicaoCurso(request):
    codigo = request.POST['txtCodigo']
    nome=request.POST['txtNome']
    credito=request.POST['numCreditos']
    curso= Curso.objects.get(codigo=codigo)
    curso.nome=nome
    curso.credito=credito
    match credito:
        case '2':
            curso.fTotal=3
        case '4':
            curso.fTotal=7
        case '6':
            curso.fTotal=11
        case _:
            curso.fTotal=0
    curso.save()
    messages.success(request, 'Disciplina editada')
    
    return redirect('/')
    
def excluirCurso(request, codigo):
    curso= Curso.objects.get(codigo=codigo)
    curso.delete()
    messages.success(request, 'Disciplina excluida')
    return redirect("/")

def plusFaltas(request, codigo):
    curso= Curso.objects.get(codigo=codigo)
    curso.faltas = curso.faltas + 1
    if (curso.fTotal - curso.faltas) >=0:
        curso.fRestante = curso.fTotal - curso.faltas
    else:
        curso.fRestante =0
    curso.save()
    messages.success(request, 'Falta registrada')
    return redirect("/")

def menosFaltas(request, codigo):
    curso= Curso.objects.get(codigo=codigo)
    if curso.faltas > 0:
        curso.faltas = curso.faltas - 1
        if (curso.fTotal - curso.faltas) >=0:
            curso.fRestante = curso.fTotal - curso.faltas
        else:
            curso.fRestante=0
        curso.save()
        messages.success(request, 'Falta revertida')
        return redirect("/")
    
    messages.success(request, 'Seu número de faltas não pode ser negativo')
    return redirect("/")



def cadastro(request):
    if request.method == 'GET':
      return render(request, 'cadastro.html')
    else:
      username = request.POST.get('username')
      email = request.POST.get('email')
      senha = request.POST.get('senha')
      
      user = User.objects.filter(username=username).first() or User.objects.filter(email=email).first()
      if user:
         messages.success(request, 'Nome de usuario ou email já cadastrado!')
         return redirect("/cadastro/")
      
      user = User.objects.create_user(username=username, email=email, password=senha)
      user.save()
      return redirect("/login/")
      

def login(request):
    if request.method == "GET":
        return render(request, 'login.html')
    else:
        username = request.POST.get('username')
        senha = request.POST.get('senha')
        
        user = authenticate(username=username, password=senha)
        
        if user:
            login_django(request, user)
            return redirect('/')
        else:
         messages.success(request, 'Nome de usuario ou senha inválidos! Caso não se lembre de algum desses dados contate o administrador')
         return redirect('/login/')
        