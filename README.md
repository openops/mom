[![Build Status](https://travis-ci.org/openops/mom.svg?branch=master)](https://travis-ci.org/openops/mom)

MOM
===

MOM stands for "matter of moments". In short it is a time tracking tool which
understands that you don't want to have to think about how to record your time,
instead you want it to seize the moments of attention that you award it.

#### Built for the web first

With upwards of five core smart phone platforms and thus five separate
development processes, it no longer makes any sense to build for native. The
arrival of PhoneGap and its continuation as Apache's Cordova has made it
completely reasonable to build for the web first and plan to port to native
after. Working this way allows you to seize the most active and creative
developer market available today.

Building native is plauged by a minefield of hoops and barriers for developers
to deal with. The process is burdened with complex platform specific SDKs and
overbearing certificate signing requests. Apple even goes so far to require
that developers give them a hundred bucks just to take part. The only sane
appoach is offered by Android in that it lets you build it's packages on Linux
with no catch. MOM will be using [Vagrant](http://vagrantup.com) and a set of
[Salt States](https://github.com/stackstrap/stackstrap-salt) to make localized
builds a piece of cake.  We welcome the addition of any other platforms that
don't ask developers to bend over backwards. We may support IOS when we finish,
but either way anyone is free to port this project over on their own terms :)

## Philosophy

The goal is to create an application that is completely Decentralized. 
Seperating all our concerns creates an application that
can grow well in the open source community. By using tools that can help us enforce this practice we hope to get a 
better understanding on creating apps that are very clear and readable by someone looking to contribute.

## Tools Being Used

While always keeping our design philosophy in mind, we are going to use tools that help us build a scalable and 
decentralized application.

### BackboneJS

Backbone is being used because of the control it gives us in how we want to create the app. 
It gives us all the tools we need in order to create a scalable application. 
Backbone also gives us access to a large community to help us achieve our goals.

## Activities & Checkups

Activities are going to be the tasks that the user inputs into the app. The application will then *checkup* 
with the user using push notifications. This has to be designed in such a way that is completely modular and decentralized. Since this app is going to be designed in such a way that it can 
grow naturally and clearly, the activities need to be stored in a way that gives the activities the ability to be synched 
across multiple devices and servers. They also need to be designed so the app can resume easily from where it left off
previously.
