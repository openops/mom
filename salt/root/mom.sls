#
# MOM state file
#

include:
  - avahi
  - nginx
  - nvmnode
  - virtualenv
  - supervisor
  - android

screen:
  pkg:
    - installed

{% from "utils/users.sls" import skeleton -%}
{% from "nginx/macros.sls" import nginxsite -%}
{% from "nvmnode/macros.sls" import nvmnode -%}
{% from "supervisor/macros.sls" import supervise -%}

{% set short_name = pillar['project']['short_name'] -%}
{% set home = "/home/vagrant" -%}
{% set virtualenv = home + "/virtualenv" -%}
{% set project = "/vagrant" -%}
{% set app_dir = project + "/" + short_name -%}
{% set app_user = "vagrant" -%}
{% set app_group = "vagrant" -%}

{{ skeleton(app_user, 1000, 1000, remove_groups=False) }}

/etc/nginx/conf.d/mom.conf:
  file:
    - managed
    - source: salt://files/nginx.conf
    - user: root
    - group: root
    - mode: 555
    - require:
      - pkg: nginx
    - watch_in:
      - service: nginx

remove-nginx-default-conf:
  file:
    - absent
    - names:
      - /etc/nginx/conf.d/ssl.conf
      - /etc/nginx/conf.d/virtual.conf
    - require:
      - pkg: nginx
    - watch_in:
      - service: nginx

{{ short_name }}_virtualenv:
  cmd:
    - run
    - name: "virtualenv {{ virtualenv }} && rm -f {{ virtualenv }}/lib*/*/no-global-site-packages.txt"
    - unless: "test -d {{ virtualenv }}"
    - user: vagrant
    - require:
      - pkg: virtualenv_pkgs

{{ short_name }}_requirements:
  cmd:
    - run
    - name: "source {{ virtualenv }}/bin/activate; pip install -r {{ project }}/requirements/dev.txt"
    - shell: /bin/bash
    - env:
        PUSH_NOTIFICATION_KEY: ""
    - user: vagrant
    - require:
      - cmd: {{ short_name }}_virtualenv

{{ nvmnode(short_name, app_user, app_group,
           node_globals=["bower", "grunt-cli", "phonegap",
                         "cordova", "plugman"]) }}

install_rvm:
  cmd:
    - run
    - name: "\\curl -sSL https://get.rvm.io | bash -s stable --ruby=1.9"
    - unless: source ~/.rvm/scripts/rvm; rvm info | grep -q '^ruby-1.9'
    - user: vagrant

install_foundation:
  cmd:
    - run
    - name: source ~/.rvm/scripts/rvm; gem install foundation
    - unless: gem list --local | grep -q '^foundation'
    - user: vagrant
    - require:
      - cmd: install_rvm
      - cmd: node_global_bower
      - cmd: node_global_grunt-cli

{{ short_name }}_profile_setup:
  file:
    - append
    - name: /home/vagrant/.profile
    - require:
      - user: vagrant
    - text:
      - export PUSH_NOTIFICATION_KEY=""
      - export HOME="/home/vagrant"
      - export ANDROID_HOME="$HOME/android-sdk-linux/tools"
      - export ANDROID_PLATFORM_TOOLS="$HOME/android-sdk-linux/platform-tools"
      - export PATH="$ANDROID_HOME:$ANDROID_PLATFORM_TOOLS:$PATH"
      - source /home/vagrant/virtualenv/bin/activate
      - cd /vagrant

{{ short_name }}_screenrc:
  file:
    - managed
    - name: /home/vagrant/.screenrc
    - require:
      - user: vagrant
    - owner: vagrant
    - mode: 644
    - source: salt://files/screenrc

# vim: set ft=yaml ts=2 sw=2 sts=2 et ai :
