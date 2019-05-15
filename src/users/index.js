import Users from './schema';


const getUsersList = async () => {
  const result = await Users.find();
  return result;
};


module.exports = {
  getUsersList,
};
