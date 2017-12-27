var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    room = req.query.room

    io.on('connection', function (socket) {
        socket.join(room)
    });

    res.sendFile(__dirname + '/index.html');
});

// io.on('connection', function (socket) {
//     socket.on('chat message', function (msg) {
//         io.emit('chat message', msg);
//         console.log('socket:' + socket)
//         console.log('message: ' + msg);
//     });
// });

io.on('connection', function (socket) {
    var handshake = socket.handshake
    console.log(handshake)
    socket.emit('news', { hello: 'world' });
    socket.on('chat message', function (data) {
        io.emit('chat message', data);
        console.log(data);
    });
});

http.listen(8080, function () {
    console.log('listening on *:8080');
});

