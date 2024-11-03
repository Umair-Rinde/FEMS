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
    serializer_get_class = CropGETSerializer
    serializer_post_class = CropPOSTSerializer
    allowed_methods = ['GET', 'POST']


class FertilizerAPIView(BaseAPIView):
    model = Fertilizer
    serializer_get_class = FertilizerGETSerializer
    serializer_post_class = FertilizerPOSTSerializer
    allowed_methods = ['GET', 'POST']

class PlotAPIView(BaseAPIView):
    model = Plot
    serializer_get_class = PlotGETSerializer
    serializer_post_class = PlotPOSTSerializer
    allowed_methods = ['GET', 'POST']


class CropPlotAPIView(BaseAPIView):
    model = CropPlot
    serializer_get_class = CropPlotGETSerializer
    serializer_post_class = CropPlotPOSTSerializer
    allowed_methods = ['GET', 'POST']


class CropFertilizerAPIView(BaseAPIView):
    model = CropFertilizer
    serializer_get_class = CropFertilizerGETSerializer
    serializer_post_class = CropFertilizerPOSTSerializer
    allowed_methods = ['GET', 'POST']


class FarmerAPIView(BaseAPIView):
    model = Farmer
    serializer_get_class = FarmerGETSerializer
    serializer_post_class = FarmerPOSTSerializer
    allowed_methods = ['GET', 'POST']
