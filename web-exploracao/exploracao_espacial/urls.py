from django.contrib import admin
from django.urls import path
from space.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', Home.as_view(),name='home'),
    path('philae/', Philiae.as_view(),name='philae'),
]
