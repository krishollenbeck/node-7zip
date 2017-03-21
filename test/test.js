'use strict'

const node7zip = require('node-7zip');
const fs = require('fs-extra');

fs.emptyDirSync(__dirname + '/output/tmp/', err => {
  if (err) {
    return console.error(err);
  }
  console.log('tmp folder emptied.');
});
node7zip.unzip('./test/test.zip', './test/output/tmp').then(function () {
  node7zip.zip('./src', './test/output/tmp/myzip.zip').then(function() {
    fs.emptyDirSync(__dirname + '/output/tmp/', err => {
      if (err) {
        return console.error(err);
      }
      console.log('tmp folder emptied.');
    });
  });
});
