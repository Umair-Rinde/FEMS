from .apis import *
from django.urls import path
from .apis import UserOtpVerificationAPI

urlpatterns = [
    path('login/', LoginAPI.as_view()),
    path('register/',UserRegistrationAPI.as_view(), name='user-register'),
    path('verify-otp/',UserOtpVerificationAPI.as_view()),

]
