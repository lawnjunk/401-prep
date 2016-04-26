'use strict';

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

console.log( new Hero('yes', 'super lulwat', 33, 'hacking'));
