import jwt
import random
from datetime import datetime, timedelta
from django.conf import settings
from portal.base import BaseAPIView
from django.utils import timezone
from services.email import EmailService
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.exceptions import ValidationError
from accounts.models import User
from accounts.serializers import (
    UserRegisterSerailizer,
)
from services.otpservice import send_otp, otp_verify, resend_otp

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
    

class UserOtpVerificationAPI(APIView):
    def post(self, request, *args, **kwargs):
        data = request.data

        if data.get("resend_otp") == "resend_otp":
            if data.get("phone"):
                response = resend_otp(data.get("phone"))
                return Response(response)
            return Response({"msg": "phone field required"}, status=400)

        user = User.objects.filter(username=data.get("username")).first()
        if not (data.get("username") and data.get("phone") and data.get("otp")):
            return Response(
                {"msg": "username, phone, and otp are required"}, status=400
            )

        try:
            response = otp_verify(data.get("phone"), data.get("otp"))
            if response.get("type") == "success":
                user.is_active = True
                user.save()
        except:
            print("--except error userOtpVerificationApi======", response)
        return Response(response)


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
            # send_otp(user.phone, {})
            # EmailService(
            #     f"""Confirm Your Registration with One-Time Password (OTP) """,
            #     f"""Dear {user.username},\n\nThank you for registering with Dr. Babasaheb Ambedkar Technological University! To complete your registration, please use the following One-Time Password (OTP):  {otp}.\n\nPlease do not share this code with anyone.\n\nIf you did not request this registration, please ignore this email.\n\n Thank you,\n [ Dr. Babasaheb Ambedkar Technological University ]""",
            #     [user.email, ],
            #     [],
            # ).send()

            data = serializer.data
            # data['otp'] = otp
            return Response(data, status=201)
        return Response(serializer.errors, status=400)
    


