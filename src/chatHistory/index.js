import ChatHistory from './schema';


const Chat = new ChatHistory({ self: true, msg: 'Random Msg', time: '4:30 PM' });
Chat.save();

const getChatHistory = async () => {
  const result = await ChatHistory.find();
  return result;
};
export default getChatHistory;
