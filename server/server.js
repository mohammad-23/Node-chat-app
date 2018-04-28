const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '../public');
const port = process.env.port || 3000;
var app = express();

app.use(express.static(publicPath));

var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New user connected');
    
    socket.emit('newMessage', {
        from: 'Admin',
        text: 'welcome to the app',
        createdAt: new Date().getTime()
    });
    
    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user joined',
        createdAt: new Date().getTime()
    });
    
    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });
    });    
    
    socket.on('disconnect', () => {
        console.log('User disconnected');
    })
})


server.listen(3000, function () {
    console.log(`Server up on port ${port}`);
});





