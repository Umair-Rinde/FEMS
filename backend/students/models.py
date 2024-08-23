from django.db import models
from portal.base import BaseModel
from schools.models import Schools
# Create your models here.
class students (BaseModel):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    class_name = models.CharField(max_length=20)
    school = models.ForeignKey(Schools,on_delete=models.CASCADE)
    roll_number = models.CharField(max_length=50, unique=True, default='01')

class marks (BaseModel):
    student = models.ForeignKey(students, on_delete=models.CASCADE)
    marks = models.IntegerField()
    scanned_answer_sheet = models.FileField(upload_to='answer_sheets/')
    submission_date = models.DateTimeField(auto_now_add=True)
    exam_date=models.DateTimeField()