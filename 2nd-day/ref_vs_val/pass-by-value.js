'use strict';

var num = 5;

var addOne = function (input){
  var result = ++input;
  return result;
};

console.log('original num : ' + num);
console.log('addOne result: ' + addOne(num));
console.log('num          : ' + num); 

