// Test
const node7zip = require('node-7zip');
const fs = require('fs-extra')

// Test unzip
node7zip.unzip('./test/test.zip', './test/output/tmp');

// Test zip
node7zip.zip('./src', './test/output/tmp/myzip.zip');

// Empty dir
fs.emptyDir(__dirname + './test/output/tmp/', err => {
  if (err) return console.error(err);
  console.log('Output folder emptied.')
});