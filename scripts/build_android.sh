#!/bin/bash

rm -rf /vagrant/cordova/www/*
cp -r /vagrant/public/* /vagrant/cordova/www/.
source /home/vagrant/.nvm/nvm.sh
cd /vagrant/cordova
cordova build android
