var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    // channel = req.query.channel
    // io.of('/' + channel).on('connection', function (socket) {
    //     socket.on(channel, function (data) {
    //         io.emit(channel, data);
    //         console.log(data);
    //     });
    // });
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
        console.log('socket:' + socket)
        console.log('message: ' + msg);
    });
});

// io.on('connection', function (socket) {
//     socket.emit('news', { hello: 'world' });
//     socket.on('my other event', function (data) {
//         io.emit('my other event', data);
//         console.log(data);
//     });
// });

http.listen(3000, function () {
    console.log('listening on *:3000');
});

