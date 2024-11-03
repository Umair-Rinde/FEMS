from rest_framework import status
from .models import Crop, Fertilizer, Plot, CropPlot, CropFertilizer, Farmer
from .serializers import (
    CropGETSerializer, CropPOSTSerializer,
    FertilizerGETSerializer, FertilizerPOSTSerializer,
    PlotGETSerializer, PlotPOSTSerializer,
    CropPlotGETSerializer, CropPlotPOSTSerializer,
    CropFertilizerGETSerializer, CropFertilizerPOSTSerializer,
    FarmerGETSerializer, FarmerPOSTSerializer
)
from portal.base import BaseAPIView  

class CropAPIView(BaseAPIView):
    model = Crop
    serializer_class = CropGETSerializer
    # post_serializer = CropPOSTSerializer
    allowed_methods = ['GET', 'POST']


class FertilizerAPIView(BaseAPIView):
    model = Fertilizer
    serializer_class = FertilizerGETSerializer
    post_serializer = FertilizerPOSTSerializer
    allowed_methods = ['GET', 'POST']

class PlotAPIView(BaseAPIView):
    model = Plot
    serializer_class = PlotGETSerializer
    post_serializer = PlotPOSTSerializer
    allowed_methods = ['GET', 'POST']


class CropPlotAPIView(BaseAPIView):
    model = CropPlot
    serializer_class = CropPlotGETSerializer
    post_serializer = CropPlotPOSTSerializer
    allowed_methods = ['GET', 'POST']


class CropFertilizerAPIView(BaseAPIView):
    model = CropFertilizer
    serializer_class = CropFertilizerGETSerializer
    post_serializer = CropFertilizerPOSTSerializer
    allowed_methods = ['GET', 'POST']


class FarmerAPIView(BaseAPIView):
    model = Farmer
    serializer_class = FarmerGETSerializer
    post_serializer = FarmerPOSTSerializer
    allowed_methods = ['GET', 'POST']
