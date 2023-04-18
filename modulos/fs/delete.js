var fs = require('fs');

fs.unlink('namefile.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});