from django.contrib import admin
from django.urls import path, include  # do not forget to import include as well

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('api.urls')),
    path('', include('frontend.urls')),  # add a url from frontend.urls
]