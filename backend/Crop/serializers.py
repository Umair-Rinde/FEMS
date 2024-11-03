from rest_framework import serializers
from .models import Crop, Fertilizer, Plot, CropPlot, CropFertilizer, Farmer

class CropGETSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crop
        fields = '__all__'

class CropPOSTSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crop
        fields = '__all__'


class FertilizerGETSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fertilizer
        fields = '__all__'

class FertilizerPOSTSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fertilizer
        fields = '__all__'

class PlotGETSerializer(serializers.ModelSerializer):
    farmer_name = serializers.CharField(source='farmer.user.full_name', read_only=True)

    class Meta:
        model = Plot
        fields = '__all__'

class PlotPOSTSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plot
        fields = '__all__'


class CropPlotGETSerializer(serializers.ModelSerializer):
    crop_name = serializers.CharField(source='crop.name', read_only=True)
    plot_name = serializers.CharField(source='plot.name', read_only=True)

    class Meta:
        model = CropPlot
        fields = '__all__'

class CropPlotPOSTSerializer(serializers.ModelSerializer):
    class Meta:
        model = CropPlot
        fields = '__all__'


class CropFertilizerGETSerializer(serializers.ModelSerializer):
    crop_name = serializers.CharField(source='crop.name', read_only=True)
    fertilizer_name = serializers.CharField(source='fertilizer.name', read_only=True)

    class Meta:
        model = CropFertilizer
        fields = '__all__'

class CropFertilizerPOSTSerializer(serializers.ModelSerializer):
    class Meta:
        model = CropFertilizer
        fields = '__all__'


class FarmerGETSerializer(serializers.ModelSerializer):
    crops = CropGETSerializer(many=True, read_only=True)  # Nested serialization of crops

    class Meta:
        model = Farmer
        fields = '__all__'

class FarmerPOSTSerializer(serializers.ModelSerializer):
    class Meta:
        model = Farmer
        fields = '__all__'
