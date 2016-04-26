'use strict';

var greet = require(__dirname + '/lib/greet');

var hello = module.exports = exports = function(){
  var greeting = greet(process.argv[2] || 'world');
  console.log(greeting);
  return greeting;
};

hello();
