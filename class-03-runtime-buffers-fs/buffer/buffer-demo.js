'use strict';

var helloBuf = new Buffer('hello world');

console.log('----- buffer object -----');
console.log('helloBuf                      : ', helloBuf);
console.log('helloBuf.length               : ', helloBuf.length);

console.log('\n----- buffer strings -----');
console.log('helloBuf.toString()           : ', helloBuf.toString());
console.log('helloBuf.toString("utf8")     : ', helloBuf.toString('utf8'));
console.log('helloBuf.toString("hex")      : ', helloBuf.toString('hex'));
console.log('helloBuf.toString("base64")   : ', helloBuf.toString('base64'));

console.log('\n----- buffer write -----');
console.log('helloBuf.write("slugs", 6)');
helloBuf.write('slugs', 6);
console.log('helloBuf.toString()           : ', helloBuf.toString());

console.log('\n----- buffer read integers -----');
console.log('helloBuf.readUInt8()          : ', helloBuf.readUInt8());
console.log('helloBuf.readUInt8(1)         : ', helloBuf.readUInt8(1));
console.log('helloBuf.readUInt8(1)         : ', helloBuf.readUInt8(1));
console.log('helloBuf.readUInt16LE()       : ', helloBuf.readUInt16LE());
console.log('helloBuf.readUInt16LE(2)      : ', helloBuf.readUInt16LE(2));
try {
  console.log('helloBuf.readUInt16LE(200)      : ', helloBuf.readUInt16LE(200));
} catch (e){
  console.error('ERROR: helloBuf.readUInt16LE(200)', e);
}

console.log('\n----- buffer write integers -----');
console.log('helloBuf.writeInt8(0x33)           ');
helloBuf.writeInt8(0x33);
console.log('helloBuf.toString()           : ', helloBuf);

helloBuf.writeInt8(5,1);
console.log('helloBuf.toString()           : ', helloBuf);

