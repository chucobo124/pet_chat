var app = require('express')()
var configPath = require('./services/initialize.js').getConfigPath()
var http = require('http').Server(app)
const serverConfig = require(configPath).config
var elasticsearchClient = require('./services/elasticsearch/initialize.js').client(serverConfig)
var chatGateway = require('./gateways/chat/main.js').makeGateway(http)

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

http.listen(8080, function () {
  console.log('listening on *:8080')
})
