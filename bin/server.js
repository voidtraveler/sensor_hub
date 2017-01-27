var dgram = require("dgram");
var server = dgram.createSocket("udp4");

var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('../db/sensordb');

var crlf = new Buffer(2);
crlf[0] = 0xD; //CR
crlf[1] = 0xA; //LF

server.on("message", function (msg, rinfo) {
  var data = decoder.write(msg);
  var sensor_address = rinfo.address;
  var write_entry = "INSERT INTO sensors (ipaddress, data) VALUES ('"+sensor_address+"', '"+data+"');";

  console.log("server got: " + data + " from " + sensor_address);
  console.log(write_entry);
  db.run(write_entry);
});

server.on("listening", function () {
  var address = server.address();
  console.log("server listening on " + address.address + ":" + address.port);
});

server.bind(6000);