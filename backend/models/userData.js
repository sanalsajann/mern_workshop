const db = require('mongoose');

const userSchema = new db.Schema({
    userName    :   String, 
    userPassword:   String,
    userEmail   :   String
});

const userData = db.model('users', userSchema);
module.exports = userData;