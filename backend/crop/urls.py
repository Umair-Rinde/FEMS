from django.urls import path
from .views import (
    CropAPIView, FertilizerAPIView, PlotAPIView,
    CropPlotAPIView, CropFertilizerAPIView, FarmerAPIView
)

urlpatterns = [
    path('', CropAPIView.as_view(), name='crop-list'),
    path('<str:uuid>/', CropAPIView.as_view(), name='crop-detail'),
    path('fertilizers/', FertilizerAPIView.as_view(), name='fertilizer-list'),
    path('fertilizers/<str:uuid>/', FertilizerAPIView.as_view(), name='fertilizer-detail'),
    path('crop-plots/', CropPlotAPIView.as_view(), name='crop-plot-list'),
    path('crop-plots/<str:uuid>/', CropPlotAPIView.as_view(), name='crop-plot-detail'),
    path('crop-fertilizers/', CropFertilizerAPIView.as_view(), name='crop-fertilizer-list'),
    path('crop-fertilizers/<str:uuid>/', CropFertilizerAPIView.as_view(), name='crop-fertilizer-detail'),
]
