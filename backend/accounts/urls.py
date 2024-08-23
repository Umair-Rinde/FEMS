from .apis import *
from django.urls import path
from .apis import UserOtpVerificationAPI,Aadhaar_otp_and_verificationAPI

urlpatterns = [
    path('login/', LoginAPI.as_view()),
    path('register/',UserRegistrationAPI.as_view(), name='user-register'),
    path('verify-otp/',UserOtpVerificationAPI.as_view()),
    path('aadhaar-otp-n-verify/',Aadhaar_otp_and_verificationAPI.as_view()),

]
