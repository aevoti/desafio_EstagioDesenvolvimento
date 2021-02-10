from django.urls import path
from .views import home, search, search_history

urlpatterns = [
    path('',home, name="index"),
    path('place/',search,name="search"),
    path('history/',search_history,name="search_history"),
]