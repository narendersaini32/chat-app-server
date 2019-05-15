import express from 'express';
import http from 'http';
import Socket from 'socket.io';
import ChatHistory from './src/chatHistory';
import Users from './src/users';

const server = http.Server(express);
const io = Socket(server);
const app = express();
const port = 4000;

app.get('/', (req, res) => res.send('old'));
io.on('connection', (socket) => {
  socket.on('getChatHistory', async () => {
    const result = await ChatHistory.getChatHistory();
    io.sockets.emit('chatHistory', result);
  });
  socket.on('insertChat', async (data) => {
    await ChatHistory.insertChat(data);
    const result = await ChatHistory.getChatHistory();
    io.sockets.emit('chatHistory', result);
  });
  socket.on('getUsersListing', async () => {
    const result = await Users.getUsersList();
    io.sockets.emit('usersListing', result);
  });
});
server.listen(port, () => console.log('Chat app Server Started'));
