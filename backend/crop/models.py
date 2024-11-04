from django.db import models
from accounts.models import User
import uuid
from portal.base import BaseModel

class Crop(BaseModel):
    name = models.CharField(max_length=128)
    variety = models.CharField(max_length=128, blank=True)
    season = models.CharField(max_length=50) 

    def __str__(self):
        return f'{self.name} ({self.variety})'


class Fertilizer(BaseModel):
    name = models.CharField(max_length=128)
    type = models.CharField(
        max_length=50, 
        choices=[('ORGANIC', 'Organic'), ('INORGANIC', 'Inorganic')],
        default='INORGANIC'
    )
    quantity = models.FloatField(help_text="Quantity in kilograms")
    application_date = models.DateField()

    def __str__(self):
        return f'{self.name} ({self.type}) - {self.quantity} kg'

class Plot(BaseModel):
    name = models.CharField(max_length=128)
    area = models.FloatField(help_text="Area in acres or hectares")
    soil_type = models.CharField(max_length=50, blank=True)  # e.g., 'Clay', 'Sandy', etc.
    survey_number = models.CharField(max_length=128, blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    altitude = models.FloatField(blank=True, null=True)
    farmer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='plots')

    def __str__(self):
        return f'{self.name} ({self.area} acres)'

    
class CropPlot(BaseModel):
    crop = models.ForeignKey(Crop, on_delete=models.CASCADE)
    plot = models.ForeignKey(Plot, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('crop', 'plot')  

    def __str__(self):
        return f'{self.crop.name} on {self.plot.name}'
    
class CropFertilizer(BaseModel):
    crop = models.ForeignKey(Crop, on_delete=models.CASCADE)
    fertilizer = models.ForeignKey(Fertilizer, on_delete=models.CASCADE)
    application_rate = models.FloatField(help_text="Rate of application in kg/acre")  # Optional additional field

    class Meta:
        unique_together = ('crop', 'fertilizer')  # Ensuring unique pairs of crop and fertilizer

    def __str__(self):
        return f'{self.fertilizer.name} used for {self.crop.name}'
    

class Farmer(BaseModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE)  
    crops = models.ManyToManyField(Crop, related_name='farmers')  

    def __str__(self):
        return self.user.full_name
    