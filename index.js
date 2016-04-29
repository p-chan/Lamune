'use strict';

const checkSQLite = require('./check-sqlite');
const checkDeps = require('./check-deps');
const initSQLite = require('./init-sqlite');
const server = require('./server');

Promise.resolve()
  .then(() => {
    return checkSQLite('./storage/app.db');
  })
  .then((err) => {
    return initSQLite();
  })
  .then(() => {
    return checkDeps();
  })
  .then(() => {
    return server();
  });
