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
