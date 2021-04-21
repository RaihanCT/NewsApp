const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');


const port = 3223;
const app = express();
//Cors Module for Angular Application
app.use(cors());

let connections = {}

const server = http.createServer(app);
const io = socketio(server, {
    cors : {
        origin : "*" //means anyone can access it
    }
})


io.on("connection", (client) => {
    
    client.on("login", data => {
        connections[data] = client;
        connections[data].username = data;
        console.log(Object.keys(connections).length);
        client.emit("totalUsers", Object.keys(connections).length)
    })

    client.on("chat", data => {
        // let newData = {...data , username : client.username};
        console.log(data);
        client.broadcast.emit("messages", data);
    })

})

server.listen(port, () => {
    console.log(`Chat Listening to port ${port}`)
});

