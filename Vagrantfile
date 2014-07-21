# -*- mode: ruby -*-
# vim: set ft=ruby ts=2 sw=2 et sts=2 :

VAGRANTFILE_API_VERSION = "2"
CURRENT_USER = `whoami`.chomp

# our script to install the stackstrap states on the vagrant box
$stackstrap_salt_script = <<SCRIPT
# install git
salt-call pkg.install git

# setup our /srv directory
# TODO: make the GIT URL & ref configurable
cd /tmp
git clone https://github.com/freesurface/stackstrap-salt.git stackstrap-salt
cd stackstrap-salt
git archive master --prefix=/srv/ | (cd /; tar xf -)
SCRIPT

# our script to alert the user of how to access the development server
$dev_server_info = <<SCRIPT
bridged_ip=$(ifconfig  | grep 'inet addr:'| grep -v '127.0.0.1' | cut -d: -f2 | awk '{ print $1}' | sed -n 2p)
echo; echo;
echo "Your development environment is now configured."
echo "Run 'fab dev' to start the development server"
echo "You can then access it at http://app.$bridged_ip.xip.io"
echo;
SCRIPT

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.hostname = "mom-#{CURRENT_USER}"

  config.vm.box = "ubuntu1404-stackstrap"
  config.vm.box_url = "http://boxes.stackstrap.org/virtualbox/ubuntu1404-stackstrap.box"

  config.vm.network :public_network

  config.ssh.forward_agent = true

  config.vm.synced_folder ".", "/home/vagrant/domains/mom",
    owner: "vagrant",
    group: "vagrant",
    mount_options: ["dmode=755,fmode=644"]

  # provision our box with salt but do not run the highstate yet
  # we still need to setup our stackstrap repository after salt is installed
  config.vm.provision :salt do |salt|
    salt.minion_config = "salt/minion"
    salt.run_highstate = false
  end

  # get our stackstrap salt repository setup
  config.vm.provision :shell, inline: $stackstrap_salt_script

  # now run the highstate
  config.vm.provision :shell, inline: "salt-call state.highstate"

  # alert the user of dev server info
  config.vm.provision :shell, inline: $dev_server_info
end
