from django.shortcuts import render
from django.http import HttpResponse
from .models import Subscriber
# Create your views here.
def subscriber(request):
    mySubs = Subscriber.objects.all()
    for sub in mySubs:
        print(sub)
    return HttpResponse('Activation link is invalid!')
