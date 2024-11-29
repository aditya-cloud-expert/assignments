## Why K3? 

We chose to install K3s on Raspberry Pi devices instead of other solutions due to K3s's lightweight and optimized design for ARM-based architecture, which makes it ideal for low-resource environments like Raspberry Pi. K3s provides a fully-featured Kubernetes experience with a smaller memory footprint and faster startup times compared to others, while still supporting a wide range of Kubernetes tools and APIs. Additionally, K3s’s simplified deployment process and lower overhead allow us to efficiently manage containerized applications across multiple Raspberry Pi nodes, making it a better fit for our resource-constrained setup.


## Pre-requisites:

First, let's modify the cmdline.txt file on your master node:
```
sudo nano /boot/cmdline.txt
```
Add these parameters to the end of the existing line (make sure it's all on one line, with just a space separating them from existing text):
```
Copycgroup_memory=1 cgroup_enable=memory
```
After modifying, reboot the master node:
```
sudo reboot
```

Once this is working on the master node, we can proceed with the worker nodes. The memory cgroup settings will need to be applied to all worker nodes as well before we install k3s on them.


# Master Node

### Let's start with installing k3s:

```
# On master node
curl -sfL https://get.k3s.io | sh -

# After installation, get the node token (you'll need this for workers)
sudo cat /var/lib/rancher/k3s/server/node-token
```

# Worker Node

On each worker run:

```
# Replace K3S_TOKEN with the token from master node
# Replace MASTER_IP with your master node's IP address
curl -sfL https://get.k3s.io | K3S_URL="https://MASTER_IP:6443" K3S_TOKEN="your_node_token" sh -
```