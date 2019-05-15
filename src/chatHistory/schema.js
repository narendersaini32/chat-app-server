import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/chatApp', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('mongoose connected successfully');
});
const ChatHistoryScheme = new mongoose.Schema({
  self: Boolean,
  msg: String,
  time: String,
});
const ChatHistory = mongoose.model('ChatHistory', ChatHistoryScheme, 'ChatHistory');
export default ChatHistory;
