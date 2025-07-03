import http from "http"
import express from "express"
import path from "path"
import { Server } from "socket.io"

const app = express()
const server = http.createServer(app)
const io = new Server(server) // it handle particularly sockets

// socket.io - work
io.on('connection', (socket) => {
    socket.on('user-message', (message) => {
        io.emit('message', message)
    })
})

// for http requests handle express
app.use(express.static(path.resolve('./public')))

app.get('/', (req, res) => {
    return res.sendFile('/public/index.html')
})

server.listen(3000, () => {
    console.log(`Server is running at port 3000!!`);
})