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
    lookup='id'
    serializer_class = CropGETSerializer
    post_serializer = CropPOSTSerializer


class FertilizerAPIView(BaseAPIView):
    model = Fertilizer
    lookup='id'
    serializer_class = FertilizerGETSerializer
    post_serializer = FertilizerPOSTSerializer


class PlotAPIView(BaseAPIView):
    model = Plot
    lookup='id'
    serializer_class = PlotGETSerializer
    post_serializer = PlotPOSTSerializer



class CropPlotAPIView(BaseAPIView):
    model = CropPlot
    lookup='id'
    serializer_class = CropPlotGETSerializer
    post_serializer = CropPlotPOSTSerializer



class CropFertilizerAPIView(BaseAPIView):
    model = CropFertilizer
    lookup='id'
    serializer_class = CropFertilizerGETSerializer
    post_serializer = CropFertilizerPOSTSerializer



class FarmerAPIView(BaseAPIView):
    model = Farmer
    lookup='id'
    serializer_class = FarmerGETSerializer
    post_serializer = FarmerPOSTSerializer

