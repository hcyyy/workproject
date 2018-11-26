var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: { type: string },
    userpassword: { type: string }
});

module.exports = mongoose.model('User', UserSchema);