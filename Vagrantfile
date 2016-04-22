Vagrant.configure(2) do |config|
  config.vm.box = "deb/jessie-amd64"
  config.vm.network "private_network", ip: "192.168.56.70"
  config.vm.synced_folder ".", "/vagrant", type: "nfs"
  config.vm.provider "virtualbox" do |vb|
     vb.memory = "256"
  end

  config.vm.provision "ansible" do |ansible|
    ansible.limit = 'development'
    ansible.playbook = "ansible/development.yml"
    ansible.inventory_path = "ansible/hosts"
  end
end
