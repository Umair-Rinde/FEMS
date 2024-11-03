from .models import WaterResource
from .serializers import WaterResourceGETSerializer, WaterResourcePOSTSerializer
from portal.base import BaseAPIView 

class WaterResourceAPIView(BaseAPIView):
    model = WaterResource
    serializer_get_class = WaterResourceGETSerializer
    serializer_post_class = WaterResourcePOSTSerializer
