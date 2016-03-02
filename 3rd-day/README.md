**/Users/nacnud/gitz/codefellows/401-prep/3rd-day//buffer/buffer-demo.js**
``` javascript
'use strict';

var helloBuf = new Buffer('hello world');

console.log('----- buffer object -----');
console.log('helloBuf                      : ', helloBuf);
console.log('helloBuf.length               : ', helloBuf.length);

console.log('\n----- buffer strings -----');
console.log('helloBuf.toString()           : ', helloBuf.toString());
console.log('helloBuf.toString("utf8")     : ', helloBuf.toString('utf8'));
console.log('helloBuf.toString("hex")      : ', helloBuf.toString('hex'));
console.log('helloBuf.toString("base64")   : ', helloBuf.toString('base64'));

console.log('\n----- buffer write -----');
console.log('helloBuf.write("slugs", 6)');
helloBuf.write('slugs', 6);
console.log('helloBuf.toString()           : ', helloBuf.toString());

console.log('\n----- buffer read integers -----');
console.log('helloBuf.readUInt8()          : ', helloBuf.readUInt8());
console.log('helloBuf.readUInt8(1)         : ', helloBuf.readUInt8(1));
console.log('helloBuf.readUInt8(1)         : ', helloBuf.readUInt8(1));
console.log('helloBuf.readUInt16LE()       : ', helloBuf.readUInt16LE());
console.log('helloBuf.readUInt16LE(2)      : ', helloBuf.readUInt16LE(2));
try {
  console.log('helloBuf.readUInt16LE(200)      : ', helloBuf.readUInt16LE(200));
} catch (e){
  console.error('ERROR: helloBuf.readUInt16LE(200)', e);
}

console.log('\n----- buffer write integers -----');
console.log('helloBuf.writeInt8(0x33)           ');
helloBuf.writeInt8(0x33);
console.log('helloBuf.toString()           : ', helloBuf);

helloBuf.writeInt8(5,1);
console.log('helloBuf.toString()           : ', helloBuf);

```

**/Users/nacnud/gitz/codefellows/401-prep/3rd-day//call-stack/call-stack-demo.js**
``` javascript
'use strict';

function third(){
  console.log('invoded function third');
  return
}

function second(){
  console.log('invoded function second');
  third();
  return
}

function first(){
  console.log('invoded function first');
  second();
  return
}

console.log('start');
first();
console.log('end');
```

**/Users/nacnud/gitz/codefellows/401-prep/3rd-day//event-loop/fs-event-loop.js**
``` javascript
'use strict';
var fs = require('fs');

process.nextTick(function(){
  fs.readFile('./txt/file-one.txt', function(err, data){
    console.log('hello from first callback');
    console.log('fist callback data: ' + data.toString());
    fs.readFile('./txt/file-three.txt', function(err, data){
      console.log('hello from three callback');
      console.log('third callback data: ' + data.toString());
    });
  });
});

fs.readFile('./txt/file-two.txt', function(err, data){
  console.log('hello from second callback');
  console.log('second callback data: ' + data.toString());
    fs.readFile('./txt/file-four.txt', function(err, data){
      console.log('hello from forth callback');
      console.log('forth callback data: ' + data.toString());
    });
});
```

**/Users/nacnud/gitz/codefellows/401-prep/3rd-day//event-loop/hello-event-loop.js**
``` javascript
'use strict';

process.nextTick(function(){
  console.log('slug: whats up ma dude?');
});

process.nextTick(function(){
  process.nextTick(function(){
    console.log('slug: so good to here that!');
  });
  console.log('madude: jus been haxin the mainframe, hella!');
});

console.log('first log');
```

### /Users/nacnud/gitz/codefellows/401-prep/3rd-day//event-loop/txt
**/Users/nacnud/gitz/codefellows/401-prep/3rd-day//fs-module/fs-demo.js**
``` javascript
var fs = require('fs');

fs.readFile('./does-not-exist', function(err, data){
  if (err) throw err;
  console.log(data.toString());
});

fs.readFile('./helloworld.txt', function(err, data){
  if (err) throw err;
  console.log(data.toString());
});

```

**/Users/nacnud/gitz/codefellows/401-prep/3rd-day//fs-module/helloworld.txt**
``` javascript
hello, world in a file!
```

