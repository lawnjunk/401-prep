var greet = require(__dirname + '/../2-greet-module-exports');
var greet2 = require(__dirname + '/../3-greet-exports.js').greet;

var expect = require('chai').expect;

describe('test the first greet function', function(){
  it('should greet a "hello test"', function(){
    expect(greet('test')).to.eql('hello test');
  });
});

describe('test the second greet function', function(){
  it('should greet a "hello a second time test"', function(){
    expect(greet2('test')).to.eql('hello a second time test');
  });
});
