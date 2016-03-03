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
