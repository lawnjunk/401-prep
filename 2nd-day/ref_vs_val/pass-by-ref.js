'use strict';
var point = {
  x: 5,
  y: 4
};

var addOne = function(input){
  input.x++;
  input.y++;
  return input;
};

console.log('original point: ', point);
console.log('result addOne : ', addOne(point));
console.log('point         : ', point);
