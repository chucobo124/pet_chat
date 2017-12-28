var app = require('express')()
var configPath = require('./service/initialize.js').getConfigPath()
var http = require('http').Server(app)
var io = require('socket.io')(http)
const serverConfig = require(configPath).config
var elasticsearchClient = require('./service/elasticsearch/initialize.js').client(serverConfig)


app.get('/', function (req, res) {
  room = req.query.room

  io.on('connection', function (socket) {
    socket.join(room)
  })

  res.sendFile(__dirname + '/index.html')
})

io.on('connection', function (socket) {
  io.use((socket, next) => {
    let handshake = socket.handshake
    console.log(handshake.queyr.token)
    return next()
  })
  socket.on('chat message', function (msg, other_data) {
    console.log('other_data')
    console.log(other_data)
    io.emit('chat message', msg)
    console.log(msg)
  })
})

http.listen(8080, function () {
  console.log('listening on *:8080')
})
