let socket = io.connect('http://127.0.0.1:5000');
socket.on('connect', function () {
	console.log('Connection established using Sockets!');
});