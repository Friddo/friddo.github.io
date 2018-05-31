console.log('Host started. . .');

var express = require('express');
var app = express();
var server = app.listen(3000, listening);


function listening() {
  console.log('Host open');
}

app.use(express.static('website'));
