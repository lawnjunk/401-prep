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
