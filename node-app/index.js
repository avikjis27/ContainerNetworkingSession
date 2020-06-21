let express = require('express')
const http = require('http');
let app = express();
var port = process.env.PORT || 5000;
var service_type = process.env.TYPE

var os = require("os");
var hostname = os.hostname();

var ifaces = os.networkInterfaces();
var networkdetails = [];

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      networkdetails.push(ifname + ':' + alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
      networkdetails.push(ifname, iface.address);
    }
    ++alias;
  });
});


app.get('/', (req, res) => res.send("Hostname:\n" + hostname + " \nInterface:\n" + networkdetails));


app.listen(port, function () {
	console.log("Node server is up");
});

process.on('SIGINT', function () {
	process.exit();
});