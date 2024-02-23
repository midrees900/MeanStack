const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');
var conn =mongoose.Collection;
 
var userSchema =new mongoose.Schema({
  name: String,
  email: String,
  password: String,
 
});
 
var userModel = mongoose.model('Users', userSchema);
module.exports=userModel;