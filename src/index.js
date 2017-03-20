'use strict';

let child_process = require('child_process').execFile;

let methods = {
  unzip: function () {},
  zip: function () {}
};

let nodeZip = Object.create(methods);

nodeZip.unzip = function (pathToArchive, target)
{
  console.log('Unzipping from ' + pathToArchive + ' to ' + target);
  child_process(__dirname + '/bin/7za.exe', ['x', pathToArchive, '-o' + target, '-r'], (error, stdout, stderr) =>
  {
    if (error)
    {
      console.error('stderr', stderr);
      throw error;
    }
    console.log('stdout', stdout);
  });
};

nodeZip.zip = function(input, output)
{
  console.log('Zipping from ' + input + ' to ' + output);

  child_process(__dirname + '/bin/7za.exe', ['a', '-t7z', output, input + '/*', '-r'], (error, stdout, stderr) =>
  {
    if (error)
    {
      console.error('stderr', stderr);
      throw error;
    }
    console.log('stdout', stdout);
  });
}

module.exports = nodeZip;