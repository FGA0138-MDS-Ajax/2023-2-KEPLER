from rest_framework import mixins, generics, permissions

from .models import Customer
from .serializers import CustomerSerializer

class CustomerListAPIView(generics.ListAPIView):
    serializer_class = CustomerSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Customer.objects.all()