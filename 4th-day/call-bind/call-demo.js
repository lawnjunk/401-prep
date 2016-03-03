'use strict';

var Slug = function(){
  this.name = 'slug neo';
  this.howAwesome = function(cb){
    cb.call(this);
  };
};

var neo = new Slug();

neo.howAwesome(function(){
  console.log(this.name);
});
