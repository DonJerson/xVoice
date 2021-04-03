#!/bin/bash -e
screen -d -m -RR django -t django bash -c 'cd /usr/local/lib/xvoice && source xvoicevenv/bin/activate && cd /usr/local/lib/xvoice && git stash && git pull origin master && python manage.py runsslserver 0.0.0.0:8181'
#screen -d -m -RR node -t node bash -c 'cd /usr/local/lib/xvoice && node server.js'
#screen -d -m -RR worker -t worker bash -c 'cd /usr/local/lib && source xvoicevenv/bin/activate && cd /usr/local/lib/xvoice && python manage.py shell'