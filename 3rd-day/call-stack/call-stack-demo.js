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
