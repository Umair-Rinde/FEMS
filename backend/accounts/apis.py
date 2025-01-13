import jwt
import random
from django.conf import settings
from services.email import EmailService
from rest_framework.views import APIView
from rest_framework.response import Response
from accounts.models import User
from accounts.serializers import (
    UserRegisterSerailizer,
)

SECRET_KEY = settings.SECRET_KEY
class LoginApiView(APIView):
    def post(self, request):
        
     
        email   = request.data.get('email')
        print("-----email",email)

        password = request.data.get('password')
        print("-----password",password)
    
        
        try:
            user = User.objects.get(email=email)
           
        except User.DoesNotExist:
            return Response(
                {
                    'message': 'Invalid credentials'
                },
                status=400
            )
        
        payload = {
            'user_id': str(user.id),
        }
        token = jwt.encode(payload, SECRET_KEY, algorithm='HS256')  
        
        return Response(
            { 'full_name':str(user),
                'username': user.username,
                "user_id":user.id,
                'user_type':user.user_type,
                'phone':user.phone,
                'email': user.email,
                'token': token,
                
            }
        )
    



class UserRegistrationAPI(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UserRegisterSerailizer(data=request.data)

        if serializer.is_valid():
            user = serializer.save()
        
            user.is_active = False
            user.save()

            otp = random.randint(100000, 999999)
            # send mail with otp
            # subject, body, to
            print(otp , user.username)
            EmailService(
                f"""Confirm Your Registration with One-Time Password (OTP) """,
                f"""Dear {user.username},\n\nThank you for registering with Dr. Babasaheb Ambedkar Technological University! To complete your registration, please use the following One-Time Password (OTP):  {otp}.\n\nPlease do not share this code with anyone.\n\nIf you did not request this registration, please ignore this email.\n\n Thank you,\n [ Dr. Babasaheb Ambedkar Technological University ]""",
                [user.email, ],
                [],
            ).send()

            data = serializer.data
            data['otp'] = otp
            return Response(data, status=201)
        return Response(serializer.errors, status=400)
    


