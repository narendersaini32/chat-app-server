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
  socket.on('getChatHistory', async (filter) => {
    const result = await ChatHistory.getChatHistory(filter);
    io.sockets.emit('chatHistory', result);
  });
  socket.on('insertChat', async (data, filter) => {
    await ChatHistory.insertChat(data);
    const result = await ChatHistory.getChatHistory(filter);
    io.sockets.emit('chatHistory', result);
  });
  socket.on('getUsersListing', async (filter) => {
    const result = await Users.getUsersList(filter);
    io.sockets.emit('usersListing', result);
  });
  socket.on('loginUser', async () => {
    io.sockets.emit('currentLoginUser', {});
  });
  socket.on('insertUser', async (data) => {
    console.log(': data', data);
    const result = await Users.insertUser(data);
    console.log(': result', result);
    io.sockets.emit('currentLoginUser', result);
  });
});
server.listen(port, () => console.log('Chat app Server Started'));
