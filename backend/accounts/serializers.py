
from rest_framework import serializers
from .models import User,PrincipleSchool

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'full_name', 'phone', 'user_type', )

class UserAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email','gender','is_active' ,'full_name', 'phone', 'user_type' )

class UserGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'full_name', 'phone', 'user_type','gender','is_active' )
        
class PrinciplePostSerializer(serializers.ModelSerializer):
    class Meta:
        model=  PrincipleSchool
        fields= '__all__'

class UserRegisterSerailizer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={"input_type": "password"}, write_only=True)

    class Meta:
        model = User
        fields = (
            "username",
            "email",
            "phone",
            "password",
            "password2",
        )
        extra_kwargs = {"password": {"write_only": True}}

    def save(self):
        # user = User(email=self.validated_data["email"])
        user = User(
            username=self.validated_data["username"],
            email=self.validated_data["email"],
            phone=self.validated_data["phone"]
        )
        password = self.validated_data["password"]
        password2 = self.validated_data["password2"]

        if (password and password2) and password != password2:
            raise serializers.ValidationError({"password": "Passwords must match."})
        user.set_password(password)
        user.save()
        return user

