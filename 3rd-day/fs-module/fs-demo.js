var fs = require('fs');

fs.readFile('./does-not-exist', function(err, data){
  if (err) throw err;
  console.log(data.toString());
});

fs.readFile('./helloworld.txt', function(err, data){
  if (err) throw err;
  console.log(data.toString());
});

