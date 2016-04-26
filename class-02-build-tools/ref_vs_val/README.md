Pass by Reference vs. Pass by Value
===================================

# Pass by Reference
``` javascript 
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
```

# Pass by Value
``` javascript 
'use strict';

var num = 5;

var addOne = function (input){
  var result = ++input;
  return result;
};

console.log('original num : ' + num);
console.log('addOne result: ' + addOne(num));
console.log('num          : ' + num); 
```
