---
title: Make your own internet in packet tracer
summary: Have you always wanted to know how to simulate your own internet?
date: 2017-05-14 00:00:00 +0000
featured: true
image: "/uploads/2017/05/14/thumbnail-3.PNG"
category: How-to
tags:
  - dns
  - hierarchy
  - ns
  - soa
  - packet
  - tracer
  - cisco
  - internet
  - nameserver
  - name server
  - cisco-packet-tracer
  - how
  - to
  - make
  - your
  - own
  - internet
  - in
  - cisco
  - packet
  - tracer
  - make
  - your
  - own
  - internet
  - in
  - "3"
  - seconds
  - step
  - by
  - step
  - real
  - steps
  - wan
  - access
  - icon
  - of things
  - lab
  - symbol
  - pc
  - 7.1
  - cisco
  - packet tracer
---

Cisco packet tracer is a great tool for simulating small-scale networks to see how they may work in practice. You can create; email servers, web servers, DNS servers, routers and more with this simple tool for students to learn about networking. You may be wondering, well some people have and that is how to make the internet.

When I was searching how to do this I have seen bits and pieces of how to do it and people on forums asking how to do it. So with the information, I could find attempted to make the internet.

![](/uploads/2017/05/14/my%20internet.PNG)

## How to create a network

First, you must place down a 2811 router, add an NM-8A/S module,

If there are existing router then connect a serial to one and for both routers; setup and IP for the mini serial cable network and then add that network to the two routers RIP settings,

To the new router connect a 2950-24 switch and then select the switch and make a new cluster. Make sure to name the cluster so you know what that network is for.

### Cluster name ideas

If it is for all of the root servers call it "root servers", and if it is to contain a website call it the website's URL.

## How to create the ROOT name server

I have made the internet using a DNS hierarchy system as in if you were looking for 'face.example.com' for example it would first look for the com nameservers then the 'example.com' name servers then 'face.example.com'.

Off the switch of an existing network add a server, set its IP and set all of its options off except for DNS. You will be using the DNS tab to add TLDs to your internet.

## How to make a TLD

In this case, we will be adding the .com TLD you can just add any TLD just swap out com for whatever TLD you want to add.

Add a server to an existing network and same as the root name server; set all of its options off except for DNS. Now in the DNS add an SOA record with these properties;

![SOA](/uploads/2017/05/14/soa-com.ns.PNG)

Then in the Root name server add two records; add an A record called "com.ns" pointing to the IP address of the new TLD server and then add an NS record call com pointing to com.ns.

![NS](/uploads/2017/05/14/com.ns%20ns.PNG)

## How to register and set up a domain

For this example, we will be setting up example.com.

### Hosting the Website

In a new network create two servers with IP addresses and call one ns.exmple.com and the other www.example.com.

In ns.exmple.com make records;

SOA

![SOA-NS](/uploads/2017/05/14/soa%20ns.example.com.png)

A - point this record to the example.com server IP address.

![A-NS](/uploads/2017/05/14/a%20ns.example.com.png)

### Registering the domain

In the com name server add an A record and point it to ns.example.com, and then create an NS record called example.com and point it to ns.example.com.

![domain registring](/uploads/2017/05/14/a%20ns.example.com-1.png)

![root](/uploads/2017/05/14/root%20example.com%20ns.PNG)

## How to make an ISP

An ISP is an internet service provider that lets people connect to the internet. In the real life; everyone including companies and their websites, are connected to the internet through an ISP.

Put a router in a cluster and call the cluster the name of the isp you want to create. Then in the cluster create a cloud connected to the router with copper straight through cable. In the router add an IP address to the router and then add the IP address to the router’s RIP settings. Then highlight the cloud and make a cluster called “ISP”. Edit the cloud and give it 8 PT-CLOUD-NM-1AM module, then make 8 DSL modems connected to the 8 PT-CLOUD-NM-1AMs.

![isp network](/uploads/2017/05/14/isp%20network.PNG)

![moderms](/uploads/2017/05/14/isp%20dsl%20modems.PNG)

## How to make a Household

Create a WRT300N and put it in a cluster if you want then connect a computer using DHCP and then connect the router to one of the modems in an isp. On the WRT3000N add a static IP to the internet section. In the future, I will add a section on how to add DHCP to the isp so the WRT3000N can be set to DHCP on the internet tab.

![household](/uploads/2017/05/14/household%201.PNG)

![household](/uploads/2017/05/14/household%202.PNG)

## Conclusion

In conclusion, you can recreate the internet in cisco packet tracer. By using the SOA records in the nameservers like this enables the nameservers higher up in the hierarchy to save the information which is how the real internet works.

## References

## Download Links

Packet Tracer Save ([internet.pkt](/downloads/internet.pkt))
{% include download.html name='Packet Tracer save' url='internet.pkt' %}
