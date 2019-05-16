import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/chatApp', { useNewUrlParser: true });
const UsersScheme = new mongoose.Schema({
  userName: String,
  src: String,
  email: String,
});
const Users = mongoose.model('User', UsersScheme, 'users');
export default Users;
