const node7zip = require('node-7zip');

// input (folder to archive), output (archive location and name)
node7zip.zip('./src', './test/output/tmp/myzip.zip');