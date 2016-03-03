const Stack = function(input){
  var data = input || [];
  this.push = Array.prototype.push.bind(data);
  this.pop = Array.prototype.pop.bind(data);
  this.peek = function(){
    return data[data.length -1];
  };
};

var shortStack = new Stack();

shortStack.push('chocolate chip');
shortStack.push('blue berry');
shortStack.push('bananna');

console.log('peeking shortStack: ' + shortStack.peek());
console.log('poping shortStack: ' + shortStack.pop());
console.log('poping shortStack: ' + shortStack.pop());
console.log('poping shortStack: ' + shortStack.pop());
