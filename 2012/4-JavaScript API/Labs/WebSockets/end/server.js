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

  io.sockets.on('connection', function(socket) {
    var checkForName, userName;
    util.puts('>> client Connected');
    socket.send('Welcome to the awesome chat server.');
    socket.send(' Please Enter Your Name');
    userName = void 0;
    checkForName = function(userNameInput) {
      if (userName === void 0) {
        userName = userNameInput;
        io.sockets.emit('message', userName + ' has entered chat');
      }
    };
    
    socket.on('echo', function(message) {
      util.puts('>> echo called: ' + message);
      //checkForName(message);
      socket.send('echo: ' + message);
    });
    
    socket.on('message', function(message) {
      var chatMessage;
      util.puts('>> message called: ' + message);
      checkForName(message);
      chatMessage = userName + ': ' + message;
      io.sockets.emit('message', chatMessage);
    });
    return socket.on('disconnect', function() {
      util.puts('>> disconnect called');
      io.sockets.emit('message', 'i am outty');
    });
  });

  httpSvr.listen(8080);

  util.puts('>> the http server is @ 8080');

}).call(this);
