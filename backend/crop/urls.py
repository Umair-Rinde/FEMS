from django.urls import path
from .views import (
    CropAPIView, FertilizerAPIView, PlotAPIView,
    CropPlotAPIView, CropFertilizerAPIView, FarmerAPIView
)

urlpatterns = [
    path('crops/', CropAPIView.as_view(), name='crop-list'),
    path('crops/<int:id>/', CropAPIView.as_view(), name='crop-detail'),
    path('fertilizers/', FertilizerAPIView.as_view(), name='fertilizer-list'),
    path('fertilizers/<int:id>/', FertilizerAPIView.as_view(), name='fertilizer-detail'),
    path('plots/', PlotAPIView.as_view(), name='plot-list'),
    path('plots/<int:id>/', PlotAPIView.as_view(), name='plot-detail'),
    path('crop-plots/', CropPlotAPIView.as_view(), name='crop-plot-list'),
    path('crop-plots/<int:id>/', CropPlotAPIView.as_view(), name='crop-plot-detail'),
    path('crop-fertilizers/', CropFertilizerAPIView.as_view(), name='crop-fertilizer-list'),
    path('crop-fertilizers/<int:id>/', CropFertilizerAPIView.as_view(), name='crop-fertilizer-detail'),
    path('farmers/', FarmerAPIView.as_view(), name='farmer-list'),
    path('farmers/<int:id>/', FarmerAPIView.as_view(), name='farmer-detail'),
]
