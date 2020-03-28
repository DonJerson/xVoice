from kamailio.models import Acc,Subscriber
import time
import threading
from django.db import connection

class Worker():
    def __init__(self):
        self.mainLock = threading.Lock()
        self.logStart = Acc.objects.filter(consumer__isnull=True,method="INVITE")
        print("len")
        print(len(self.logStart))
        self.logEnd = Acc.objects.filter(consumer__isnull=True,method="BYE")
        self.initAll()
        return

    def fetchLog(self):
        self.mainLock.acquire()
        newLog = self.logStart[0]
        self.logStart= self.logStart[1:]
        self.mainLock.release()
        return newLog

    def fetchEndLog(self,id):
        logEnd = self.logEnd.get(callid=id)
        self.logEnd = self.logEnd.exclude(callid=logEnd.callid)
        return logEnd

    def recordData(self):
        try:
            newLog = self.fetchLog()
        except Exception as e:
            print("no hay aparentemente")
            print(e)
            return
        try:
            logEnd = self.fetchEndLog(newLog.id)
            time.sleep(1)
            consumer = Subscriber.objects.get(username=newLog.src_user).customer
            print("found")
            startDate=newLog.time
            endDate=logEnd.time
            newLog.consumer=consumer
            newLog.save()
            logEnd.consumer=consumer
            logEnd.save()
            diff = (endDate-startDate).seconds/60
            destination = logs[index].dst_user
            if destination[0]=="1":
                rate=0.010
            try:
                consumer.balance=float(consumer.balance)-rate*diff
            except Exception as e:
                print("errorcito sumando")
                consumer.balance=-rate*diff
                print(e)
            consumer.save()
        except Exception as e:
            print("errorcito fetching")
            print(e)
            print(newLog.id)
        connection.close()
        return

    def initAll(self):
        while(True):
            for y in range(20):
                threads = []
                t = threading.Thread(target=self.recordData)
                t.start()
                threads.append(t)
                
            for thread in threads:
                t.join()
                pass
 
        return

worker = Worker()