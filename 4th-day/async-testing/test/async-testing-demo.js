'use strict';

const fs = require('fs');
const expect = require('chai').expect;

describe('testing fs module async testing', () => {
  console.log('this: ', this);
  it('should return an error', (done) => {
    fs.readFile('./does-not-exist', (err, data) => {
      expect(!!err).to.eql(true);
      done();
    });
  });
  it('should return a buffer with the contents "hello, world\n"', (done) => {
    fs.readFile(__dirname + '/hello-world.txt', (err, data) => {
      expect(data.toString()).to.eql('hello, world\n');
      done();
    });
  });
});
