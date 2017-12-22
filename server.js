'use strict';

const express = require('express');
const http = require('http').Server(express);
const io = require('socket.io')(http);
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('a user connected');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);