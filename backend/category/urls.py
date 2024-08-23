from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static
from .views import UploadFileView
from .views import export_profiles_xlsx,CategoryBulkCreate,DepartmentBulkCreate

router = DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
]

urlpatterns = [
    
    path('upload/', CategoryBulkCreate.as_view(), name='upload-file'),
    path('upload-dep/', DepartmentBulkCreate.as_view(), name='upload-file'),
    path('upload/export/profiles/', export_profiles_xlsx, name='export_profiles_xlsx'),
]
