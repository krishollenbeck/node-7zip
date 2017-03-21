# node-7zip

[![Build Status](https://travis-ci.org/krishollenbeck/node-7zip.svg?branch=master)](https://travis-ci.org/krishollenbeck/node-7zip)

##### System Requirements:

- Windows
- NodeJs

##### Description
NodeJs wrapper for 7zip stand alone. Uses NodeJs and 7zip to handle archiving files and directories. 7zip standalone is bundle with node-7zip npm package.

##### Examples

Examples can be found under `examples` dir.

###### Zip
The following will zip a directory and all sub folders.
```
var node7zip = require('node-7zip');

// input (folder to archive), output (archive location and name)
node7zip.zip('./src', './test/output/myzip.zip');
```

From the root of this repo run the following command to test.
`npm run zip`


###### Unzip
The following will unzip an archive.

```
var node7zip = require('node7zip');
node7zip.unzip('./test/test.zip', './test/output/tmp');
```

From the root of this repo run the following command to test.
`npm run unzip`


##### License

MIT License

Copyright (c) 2017 Kris Hollenbeck

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
