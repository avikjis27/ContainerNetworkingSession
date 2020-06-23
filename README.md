# ContainerNetworkingSession
A sharing session on Container networking


- Container networking introduction
- Container networking OS primitives
- Container network drivers
- Container network interfaces
- Working of different mode networking



docker run -p 1235:1234 nc-docker nc -l 1234

nc localhost 1235

Container timelines
https://searchitoperations.techtarget.com/feature/Dive-into-the-decades-long-history-of-container-technology
CNI vs CNM
https://thenewstack.io/container-networking-landscape-cni-coreos-cnm-docker/
https://www.nuagenetworks.net/blog/container-networking-standards/
Why Kubernetes stop bergaining with docker
https://kubernetes.io/blog/2016/01/why-kubernetes-doesnt-use-libnetwork/

avikjis27/node-server

docker service create --name my_web --replicas 7 --publish published=8080,target=80 nginx

docker service create --name node-server --replicas 7 --publish published=8080,target=5000 avikjis27/node-server


Container networking Standards
	Container networking drivers (Bridge, overlay, host, etc.)
	Service Discovery, LoadBalancing, etc. in docker



sudo ls /var/run/docker/netns

1414d4b8a0fe  1-euvvxicl7w  9827d13ee60a  ingress_sbox

sudo docker network ls

NETWORK ID          NAME                DRIVER              SCOPE
65f52ae8d30d        bridge              bridge              local
4cc0f0ff6320        docker_gwbridge     bridge              local
199e4783376e        host                host                local
euvvxicl7wdh        ingress             overlay             swarm
4b8599c902ec        none                null                local



https://media.giphy.com/media/UuTIijN6ih5kzV9nNI/giphy.gif