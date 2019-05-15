import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/chatApp', { useNewUrlParser: true });
const ChatHistoryScheme = new mongoose.Schema({
  self: Boolean,
  msg: String,
  time: String,
});
const ChatHistory = mongoose.model('ChatHistory', ChatHistoryScheme, 'ChatHistory');
export default ChatHistory;
