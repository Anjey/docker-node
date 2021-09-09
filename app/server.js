'use strict';

var os = require('os');
const express = require('express');
const ip = require('ip');
const ipAddress = ip.address();
//const port = 8080;
const host = '0.0.0.0';
var hostname = os.hostname();




const app = express();
app.get('/', (req, res) => {
  res.send(`Hello World from ip: ${ipAddress}:${listenPort} on hostname: ${hostname}`);
});
app.get("/health", (req, res) => {
  res.send("OK");
});


const listenPort = process.env.PORT || 8080;
app.listen(listenPort, () => {
  console.log(`running on http://${ipAddress}:${listenPort}`);
});