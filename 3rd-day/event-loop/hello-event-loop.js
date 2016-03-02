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
