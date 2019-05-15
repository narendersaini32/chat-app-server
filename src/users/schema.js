import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/chatApp', { useNewUrlParser: true });
const UsersScheme = new mongoose.Schema({
  userName: String,
  url: String,
});
const Users = mongoose.model('User', UsersScheme, 'users');
export default Users;
