(function() {
  var httpSvr, io, net, nodeStatic, util, viewFiles;

  util = require('util');
  net = require('net');
  nodeStatic = require('node-static');

  viewFiles = new nodeStatic.Server('./view');

  httpSvr = require('http').createServer(function(request, response) {
    return request.addListener('end', function() {
      return viewFiles.serve(request, response);
    });
  });

  io = require('socket.io').listen(httpSvr);

  // cook up some awesome sauce here...

  httpSvr.listen(8080);
  util.puts('>> the http server is @ 8080');

}).call(this);
