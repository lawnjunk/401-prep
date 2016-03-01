npm gulp eslint
===============

# npm
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

# Demo code
**package.json**
``` json
{
  "name": "hello-cli-test",
  "version": "0.0.1",
  "description": "a demo to demonstrate testing hello-greet cli, for sea-401d2-js",
  "main": "gulpfile.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "chai": "^3.5.0",
    "gulp": "^3.9.1",
    "gulp-eslint": "^2.0.0"
  }
}
```

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
