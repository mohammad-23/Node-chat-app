const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');


const publicPath = path.join(__dirname, '../public');
const port = process.env.port || 3000;
var app = express();

app.use(express.static(publicPath));

var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New user connected');
    
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));
    
    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));
    
    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
    });    
    
    socket.on('disconnect', () => {
        console.log('User disconnected');
    })
})


server.listen(3000, function () {
    console.log(`Server up on port ${port}`);
});





