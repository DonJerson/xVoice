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
        self.logEnd = Acc.objects.filter(method="BYE")
        print(len(self.logEnd))
        #time.sleep(25)
        self.initAll()

        return

    def fetchLog(self):
        self.mainLock.acquire()
        newLog = self.logStart[0]
        self.logStart= self.logStart[1:]
        self.mainLock.release()
        return newLog

    def fetchEndLog(self,myId):
        # print("my Id")
        # print(myId)
        #logEnd = Acc.objects.get(callid=myId,method="BYE")
        logEnd = self.logEnd.get(callid=myId)
        self.logEnd.exclude(callid=myId)
        return logEnd
    def newBalance(self,username,cost,start,end):
        self.mainLock.acquire()
        consumer = Subscriber.objects.get(username).customer
        print("found")


        consumer.balance=float(consumer.balance)-cost
        consumer.save()

        self.mainLock.release()
        return consumer
    def recordData(self):
        try:
            newLog = self.fetchLog()
        except Exception as e:
            print("no hay aparentemente")
            print(e)
            return
        try:
            logEnd = self.fetchEndLog(newLog.callid)
            time.sleep(1)
            startDate=newLog.time
            endDate=logEnd.time
            diff = (endDate-startDate).seconds/60
            destination = newLog.dst_user
            rate=0.010
            try:
                consumer = self.newBalance(newLog.src_user,rate*diff)
                startDate.consumer=consumer
                startDate.save()
                endDate.consumer=consumer
                endDate.save()
            except Exception as e:
                print("errorcito sumando")
                
                print(e)

        except Exception as e:
            print("errorcito fetching")
            print(e)
            print(newLog.id)
        connection.close()
        return

    def initAll(self):
        while(True):
            #if len(self.logStart):
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