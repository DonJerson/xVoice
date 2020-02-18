from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.decorators import action
from rest_framework import viewsets,status
from rest_framework.response import Response
from .models import *
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.decorators import api_view,permission_classes
from rest_framework import permissions
from datetime import timedelta
import random

datetimeFormat = '%Y-%m-%d %H:%M:%S.%f'

def phn():
    n = '0000000000'
    while '9' in n[3:6] or n[3:6]=='000' or n[6]==n[7]==n[8]==n[9]:
        n = str(random.randint(10**9, 10**10-1))
    return n[:3] + n[3:6] + n[6:]

@api_view(['POST'])
#@permission_classes([])
def get_subscriber(request):
    subscribers = Customer.objects.get(email=request.data["email"])
    return Response(CustomerSerializer(subscribers,many=False).data)

@api_view(['POST'])
@permission_classes([])
def new_customer(request):
	email = request.data["email"]
	password = request.data["password"]
	newCustomer = Customer.objects.create(username=email,password=password,email=email)
	return Response(CustomerSerializer(newCustomer,many=False).data)

@api_view(['GET'])
def update_balance(request):
	logs = Acc.objects.filter(consumer__isnull=True)
	#logs = Acc.objects.all()
	index = 0
	while index < len(logs):
		newLogs = logs.filter(callid=logs[index].callid)
		print(newLogs)
		if len(newLogs)==2:
			consumer = Subscriber.objects.get(username=newLogs[index].src_user).customer
			startDate=""
			endDate=""

			for log in newLogs:
				log.consumer=consumer
				log.save()
				if log.method =="INVITE":
					startDate=log.time
				else: endDate=log.time
			diff = (endDate-startDate).seconds/60
			destination = logs[index].dst_user
			if destination[0]=="1":
				rate=0.010
			try:
				consumer.balance=float(consumer.balance)-rate*diff
			except Exception as e:
				consumer.balance=-rate*diff
			consumer.save()
			logs = logs.exclude(callid=logs[index].callid)
		else:
			index+=1
	return Response(AccSerializer(logs,many=True).data)

@api_view(['POST'])
def new_subscriber(request):
	customer = Customer.objects.get(id=request.data['id'])
	username = phn()
	password=request.data["password"]
	newSubscriber = Subscriber.objects.create(username=username,password=password,customer=customer)
	return Response({"message" : "SUCCESS"})

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
	queryset = Recarga.objects.all()
	serializer_class = RecargaSerializer
	pass

class ApiUsageViewSet(viewsets.ModelViewSet):
	queryset = ApiUsage.objects.all()
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

class SubscriberViewSet(viewsets.ModelViewSet):
	queryset = Subscriber.objects.all()
	serializer_class = SubscriberSerializer
	pass
