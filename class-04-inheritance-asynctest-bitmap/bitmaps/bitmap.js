'use strict';

const fs = require('fs');
var bitmapPath = process.argv[2];

function parseBitmap(buf){
  console.log(`type: ${buf.toString('utf8', 0, 2)}`);
  console.log(`size: ${buf.readUInt16LE(2)}`);
  console.log(`start of pixel data: ${buf.readUInt32LE(10)}`);
  console.log(`width: ${buf.readUInt32LE(18)}`);
  console.log(`height: ${buf.readUInt32LE(22)}`);
  console.log(`number of colors: ${buf.readUInt32LE(46)}`);

}

fs.readFile(bitmapPath, (err, data) => {
  if (err) return console.error(err);
  parseBitmap(data);
});


