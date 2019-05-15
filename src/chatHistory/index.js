import ChatHistory from './schema';


const getChatHistory = async () => {
  const result = await ChatHistory.find();
  return result;
};

const insertChat = async (data) => {
  const chat = new ChatHistory(data);
  await chat.save();
};
module.exports = {
  getChatHistory,
  insertChat,
};
