'use strict';

var slug = {name: 'neo'} ;
function sayHello (){
  console.log(`hello, ${this.name}!`);
}

sayHelloSlug = sayHello.bind(slug);
sayHelloSlug();
