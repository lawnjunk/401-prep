const EE = require('events').EventEmitter;
const fs = require('fs');

const ee = new EE();
ee.on('readone', (options) => {
  if (options.data) console.log(options.data.toString());
  if (!options.files.length) return console.log('finished');

  fs.readFile(options.files.pop(), (err, data) => {
    if (err) return console.error(err);
    options.data = data;
    ee.emit('readone', options);
  });
});

ee.emit('readone', {files: ['./txt/one.txt', './txt/two.txt', './txt/three.txt']});

