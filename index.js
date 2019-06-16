var http = require('http');
    fs = require('fs'),
    extract = require('./extract'),
    handleError = require('./handleError'),
    wss = require('./websockets-server');

var server = http.createServer(function(req, res){
  console.log('Responding...');

  var url = req.url;
  var filePath = extract(url);
  var fileExt = filePath.slice(filePath.indexOf('.'));

  fs.readFile(filePath, function(err, data) {
    if(err) {
      res.setHeader('Content-Type', fileExt);
      handleError(err, res);
      return;
    }
    else {
      res.setHeader('Content-Type', fileExt);
      res.end(data);
    }
  });
});

server.listen(3000);
