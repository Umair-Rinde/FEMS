from django.urls import path
from .views import WaterResourceAPIView
from crop.views import PlotAPIView

urlpatterns = [
    path('water-resources/', WaterResourceAPIView.as_view(), name='water-resource-list'),
    path('water-resources/<str:uuid>/', WaterResourceAPIView.as_view(), name='water-resource-detail'),
    
    path('plots/', PlotAPIView.as_view(), name='plot-list'),
    path('plots/<str:uuid>/', PlotAPIView.as_view(), name='plot-detail'),
]
