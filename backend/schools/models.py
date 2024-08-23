from django.db import models
from portal.base import BaseModel
# Create your models here.

class Schools (BaseModel):
    name=models.CharField(max_length=50)
    code=models.CharField(max_length=50, unique=True)
    address=models.CharField(max_length=50)