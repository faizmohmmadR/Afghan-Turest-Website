from django.urls import path 
from .views import indexView, TodoDetailView

urlpatterns = [
    path('',indexView),
    path('edit/<int:pk>',TodoDetailView.as_view()),
    path('delete/<int:pk>',TodoDetailView.as_view())
]

