var greet = function(name){
  var outsideName = null;
  var name = outsideName || name;
  return 'hello ' + name;
}

console.log(greet('from greet'));

module.exports = greet;
