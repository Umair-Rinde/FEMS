from django.db import models
from portal.base import BaseModel

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)


class Department(models.Model):
    name                    = models.CharField(max_length=128, unique=True)
    description             = models.TextField(default="-", blank=True, null=True)
    manager                 = models.ForeignKey("accounts.MyUser", on_delete=models.SET_NULL, null=True, blank=True)


    def __str__(self):
        return self.name

ROLE_CHOICES = (
    ("Admin", "Admin"),
    ("User", "User"),
    ("Service Manager", "Service Manager"),
    ("Agent", "Agent"),
)


class Profile(models.Model):
    user                    = models.OneToOneField("accounts.MyUser", on_delete=models.CASCADE, blank=True, null=True)
    full_name               = models.CharField(max_length=128)
    department              = models.ForeignKey(Department,on_delete=models.SET_NULL,blank=True, null=True,)
    phone                   = models.CharField(max_length=20, unique=True)
    business_phone          = models.CharField(max_length=20, blank=True, null=True)
    profile_pic             = models.ImageField(upload_to="accounts/profile_pics",blank=True,null=True,default="accounts/profile_pics/default.png",)
    user_role               = models.CharField(max_length=20, choices=ROLE_CHOICES, default="User")
    created_on              = models.DateTimeField(auto_now_add=True)
    updated_on              = models.DateTimeField(auto_now=True)
    is_active               = models.BooleanField(default=False)
    is_skip_manager         = models.BooleanField(default=False)
    in_assets_team          = models.BooleanField(default=False)
    is_asset_manager        = models.BooleanField(default=False)
    inactive_rituals_done   = models.BooleanField(default=False)

    def __str__(self):
        return self.full_name
    
class SubCategory(models.Model):
    category                = models.ForeignKey(Category, on_delete=models.CASCADE)
    name                    = models.CharField(max_length=100)
    head                    = models.ForeignKey("accounts.MyUser",on_delete=models.SET_NULL,null=True,related_name="head_for_subcategory",)
    users                   = models.ManyToManyField("accounts.MyUser", related_name="users_in_subcategory", blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name        = "Sub Category"
        verbose_name_plural = "Sub Categories"

