from django.db import models
from accounts.models import User
from Crop.models import Crop
import uuid


    
class WaterResource(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=128)
    resource_type = models.CharField(
        max_length=50, 
        choices=[('WELL', 'Well'), ('CANAL', 'Canal'), ('RIVER', 'River'), ('TUBEWELL', 'Tubewell')],
        default='WELL'
    )
    plot = models.ForeignKey('Crop.Plot', on_delete=models.CASCADE, related_name='water_resources')
    availability_status = models.CharField(
        max_length=50, 
        choices=[('AVAILABLE', 'Available'), ('SCARCE', 'Scarce'), ('NOT_AVAILABLE', 'Not Available')],
        default='AVAILABLE'
    )

    def __str__(self):
        return f'{self.name} ({self.resource_type})'
