from kamailio.models import Acc,Subscriber
import time

while True:

    logs = Acc.objects.filter(consumer__isnull=True)
    #logs = Acc.objects.all()
    index = 0
    while index < len(logs):
        newLogs = logs.filter(callid=logs[index].callid)
        print(newLogs)
        if len(newLogs)==2:
            print("found")
            try:
                consumer = Subscriber.objects.get(username=logs[index].src_user).customer
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
            except Exception as e:
                print("errorcito fetching")
                print(logs[index].src_user.customer)
                print(e)
                

        else:
            print("not found")
            index+=1
    time.sleep(5)