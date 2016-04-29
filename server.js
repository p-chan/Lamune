'use strict'

const app = require('./app');

const server = () => {
  return new Promise((resolve, reject) => {
    app.listen(3000, (err) => {
      console.log('Server listening...');
      resolve();
    });
  });
}

module.exports = server;
