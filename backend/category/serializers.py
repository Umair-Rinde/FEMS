from rest_framework import serializers
from .models import Category

class UploadFileSerializer(serializers.Serializer):
    file = serializers.FileField()

class CategorySerializer (serializers.Serializer):
    class Meta:
        model=Category
        fields='name'