from django.shortcuts import render

from django.views.generic.detail import DetailView

from todo.models import Todo
# Create your views here.

def index(request):
    return render(request, 'frontend/index.html')

class TodoDetailView(DetailView):
    model = Todo
    template_name =  'frontend/index.html'

# This is the view that you imported in the frontend/urls.py
def indexView(request, *args, **kwargs):
    return render(request, "frontend/index.html")  # notice the template used here