# ContainerNetworkingSession
Presentation - https://avikjis27.github.io/ContainerNetworkingSession/

## Some important links

- [Container timelines](https://searchitoperations.techtarget.com/feature/Dive-into-the-decades-long-history-of-container-technology)
- [CNI vs CNM](https://thenewstack.io/container-networking-landscape-cni-coreos-cnm-docker/)
- [Networking Standards](https://www.nuagenetworks.net/blog/container-networking-standards/)
- [Why Kubernetes stop bergaining with docker](https://kubernetes.io/blog/2016/01/why-kubernetes-doesnt-use-libnetwork/)
- [Networking overview](https://www.nuagenetworks.net/blog/docker-networking-overview/)


## Demo ready ref

### None netwok
```
docker run --rm  --net=none avikjis27/node-server
wget localhost:5000
ifconfig
```
### Host network
```
docker run --rm  --net=host avikjis27/node-server
```

### Bridge network
```
docker run --rm --env PORT=6000 -p 8082:6001  avikjis27/node-server
docker run --rm --env PORT=6000 -p 8081:6000  avikjis27/node-server
```

### Netwok sharing
```
docker run --rm  --env PORT=6000 -p 8081:6000  --name server avikjis27/node-server
docker run --rm --env PORT=6001  --net=container:server  avikjis27/node-server
```

### Screen commands for mac only
```
screen ~/Library/Containers/com.docker.docker/Data/com.docker.driver.amd64-linux/tty
ctrl A+D
screen -list
screen -X -S <SESSION_NAME> quit
```