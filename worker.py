from kamailio.models import Acc,Subscriber
import time
import threading

class Worker():
    def __init__(self):
        self.mainLock = threading.Lock()
        self.logStart = Acc.objects.filter(consumer__isnull=True,method="INVITE")
        print("len")
        print(len(self.logStart))
        self.logEnd = Acc.objects.filter(consumer__isnull=True,method="INVITE")
        self.initAll()
        return

    def fetchLog(self):
        mainLock.acquire()
        newLog = self.logStart[0]
        self.logStart=[1:]
        mainLock.release()
        return newLog

    def fetchEndLog(self,id):
        logEnd = self.logEnd.filter(callid=newLog.callid)
        self.logEnd = self.logEnd.exclude(callid=logs[index].callid)
        return logEnd

    def recordData(self):
        newLog = self.fetchLog()
        try:
            logEnd = self.fetchEndLog()
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
                consumer.balance=-rate*diff
            consumer.save()
        except:
            print("errorcito fetching")
            print("newLog")
                
    return

    def initAll(self):
        while len(self.startLog)>0:
            for y in range(100):
                threads = []
                t = threading.Thread(target=self.recordData)
                t.start()
                threads.append(t)
                
            for thread in threads:
                t.join()
                pass
 
            time.sleep(5)

worker = Worker()