Require Cache Demo
==================

# global.require.cache
* is an object
* objects are passed by refrence
* if you save the state in a required file it will not change when you re-require that file 

# Demo files
**cache-demo.js**
``` javascript
'use strict';

var greet = require(__dirname + '/lib/greet');
var middle = require(__dirname + '/lib/middle');
console.log(greet('from inside cash-demo.js'));
```

**lib/greet.js**
``` javascript
'use strict';

var outsideName = null;
var greet = module.exports = function(name){
  var name = outsideName = outsideName || name;
  return 'hello ' + name;
}

console.log(greet('from greet'));
```

**lib/middle.js**
``` javascript
'use strict';

var greet = require(__dirname + '/greet');
console.log(greet('from middle'));
```
