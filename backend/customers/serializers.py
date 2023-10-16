from rest_framework import serializers
from .models import Customer

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('id', 'nome', 'matricula', 'email', 'senha',)
        read_only_fields = ('id',)
