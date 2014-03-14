Express.js
================
##Introduction
Express is a minimal and flexible node.js web application framework, providing a 
robust set of features for building single and multi-page, and hybrid web applications.
Express will help create MOM as an application that lives entirely in the browser


## Connecting to the app locally

If you are running the app locally through your express server,
the best way to connect is by doing the following:

- Turn on Wifi Hotspot of your android phone and connect your Laptop with your phone.
- Start your server at localhost (the current server connects through port 8080)
- Now open terminal and enter `ifconfig` command to find your IP
```
wlan0     Link encap:Ethernet  HWaddr 00:1e:65:06:15:68  
   inet addr:192.168.43.203  Bcast:192.168.43.255  Mask:255.255.255.0
   inet6 addr: fe80::21e:65ff:fe06:1568/64 Scope:Link
   UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
   RX packets:1310406 errors:0 dropped:0 overruns:0 frame:0
   TX packets:708207 errors:0 dropped:0 overruns:0 carrier:0
   collisions:0 txqueuelen:1000 
   RX bytes:1565286755 (1.5 GB)  TX bytes:107127038 (107.1 MB)
```
**inet addr:192.168.43.203**

- Now just connect on your mobile browser to 192.168.43.203:8080/index.html


