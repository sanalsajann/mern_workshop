const mongoose = require('mongoose');

const userDBConnection = mongoose.connect('Paste your MongoDB connection string here. Between "/" and "?" type the name of the database').then((res) => {
    console.log("UserDB is online");
}).catch((err) => {
    console.log("UserDB is offline");
    console.log(err);
});

module.exports = userDBConnection; 
