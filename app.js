'use strict'

const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Lamune');
});

app.listen(3000, (err) => {
  console.log('Server listening...');
});
