from kamailio.models import Acc,Subscriber,ApiUsage
import time
import threading
from django.db import connection

class Worker():
    def __init__(self):
        self.mainLock = threading.Lock()
        self.logStart = Acc.objects.filter(call__isnull=True,method="INVITE")
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
        self.logEnd=self.logEnd.exclude(callid=myId)
        return logEnd
    def newBalance(self,username,cost):
        self.mainLock.acquire()
        try:
            consumer = Subscriber.objects.get(username=username).customer
            print("found")


            consumer.balance=float(consumer.balance)-cost
            consumer.save()
            self.mainLock.release()
            return consumer
        except:
            print("not found subscriber")
            self.mainLock.release()
            return consumer
    def recordDataReverse(self):
        try:
            self.mainLock.acquire()
            newLog = self.logEnd[0]
            self.logEnd= self.logEnd[1:]
            self.mainLock.release()
        except Exception as e:
            print("no hay aparentemente")
            print(e)
            return
        try:
            logStart = self.objects.get(callid=myId,method="INVITE")
            time.sleep(1)
            startDate=logStart.time
            endDate=newLog.time
            diff = (endDate-startDate).seconds/60
            destination = newLog.dst_user
            rate=0.010
            try:
                consumer = self.newBalance(newLog.src_user,rate*diff)
                newLog.consumer=consumer
                newLog.save()
                logStart.consumer=consumer
                logStart.save()
            except Exception as e:
                print("errorcito sumando")
                
                print(e)

        except Exception as e:
            print("errorcito fetching")
            print(e)
            print(newLog.id)
        connection.close()
        return

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
                newCall = ApiUsage.objects.get(callid=logEnd.callid)
                consumer = self.newBalance(newLog.src_user,rate*diff)
                newCall = ApiUsage.objects.create(duration=diff,serviceProvided="USCALL",startTime=startDate,endTime=endDate,callid=logEnd.callid,consumer=consumer)
                
                newLog.consumer=consumer
                newLog.call = newCall
                newLog.save()
                logEnd.consumer=consumer
                logEnd.call = newCall
                logEnd.save()
            except Exception as e:
                print("already created")
                try:
                    consumer = self.newBalance(newLog.src_user,rate*diff)
                    newCall = ApiUsage.objects.create(duration=diff,serviceProvided="USCALL",startTime=startDate,endTime=endDate,callid=logEnd.callid,consumer=consumer)
                    
                    newLog.consumer=consumer
                    newLog.call = newCall
                    newLog.save()
                    logEnd.consumer=consumer
                    logEnd.call = newCall
                    logEnd.save()
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
            if len(self.logStart)>0:
                for y in range(20):
                    threads = []
                    t = threading.Thread(target=self.recordData)
                    t.start()
                    threads.append(t)
                    
                for thread in threads:
                    t.join()
                    pass
            else:
                self.logEnd = Acc.objects.filter(consumer__isnull=True,method="BYE")
                for y in range(20):
                    threads = []
                    t = threading.Thread(target=self.recordDataReverse)
                    t.start()
                    threads.append(t)
                    
                for thread in threads:
                    t.join()
                    pass 
        return

worker = Worker()