from uuid import uuid4
from django.db import models
from .managers import MyUserManager
from django.core.validators import RegexValidator
from django.contrib.auth.models import AbstractBaseUser 
from portal.base import BaseModel
from django.contrib.auth.models import User
from schools.models import Schools

class MyUser(AbstractBaseUser):
    email                   = models.EmailField(max_length=255, unique=True)
    is_active               = models.BooleanField(default=True)
    is_admin                = models.BooleanField(default=False)
    in_assets               = models.BooleanField(default=False)
    objects                 = MyUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

class User(AbstractBaseUser):
    id        = models.UUIDField(primary_key=True, default=uuid4)
    username = models.CharField(max_length=128, unique=True, blank=True)
    phone = models.CharField(
            max_length=15,  
            unique=True,
            validators=[RegexValidator(
                regex=r'^[0-9+]*$',
                message="Enter a valid phone number with numbers and '+' only",
            )]
        )   
    ROLES = (
        ('principal', 'Principal'),
        ('hq', 'Headquarters'),
    )
    full_name = models.CharField(max_length=128)
    user_type = models.CharField(max_length=10, default='ADMIN', choices=ROLES)
    gender    = models.CharField(max_length=10, default='MALE')
    email     = models.EmailField(max_length=255, unique=True, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_admin  = models.BooleanField(default=False)
    registered_on = models.DateTimeField(auto_now_add=True)
    is_guest = models.BooleanField(default=False)
    objects   = MyUserManager()

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ['full_name', 'user_type', 'is_guest', 'phone',]

    def __str__(self):
        return self.username
    
    def save(self, *args, **kwargs):
        # if not self.username:
        #     user = User.objects.all().order_by('-registered_on')[:1].only('username')
        #     if user.exists():
        #         self.username = "USR{0:0=4d}".format(int(user.first().username[3:]) + 1)
        #     else:
        #         self.username = "USR0001" 
        return super().save(*args, **kwargs)
    
    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        return self.is_admin


class PrincipleSchool(BaseModel):
    principle= models.ForeignKey(User,on_delete=models.CASCADE)
    school = models.ForeignKey(Schools,on_delete=models.CASCADE)



