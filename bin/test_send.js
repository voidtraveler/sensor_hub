var dgram = require('dgram');
var message = Buffer.from("89.5");
var client = dgram.createSocket("udp4");
console.log(message);
console.log(message.length);
client.send(message, 0, message.length, 6000, "localhost", function(err) {
  client.close();
});