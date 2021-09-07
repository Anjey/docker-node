'use strict';

const express = require('express');

//const port = 8080;
const host = '0.0.0.0';


const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get("/health", (req, res) => {
  res.send("OK");
});

const listenPort = process.env.PORT || 8080;
app.listen(listenPort, () => {
  console.log(`running on http://${host}:${listenPort}`);
});

