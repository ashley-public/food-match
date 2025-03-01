from django.urls import path
from api import views
from .views import create_post

urlpatterns = [
    path('post/', views.PostList.as_view(), name='post_list'),  # Handles both GET and POST
]