'use strict';

const initSQLite = () => {
  return new Promise((resolve, reject) => {
    console.log('initSQLite');
    resolve();
  });
}

module.exports = initSQLite;
