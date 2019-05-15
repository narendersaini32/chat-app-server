import express from 'express';
import http from 'http';
import Socket from 'socket.io';
import getChatHistory from './src/chatHistory';

const server = http.Server(express);
const io = Socket(server);
const app = express();
const port = 4000;

app.get('/', (req, res) => res.send('old'));
io.on('connection', (socket) => {
  socket.on('getChatHistory', async () => {
    const result = await getChatHistory();
    io.sockets.emit('all', result);
  });
});
server.listen(port, () => console.log('Chat app Server Started'));
