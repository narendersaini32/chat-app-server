import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/chatApp', { useNewUrlParser: true });
const ChatHistoryScheme = new mongoose.Schema({
  timeStamp: Date,
  msg: String,
  from: String,
  to: String,
  fromUserName: String,
  toUserName: String,
});
const ChatHistory = mongoose.model('ChatHistory', ChatHistoryScheme, 'ChatHistory');
export default ChatHistory;
