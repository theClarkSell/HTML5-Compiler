util = require 'util'
net = require 'net'

nodeStatic = require 'node-static'
viewFiles = new nodeStatic.Server './view'

httpSvr = require('http').createServer ( request, response ) -> 
	request.addListener 'end', ->
		viewFiles.serve request, response
		
io = require('socket.io').listen(httpSvr)

io.sockets.on 'connection', (socket) ->
	util.puts '>> client Connected'
	
	socket.send 'Welcome to the awesome chat server.'
	socket.send ' Please Enter Your Name'
	
	userName = undefined
	
	checkForName = (userNameInput) ->
		if userName is undefined
			userName = userNameInput
			io.sockets.emit 'message', userName + ' has entered chat'
			
		return
	
	socket.on 'echo', (message) ->
		util.puts '>> echo called: ' + message

		checkForName (message)

		socket.send message
		return
			
	socket.on 'message', (message) ->
		util.puts '>> message called: ' + message
		
		checkForName (message) 

		chatMessage = userName + ': ' + message			
		io.sockets.emit 'message', chatMessage
		return
		
	socket.on 'disconnect', ->
		util.puts '>> disconnect called'
		io.sockets.emit 'message', 'i am outty'
		return
		
httpSvr.listen 8080	

util.puts '>> the http server is @ 8080'
