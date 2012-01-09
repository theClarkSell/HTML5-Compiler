# 2012 CodeMash HTML5 Precompiler
Contributors: Brandon Satrom, Clark Sell

Tags: HTML5, JavaScript, WebSockets

- - -
## Abstract

In this lab we're going to work through building a realtime chat system leveraging WebSockets.

- - -
## What will you learn?

In this lab you will learn the basics for creating and consuming a WebSocket.

* How to open a connection
* How to host an endpoint 
* How to broadcast a message across multiple clients
* How to send a message

**note** Given the state of the WebSocket Spec and each browser implementation of the spec we're going to developer against an open source library called Socket.IO. The Socket.IO API is very close to the current web socket spec.

- - - 
## Prerequisites

In this purposes of this lab we're going to use node.js for the server side of our WebSocket endpoints.

If you need to install node.js, visit http://nodejs.org/#download.

- - - 
## Dependencies

Once node.js is installed, there are a number of modules we need to install to run. 

* socket.io
* socket.io-client
* node-static
* coffee-script
* jasmine-node

To keep the source base as small as possible these libraries we're not added to source control. At the root you will find `./package.json`, this is our NPM ( node.js package manager ) dependency file. To install run the following command, assuming your root is at the root.

		npm install ./

- - - 
## The Lab

There are two files, we will spend all of our time in:

		./server.js ( or if you prefer CoffeeScript server.coffee )
		./view/default.html

`./server.js` is our **server** side of our WebSockets. `Server.js` is what we will run in node.js. `./view/default.html` is our **client side** of things. For purposes of this demo we will also host our view in node.js. 

We're going to build a very simple chat application.

- - - 
### Before we get started

In order to save time on the lab and focus on the core of WebSockets, the majority of the "setup" code has been done. By setup we're referring to creating an http server, assigning ports and starting listeners. Feel free to look things over and see how they are setup.

- - - 
### Step #1, Setting up the server connection

With the server setup the first event that we need to wire up is the `connection`. `connection` is the first thing that gets fired when a client tries to make a connection.

Let's add our first event handler for the connection event.

		io.sockets.on('connection', function(socket) {

		});

Let's also add a simple statement to that function which just logs to the console.
		
		util.puts('>> in connection event');
 

### Step #2, Setting up the client connection

With our server now waiting for a connection we can open `./view/default.html` create our connection.

		var webSocket = new io.connect('http://localhost:8080');
       
Doing so will create a connection to our server. Like the server  there is an event called `connect` that we can listen on and notify our user we've been connected. Let's add an event handler for `connect`.


		webSocket.on('connect', function() {
			$('#systemMessages').append('<li>Connected to the server.</li>');
		});

### Step 3, Does it work?

Open your terminal and get located to the root of the lab. To start our server let's now fire up node.js.

		> node ./server.js

If everything has been done correctly, node should emit a message like such:

		>> the http server is @ 8080

Now let's open any browser and browse to:

		http://localhost:8080/default.html

After a second or so, we should see the following message:

		Connected to the server.

**for fun** try a number of different browsers and browser versions. If you have IE, start going backwards. You should notice that regardless of versions, the connection still happens.

This works all in part due to Socket.IO. Socket.IO has built in a number of different "WebSocket" like techniques such as long polling, to enable a "WebSocket" like experience regardless of browser versioning, i.e. polyfilling.

Try opening a number of different browser windows as well. You should see them all connect with no problems.

### Step 4, disconnect

Just like connecting, we have disconnecting and that event is known as `disconnect`. It only seems proper to enable that next. 

On our server lets add our `disconnect` function.

		socket.on('disconnect', function() {
			util.puts('>> disconnect called');

			io.sockets.emit('message', 'i am outty');
		});

And on the client.

		webSocket.on('disconnect', function() {
			$('#systemMessages').append('<li>Disconnected from the server.</li>');
		});

Restart\Rerun and when you kill either side ( browser or server ) you should now see the disconnect message display.

### Step 5. Send a message

Once a client get's created let's send a message to **only** that client that just connected. Let's welcome them and ask for their name.

On the server in the connect function lets send the following two messages:

		socket.send('Welcome to the awesome chat server.');
		socket.send('Please Enter Your Name');

More on the name request later.

Restart\Rerun. No messages! We have nothing on the client side to accept those messages.

### SideNote

We have now seen `io.sockets.emit` and `socket.send`. Basically `emit` will broadcast to **any** client connected while `send` will **only** send to the direct connection.

### Step 6, the message

The default message event is called `message`. On our client let's add an event listener for it.

		webSocket.on('message', function(message) {
			$('#recievedMessages').append('<li>' + message + '</li>');
		});

Restart\Rerun and you should now see the connect message from the server.

### Step 7, echo message

At this point we have successfully connected both the client and server together, and event sent a message from the server to the client.

Now lets send a message to the server, and have the server echo it back to us.

On the client, let's add a `click` handler for for the `#echo` button where we send whatever was contained in the textbox `#sendMessage`.

`webSocket.emit` is the function we will call, and it takes the event name, and a message.

		$('#echo').bind('click', function() {

			var message = $('#sendMessage').val();
			webSocket.emit('echo', message);

			$('#sendMessage').val('');
		});

### Step 8, accepting messages on the server

As with step 6 we now need to add an event handler on the server for that event `echo`, otherwise it will never get handled.

		socket.on('echo', function(message) {
			util.puts('>> echo called: ' + message);
			socket.send('echo: ' + message);
		});
 
Restart\Rerun and you should see your client's connect, and be able to send the server messages while having the server bounce them back.

You should open a few browsers windows and try it too.

### Step 9, chat it up

Now we just need to send and receive chat messages. Since the client is already receiving messages on the `message` event we will continue to use that event.

To send a chat message let's add another event handler for the `#submit` button. Just like the `echo` message we will grab the text and `emit` the message but this time we will emit it on the `message` event.

		$('#submit').bind('click', function() {

			var message = $('#sendMessage').val();
			webSocket.emit('message', message);

			$('#sendMessage').val('');
		});

Now we need to implement `message` event on the server. If you remember in the start of the lab, we sent a message to the user asking for their name. Let's create a simple function to check for the user's name and `emit` a message saying they have entered the chat.

		var userName, checkForName;
		userName = undefined;

		checkForName = function(userNameInput) {
			if (userName === void 0) {
				userName = userNameInput;
				io.sockets.emit('message', userName + ' has entered chat');
			}
		};

Lastly it's time to implement `message`. Nothing really different than in our previous steps except for the fact we will call our `checkForName` function and modify the incoming message adding the name while broadcasting it to everyone connected.

		socket.on('message', function(message) {
			var chatMessage;
			util.puts('>> message called: ' + message);
			checkForName(message);

			chatMessage = userName + ': ' + message;
			io.sockets.emit('message', chatMessage);
		});

Restart\Rerun and we should now have a simple chat server.

### Extra Credit. 

Play around with creating your own custom events sending things back and forth from the server to the clients.

- - -
## Resources

* W3C WebSocket Standard: http://dev.w3.org/html5/websockets/
* IETF WebSocket Protocol Spec: http://tools.ietf.org/html/draft-ietf-hybi-thewebsocketprotocol-09
* HTML5 Labs: http://html5labs.com, http://html5labs.interoperabilitybridges.com/prototypes/websockets/websockets/info
* node.js: http://nodejs.org/
* Socket.IO: http://socket.io/
* Pusher: http://pusher.com/
* CoffeeScript: http://coffeescript.org/

github

* socket.io: https://github.com/LearnBoost/socket.io-client
* socket.io-client: https://github.com/LearnBoost/socket.io-client

