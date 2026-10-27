const express = require("express")
const http = require("http")
const {Server} = require("socket.io")
const app = express()
const server = http.createServer(app)//express handle http req through this server
const io = new Server(server)//now the http supports socket connectin
app.use(express.static("public"))
io.on("connection",(socket)=>{
console.log("user connected")//this run when a client setablish a socket.io connection represented that the
//connected client//
socket.on("chatMessage",(message)=>{
    io.emit("chatMessage",message)//this sends an event data
})
socket.on("disconnect",()=>{
    console.log("user disconnected")
})
})
server.listen(3000,()=>{
    console.log("server running on port 3000")
})
