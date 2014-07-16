'''
Luminato fabric file

This file provides deployment through garment as well as a number of tasks
for loading data and content from production and staging.

These tasks are meant to be run from the vagrant box after SSHing in.
'''

from garment import *  # noqa

from fabric.api import task, local, hosts


@task
@hosts()
def dev():
    '''
    Run the dev server
    '''
    local('node app.js')


@task
@hosts()
def scss():
    '''
    Compile the SCSS into CSS
    '''
    local('grunt sass')


@task
@hosts()
def scss_watch():
    '''
    Start the watch process to compile SCSS into CSS on changes
    '''
    local('grunt watch')
