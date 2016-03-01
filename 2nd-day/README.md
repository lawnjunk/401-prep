LECTURE PLAN
============

## part 1
* hw review
* eslint
* gulp

## part 2
* npm & package.json
* pass by rev vs value
* require cache

# hW review

**hello.js**
``` javascript
'use strict';

var greet = require(__dirname + '/lib/greet');

var hello = module.exports = exports = function(){
  var greeting = greet(process.argv[2] || 'world');
  console.log(greeting);
  return greeting;
};

hello();
```

**lib/greet.js**
``` javascript
'use strict';

module.exports = exports = function(name){
  return 'hello ' + name;
};
```

**test/hello-test.js**
``` javascript
'use strict';

var hello = require(__dirname + '/../hello');
var expect = require('chai').expect;

describe('hello function', function(){
  beforeEach(function(){
    this.processArgvBackup = process.argv;
    process.argv = ['node', 'hello.js'];
  });

  afterEach(function(){
    process.argv = this.processArgvBackup;
  });

  it('should greet the world with no hello world', function(){
    expect(hello()).to.eql('hello world');
  });
});

describe('hello function', function(){
  beforeEach(function(){
    this.processArgvBackup = process.argv;
    process.argv = ['node', 'hello.js', 'slug-a-corn'];
  });

  afterEach(function(){
    process.argv = this.processArgvBackup;
  });

  it('should greet the world with a name specified', function(){
    expect(hello()).to.eql('hello slug-a-corn');
  });
});
```

# eslint 
[Getting Started](http://eslint.org/docs/user-guide/getting-started)
[Advanced Configuration](http://eslint.org/docs/user-guide/configuring)
* javascript linter
* make sure to include mocha globals

**.eslintrc.json**
``` json
{
  "rules": {
    "no-console": 0,
    "indent": [
      2,
      2
    ],
    "quotes": [
      2,
      "single"
    ],
    "linebreak-style": [
      2,
      "unix"
        ],
        "semi": [
          2,
          "always"
        ]
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "globals": {
    "describe": false,
    "it": false,
    "beforeEach": false,
    "afterEach": false,
    "before": false,
    "after": false
  },
  "ecmaFeatures": {
    "modules": true,
    "experimentalObjectRestSpread": true
  },
  "extends": "eslint:recommended"
}
```

# gulp 
* automation
* [Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
* [Api Docs](https://github.com/gulpjs/gulp/blob/master/docs/API.md)

**gulpfile.js**
``` javascript
'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');

var files = ['gulpfile.js', __dirname + '/lib/**/*.js', __dirname + '/test/**/*.js', 'hello.js'];
gulp.task('lint', function(){
  return gulp.src(files)
    .pipe(eslint())
    .pipe(eslint.format());
});
```

# BREAK

# Npm 
[npm](https://npmjs.com)  
* a package manager for node.js
* the *npm Registry* is a collection of packages and open source code for the JS community
* `npm` is a command line client*(cli)* that allows developers to insall and publish those packages
[how npm works](https://docs.npmjs.com/how-npm-works/packages)
* modules are anything that can be loaded by **Nodejs** withat `require()` statement
 * this could be a file or a dir(there are several things taht require cann work with)
* packages are a file or directory described by a **package.json**
 * most **packages** are **modules**, but some are cli's and cannot be loaded by a `require()` call
[getting started with package.json](https://docs.npmjs.com/getting-started/using-a-package.json)
* bare min
 * name
 * version
* main = what will be required
* scripts = named scripts for testing, development, deploying
  * by default there is an empty test script (with npm init)
* dependencies
 * the stuff your package **needs** to run
 * `--save`
* devDependencies
 * the stuff you need for the devlopment of this packages
 * `--save-dev`

# Passed by ref vs. value
**Pass by Reference**
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

**Pass by Value**
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

# Require Cache

### global.require.cache
* is an object
* objects are passed by refrence
* if you save the state in a required file it will not change when you re-require that file 

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
