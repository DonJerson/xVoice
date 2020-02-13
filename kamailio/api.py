from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.decorators import action
from rest_framework import viewsets,status
from rest_framework.response import Response
from .models import *
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework import permissions

@api_view(['GET'])
#@permission_classes([])
def get_subscribers(request):
    subscribers = Subscriber.objects.all()
    return Response(SubscriberSerializer(subscribers,many=True).data)


@api_view(['GET'])
def get_current_user(request):
	serializer = CustomerSerializer(request.user)
	return Response(serializer.data)

@api_view(['POST'])
def ApiUsageOG(request):
	newData ={"consumer":{"id":request.data['id']},"serviceProvided":request.data["service"]}
	serializer = ApiUsageSerializer(data=newData)
	if serializer.is_valid():
		print("serializer")
		print(serializer)
		serializer.save()
	else:
		Response({"message" : "tienes un problema, contacte su Administrador de Softwares"})
	return Response({"message" : "SUCCESS"})

@api_view(['POST'])
def RecargaOG(request):
	newData ={"beneficiary":{"id":request.data['id']},"amount":request.data["amount"],"methodOfPayment":"CASH","validated":"false"}
	serializer = RecargaSerializer(data=newData)
	if serializer.is_valid():
		serializer.save()
	else:
		Response({"message" : "tienes un problema, contacte su Administrador de Softwares"})
	return Response({"message" : "SUCCESS"})

class RecargaViewSet(viewsets.ModelViewSet):
	queryset = Customer.objects.all()
	serializer_class = RecargaSerializer
	pass

class ApiUsageViewSet(viewsets.ModelViewSet):
	queryset = Customer.objects.all()
	serializer_class = ApiUsageSerializer
	pass

# @api_view(['POST'])
# def consumeApi(request):
# 	serializer = ApiUsageSerializer(data=request.data)
# 	if serializer.is_valid():
# 		serializer.save()
# 		return Response({"response" : "success", "message" : "Recarga exitosa"})
# 	else:
# 		Response({"response" : "error", "message" : serializer.errors})
# 	return Response({"response" : "success"})

class CustomerViewSet(viewsets.ModelViewSet):
	queryset = Customer.objects.all()
	serializer_class = CustomerSerializer
	pass
