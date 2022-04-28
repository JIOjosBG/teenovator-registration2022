from django.urls import path
from . import views

urlpatterns = [
    path('',views.overview,name='overview'),
    path('list/',views.listView,name='list'),
    path('create/',views.createView,name='create')
    
]