import Users from './schema';


const getUsersList = async (filter) => {
  const result = await Users.find(filter);
  return result;
};

const insertUser = async (data) => {
  const { email } = data;
  let result = await Users.findOne({ email }) || {};
  if (Object.entries(result).length === 0 && result.constructor === Object) {
    const user = new Users(data);
    result = await user.save();
  }
  return result;
};

module.exports = {
  getUsersList,
  insertUser,
};
