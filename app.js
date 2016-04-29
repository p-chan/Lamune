'use strict'

const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Lamune');
});

module.exports = app;
