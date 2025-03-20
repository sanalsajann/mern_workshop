const mongoose = require('mongoose');

const userDBConnection = mongoose.connect('mongodb+srv://sanalsajan916:T7Eu3g1auNHGIaIE@cluster0.ibrjg5n.mongodb.net/employeedb?retryWrites=true&w=majority&appName=Cluster0').then((res) => {
    console.log("UserDB is online");
}).catch((err) => {
    console.log("UserDB is offline");
    console.log(err);
});

module.exports = userDBConnection; 