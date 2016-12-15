var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    username: String,
    password: String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);

// from : http://mherman.org/blog/2015/01/31/local-authentication-with-passport-and-express-4/#.VZCK9xNViko
// à Test Redux