import ChatHistory from './schema';


const getChatHistory = async (filter) => {
  const result = await ChatHistory.find(filter);
  return result;
};

const insertChat = async (data) => {
  const doc = Object.assign(data);
  doc.timeStamp = new Date();
  const chat = new ChatHistory(doc);
  await chat.save();
};
module.exports = {
  getChatHistory,
  insertChat,
};
