var dgram = require("dgram");
var server = dgram.createSocket("udp4");
var fs = require('fs');
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');

var crlf = new Buffer(2);
crlf[0] = 0xD; //CR
crlf[1] = 0xA; //LF

server.on("message", function (msg, rinfo) {
  console.log("server got: " + decoder.write(msg) + " from " + rinfo.address + ":" + rinfo.port);
  fs.appendFile('mydata.txt', decoder.write(msg) + crlf, encoding='utf8');
});

server.on("listening", function () {
  var address = server.address();
  console.log("server listening " + address.address + ":" + address.port);
});

server.bind(6000);