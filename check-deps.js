'use strict';

const checkDeps = () => {
  return new Promise((resolve, reject) => {
    console.log('checkDeps');
    resolve();
  });
}

module.exports = checkDeps;
