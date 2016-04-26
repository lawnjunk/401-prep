'use strict';

var Slug = function(){
  this.name = 'slug neo';
  // using call to pass *this* to a callback
  this.howAwesome = function(cb){
    cb.call(this);
  };
};

var neo = new Slug();

// using call to pass *this* to a callback
neo.howAwesome(function(){
  console.log(this.name);
});

// using call to specify what conext for *this* it should use
function sayHello(){
  console.log('hello, ' + this.name);
}
sayHello.call(neo);

(function(){
  console.log('this in an iffi: ' + this.name);
}).call(neo);



