// Mongoose
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    id: Number,
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

var Users = mongoose.model('users', userSchema);
module.exports = Users;