from .apis import *
from django.urls import path
from .apis import UserOtpVerificationAPI
from crop.views import FarmerAPIView

urlpatterns = [
    path('login/', LoginApiView.as_view()),
    path('register/',UserRegistrationAPI.as_view(), name='user-register'),
    path('verify-otp/',UserOtpVerificationAPI.as_view()),
    path('farmers/', FarmerAPIView.as_view(), name='farmer-list'),
    path('farmers/<uuid:id>/', FarmerAPIView.as_view(), name='farmer-detail'),
]
