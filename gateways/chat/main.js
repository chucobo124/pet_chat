module.exports.makeGateway = (http)=>{
    var io = require('socket.io')(http)
    io.on('connection', function (socket) {
        let token = socket.handshake.query.token

        io.use((socket, next) => {
            console.log('token==>')
            console.log(token)
            return next()
        })

        console.log('after middleware token==>')
        console.log(token)
        //TODO: Make a database talbe to compare a roomName
        socket.on(token, function (msg, roomName) {
            console.log('roomName=>')
            console.log(roomName)
            io.emit(token, msg)
            console.log("msg=>")
            console.log(msg)
        })
    })
}