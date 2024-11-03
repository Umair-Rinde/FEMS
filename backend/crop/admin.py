from django.contrib import admin
from .models import Crop, Fertilizer, Plot, CropPlot, CropFertilizer, Farmer

@admin.register(Crop)
class CropAdmin(admin.ModelAdmin):
    list_display = ['name', 'variety', 'season']
    search_fields = ['name', 'variety']
    list_filter = ['season']


@admin.register(Fertilizer)
class FertilizerAdmin(admin.ModelAdmin):
    list_display = ['name', 'type', 'quantity', 'application_date']
    search_fields = ['name']
    list_filter = ['type', 'application_date']


@admin.register(Plot)
class PlotAdmin(admin.ModelAdmin):
    list_display = ['name', 'area', 'soil_type', 'farmer']
    search_fields = ['name', 'farmer__username']
    list_filter = ['soil_type', 'farmer']


@admin.register(CropPlot)
class CropPlotAdmin(admin.ModelAdmin):
    list_display = ['crop', 'plot']
    search_fields = ['crop__name', 'plot__name']


@admin.register(CropFertilizer)
class CropFertilizerAdmin(admin.ModelAdmin):
    list_display = ['crop', 'fertilizer', 'application_rate']
    search_fields = ['crop__name', 'fertilizer__name']


@admin.register(Farmer)
class FarmerAdmin(admin.ModelAdmin):
    list_display = ['user']
    search_fields = ['user__username']
    

