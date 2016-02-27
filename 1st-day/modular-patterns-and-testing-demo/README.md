Modular Patterns
================

# hello world
* **hello-world.js**
``` javascript
'use strict';

console.log('hello world');
```

# module.expports
* **greet.js**
``` javascript
'use strict';
module.exports = function(name){
  return 'hello ' + name;
}

console.log('hello from inside greet.js');
```
* **hello-world.js**
``` javascript
'use strict';
var greet = require(__dirname + '/2-greet-module-exports');
console.log(greet('unicorn'));
```

# exports
* **greet.js**
``` javascript
'use strict';
exports.greet = function(name){
  return 'hello a second time ' + name;
}
```
* **hello-world.js**
``` javascript
'use strict';
var greet = require(__dirname + '/3-greet-exports').greet;
console.log(greet('unicorn'));
```
