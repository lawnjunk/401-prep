Call Bind and Apply
===================

# bind
* method creates a new function that when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
* used to make a function that is allwayed called with a particular this value.

``` javascript
function sayHello(){
  console.log(this.name)
}

var superSlug = { name: "slimy slug" };

var sayHelloSlug = sayHello.bind(superSlug);
```

# call
* calls a function with a given this value and arguments provided individually
 * used to invodde a fuction and specify the chontext for 'this'
``` javascript
function greet(){
  console.log('hello, ' + this.name + '!');
}

var unicorn = { name: 'magical moon fire' };
greet.call(unicorn);
```
 * used to chain object constructors
``` javascript
function Person(name, age){
  this.name = name;
  this.age = age;
}

function SuperPower(name, age, power){
  Person.call(this, name, age);
  this.power = power;
}

function Hero(hero, name, age, power){
  SuperPower.call(this, name, age, power);
  this.hero = hero;
}

var wat = new Hero('yes', 'super lulwat', 33, 'hacking');
```
* to invoke an anonymous function
``` javascript
var slug = {name : 'slugbyte'};
(function sayMyName(){
this.sayMyName = function(){
console.log(this.name)
}
this.sayMyName()
}).call(slug)
```


