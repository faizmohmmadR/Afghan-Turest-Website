from rest_framework import routers

from .views import TodoViewSet

router = routers.DefaultRouter()

router.register('todo',TodoViewSet, 'todo')
# router.register('<The URL prefix>', <The viewset class>, '<The URL name>')

urlpatterns = router.urls