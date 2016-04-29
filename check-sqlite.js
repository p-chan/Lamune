'use strict';

const fs = require('fs');

const checkSQLite = (SQLitePath) => {
  return new Promise((resolve, reject) => {
    fs.access(SQLitePath, fs.R_OK | fs.W_OK, (err) => {
      resolve(err);
    });
  });
}

module.exports = checkSQLite;
