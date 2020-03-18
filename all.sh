#!/bin/bash -e
rtpproxy -l 172.31.29.81 -s udp:127.0.0.1:7722 -u rtpproxy:rtpproxy
screen -d -m -RR django -t django bash -c 'cd /home/ubuntu && source personalvenv/bin/activate && cd /home/ubuntu/xvoice && git stash && git pull origin master && gunicorn -b 0.0.0.0:8181 finalminutes.asgi --certfile /etc/letsencrypt/live/xvoice.xyz/fullchain.pem --keyfile /etc/letsencrypt/live/xvoice.xyz/privkey.pem'
screen -d -m -RR node -t node bash -c 'cd /home/ubuntu/xvoice && node server.js'
screen -d -m -RR worker -t worker bash -c 'cd /home/ubuntu && source personalvenv/bin/activate && cd /home/ubuntu/xvoice && python manage.py shell'