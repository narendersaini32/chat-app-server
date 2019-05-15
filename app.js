import express from 'express';
import http from 'http';
import Socket from 'socket.io';

const server = http.Server(express);
const io = Socket(server);
const app = express();
const port = 4000;

app.get('/', (req, res) => res.send('old'));
io.on('connection', (socket) => {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', (data) => {
    console.log(data);
  });
});
server.listen(port, () => console.log('Chat app Server Started'));
