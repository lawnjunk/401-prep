##/async-testing  
**/async-testing/package.json**  
``` json  
{
  "name": "async-testing",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {
    "chai": "^3.5.0"
  },
  "devDependencies": {
    "chai": "^3.5.0",
    "mocha": "^2.4.5"
  },
  "scripts": {
    "test": "mocha"
  },
  "author": "",
  "license": "ISC"
}
```  
##/async-testing/test  
**/async-testing/test/async-testing-demo.js**  
``` js  
'use strict';

const fs = require('fs');
const expect = require('chai').expect;

describe('testing fs module async testing', () => {
  console.log('this: ', this);
  it('should return an error', (done) => {
    fs.readFile('./does-not-exist', (err, data) => {
      expect(!!err).to.eql(true);
      done();
    });
  });
  it('should return a buffer with the contents "hello, world\n"', (done) => {
    fs.readFile(__dirname + '/hello-world.txt', (err, data) => {
      expect(data.toString()).to.eql('hello, world\n');
      done();
    });
  });
});
```  
**/async-testing/test/hello-world.txt**  
``` txt  
hello, world
```  
##/bitmaps  
**/bitmaps/bitmap.js**  
``` js  
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


```  
##/bitmaps/img  
![](/bitmaps/img/non-palette-bitmap.bmp)  
![](/bitmaps/img/palette-bitmap.bmp)  
##/call-bind  
**/call-bind/bind-set-function-context.js**  
``` js  
'use strict';

var slug = {name: 'neo'} ;
function sayHello (){
  console.log(`hello, ${this.name}!`);
}

sayHelloSlug = sayHello.bind(slug);
sayHelloSlug();
```  
**/call-bind/bind-steal-array-methods.js**  
``` js  
const Stack = function(input){
  var data = input || [];
  this.push = Array.prototype.push.bind(data);
  this.pop = Array.prototype.pop.bind(data);
  this.peek = function(){
    return data[data.length -1];
  };
};

var shortStack = new Stack();

shortStack.push('chocolate chip');
shortStack.push('blue berry');
shortStack.push('bananna');

console.log('peeking shortStack: ' + shortStack.peek());
console.log('poping shortStack: ' + shortStack.pop());
console.log('poping shortStack: ' + shortStack.pop());
console.log('poping shortStack: ' + shortStack.pop());


```  
**/call-bind/call-inheritance.js**  
``` js  
'use strict';

function Person(name, age){
  this.name = name;
  this.age = age;
}

function SuperPower(name, age, power){
  Person.call(this, name, age);
  this.power = power;
}

function Hero(hero, name, age, power){
  SuperPower.call(this, name, age, power);
  this.hero = hero;
}

console.log( new Hero('yes', 'super lulwat', 33, 'hacking'));
```  
**/call-bind/call-specify-function-context.js**  
``` js  
'use strict';

var Slug = function(){
  this.name = 'slug neo';
  // using call to pass *this* to a callback
  this.howAwesome = function(cb){
    cb.call(this);
  };
};

var neo = new Slug();

// using call to pass *this* to a callback
neo.howAwesome(function(){
  console.log(this.name);
});

// using call to specify what conext for *this* it should use
function sayHello(){
  console.log('hello, ' + this.name);
}
sayHello.call(neo);

(function(){
  console.log('this in an iffi: ' + this.name);
}).call(neo);



```  
##/event-emitters  
**/event-emitters/ee-demo.js**  
``` js  
'use strict';

const EE = require('events').EventEmitter;
const ee = new EE();

ee.on('one:done', ()=>{
    process.nextTick(()=>{
      console.log('one is done');
      ee.emit('two:done');
    }); 
});

ee.on('two:done', ()=>{
    process.nextTick(()=>{
      console.log('two is done');
      ee.emit('three:done');
    }); 
});

ee.on('three:done', ()=>{
    process.nextTick(()=>{
      console.log('three is done');
    }); 
});

ee.emit('one:done');
```  
**/event-emitters/ee-recursion-demo.js**  
``` js  
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

```  
##/event-emitters/txt  
**/event-emitters/txt/one.txt**  
``` txt  
one
```  
**/event-emitters/txt/three.txt**  
``` txt  
three
```  
**/event-emitters/txt/two.txt**  
``` txt  
two
```  
##/async-testing  
**/async-testing/package.json**  
``` json  
{
  "name": "async-testing",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {
    "chai": "^3.5.0"
  },
  "devDependencies": {
    "chai": "^3.5.0",
    "mocha": "^2.4.5"
  },
  "scripts": {
    "test": "mocha"
  },
  "author": "",
  "license": "ISC"
}
```  
##/async-testing/test  
**/async-testing/test/async-testing-demo.js**  
``` js  
'use strict';

const fs = require('fs');
const expect = require('chai').expect;

describe('testing fs module async testing', () => {
  console.log('this: ', this);
  it('should return an error', (done) => {
    fs.readFile('./does-not-exist', (err, data) => {
      expect(!!err).to.eql(true);
      done();
    });
  });
  it('should return a buffer with the contents "hello, world\n"', (done) => {
    fs.readFile(__dirname + '/hello-world.txt', (err, data) => {
      expect(data.toString()).to.eql('hello, world\n');
      done();
    });
  });
});
```  
**/async-testing/test/hello-world.txt**  
``` txt  
hello, world
```  
##/bitmaps  
**/bitmaps/bitmap.js**  
``` js  
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


```  
##/bitmaps/img  
![](/bitmaps/img/non-palette-bitmap.bmp)  
![](/bitmaps/img/palette-bitmap.bmp)  
##/call-bind  
**/call-bind/bind-set-function-context.js**  
``` js  
'use strict';

var slug = {name: 'neo'} ;
function sayHello (){
  console.log(`hello, ${this.name}!`);
}

sayHelloSlug = sayHello.bind(slug);
sayHelloSlug();
```  
**/call-bind/bind-steal-array-methods.js**  
``` js  
const Stack = function(input){
  var data = input || [];
  this.push = Array.prototype.push.bind(data);
  this.pop = Array.prototype.pop.bind(data);
  this.peek = function(){
    return data[data.length -1];
  };
};

var shortStack = new Stack();

shortStack.push('chocolate chip');
shortStack.push('blue berry');
shortStack.push('bananna');

console.log('peeking shortStack: ' + shortStack.peek());
console.log('poping shortStack: ' + shortStack.pop());
console.log('poping shortStack: ' + shortStack.pop());
console.log('poping shortStack: ' + shortStack.pop());


```  
**/call-bind/call-inheritance.js**  
``` js  
'use strict';

function Person(name, age){
  this.name = name;
  this.age = age;
}

function SuperPower(name, age, power){
  Person.call(this, name, age);
  this.power = power;
}

function Hero(hero, name, age, power){
  SuperPower.call(this, name, age, power);
  this.hero = hero;
}

console.log( new Hero('yes', 'super lulwat', 33, 'hacking'));
```  
**/call-bind/call-specify-function-context.js**  
``` js  
'use strict';

var Slug = function(){
  this.name = 'slug neo';
  // using call to pass *this* to a callback
  this.howAwesome = function(cb){
    cb.call(this);
  };
};

var neo = new Slug();

// using call to pass *this* to a callback
neo.howAwesome(function(){
  console.log(this.name);
});

// using call to specify what conext for *this* it should use
function sayHello(){
  console.log('hello, ' + this.name);
}
sayHello.call(neo);

(function(){
  console.log('this in an iffi: ' + this.name);
}).call(neo);



```  
##/event-emitters  
**/event-emitters/ee-demo.js**  
``` js  
'use strict';

const EE = require('events').EventEmitter;
const ee = new EE();

ee.on('one:done', ()=>{
    process.nextTick(()=>{
      console.log('one is done');
      ee.emit('two:done');
    }); 
});

ee.on('two:done', ()=>{
    process.nextTick(()=>{
      console.log('two is done');
      ee.emit('three:done');
    }); 
});

ee.on('three:done', ()=>{
    process.nextTick(()=>{
      console.log('three is done');
    }); 
});

ee.emit('one:done');
```  
**/event-emitters/ee-recursion-demo.js**  
``` js  
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

```  
##/event-emitters/txt  
**/event-emitters/txt/one.txt**  
``` txt  
one
```  
**/event-emitters/txt/three.txt**  
``` txt  
three
```  
**/event-emitters/txt/two.txt**  
``` txt  
two
```  
  
##/async-testing  
**/async-testing/package.json**  
``` json  
{
  "name": "async-testing",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {
    "chai": "^3.5.0"
  },
  "devDependencies": {
    "chai": "^3.5.0",
    "mocha": "^2.4.5"
  },
  "scripts": {
    "test": "mocha"
  },
  "author": "",
  "license": "ISC"
}
```  
##/async-testing/test  
**/async-testing/test/async-testing-demo.js**  
``` js  
'use strict';

const fs = require('fs');
const expect = require('chai').expect;

describe('testing fs module async testing', () => {
  console.log('this: ', this);
  it('should return an error', (done) => {
    fs.readFile('./does-not-exist', (err, data) => {
      expect(!!err).to.eql(true);
      done();
    });
  });
  it('should return a buffer with the contents "hello, world\n"', (done) => {
    fs.readFile(__dirname + '/hello-world.txt', (err, data) => {
      expect(data.toString()).to.eql('hello, world\n');
      done();
    });
  });
});
```  
**/async-testing/test/hello-world.txt**  
``` txt  
hello, world
```  
##/bitmaps  
**/bitmaps/bitmap.js**  
``` js  
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


```  
##/bitmaps/img  
![](/bitmaps/img/non-palette-bitmap.bmp)  
![](/bitmaps/img/palette-bitmap.bmp)  
##/call-bind  
**/call-bind/bind-set-function-context.js**  
``` js  
'use strict';

var slug = {name: 'neo'} ;
function sayHello (){
  console.log(`hello, ${this.name}!`);
}

sayHelloSlug = sayHello.bind(slug);
sayHelloSlug();
```  
**/call-bind/bind-steal-array-methods.js**  
``` js  
const Stack = function(input){
  var data = input || [];
  this.push = Array.prototype.push.bind(data);
  this.pop = Array.prototype.pop.bind(data);
  this.peek = function(){
    return data[data.length -1];
  };
};

var shortStack = new Stack();

shortStack.push('chocolate chip');
shortStack.push('blue berry');
shortStack.push('bananna');

console.log('peeking shortStack: ' + shortStack.peek());
console.log('poping shortStack: ' + shortStack.pop());
console.log('poping shortStack: ' + shortStack.pop());
console.log('poping shortStack: ' + shortStack.pop());


```  
**/call-bind/call-inheritance.js**  
``` js  
'use strict';

function Person(name, age){
  this.name = name;
  this.age = age;
}

function SuperPower(name, age, power){
  Person.call(this, name, age);
  this.power = power;
}

function Hero(hero, name, age, power){
  SuperPower.call(this, name, age, power);
  this.hero = hero;
}

console.log( new Hero('yes', 'super lulwat', 33, 'hacking'));
```  
**/call-bind/call-specify-function-context.js**  
``` js  
'use strict';

var Slug = function(){
  this.name = 'slug neo';
  // using call to pass *this* to a callback
  this.howAwesome = function(cb){
    cb.call(this);
  };
};

var neo = new Slug();

// using call to pass *this* to a callback
neo.howAwesome(function(){
  console.log(this.name);
});

// using call to specify what conext for *this* it should use
function sayHello(){
  console.log('hello, ' + this.name);
}
sayHello.call(neo);

(function(){
  console.log('this in an iffi: ' + this.name);
}).call(neo);



```  
##/event-emitters  
**/event-emitters/ee-demo.js**  
``` js  
'use strict';

const EE = require('events').EventEmitter;
const ee = new EE();

ee.on('one:done', ()=>{
    process.nextTick(()=>{
      console.log('one is done');
      ee.emit('two:done');
    }); 
});

ee.on('two:done', ()=>{
    process.nextTick(()=>{
      console.log('two is done');
      ee.emit('three:done');
    }); 
});

ee.on('three:done', ()=>{
    process.nextTick(()=>{
      console.log('three is done');
    }); 
});

ee.emit('one:done');
```  
**/event-emitters/ee-recursion-demo.js**  
``` js  
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

```  
##/event-emitters/txt  
**/event-emitters/txt/one.txt**  
``` txt  
one
```  
**/event-emitters/txt/three.txt**  
``` txt  
three
```  
**/event-emitters/txt/two.txt**  
``` txt  
two
```  
  
