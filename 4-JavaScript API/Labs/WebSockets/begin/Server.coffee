util = require 'util'
net = require 'net'

nodeStatic = require 'node-static'
viewFiles = new nodeStatic.Server './view'

httpSvr = require('http').createServer ( request, response ) -> 
	request.addListener 'end', ->
		viewFiles.serve request, response
		
io = require('socket.io').listen(httpSvr)

# cook up a batch of awesome sauce here....
		
httpSvr.listen 8080	

util.puts '>> the http server is @ 8080'
