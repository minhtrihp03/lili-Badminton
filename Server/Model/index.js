const mongoose = require("mongoose");
const User = require('../Model/User');
const Post = require('../Model/Posts');
const Court = require('../Model/Courts');
const Coach = require('../Model/Coaches');
const Booking = require('./Bookings');
const Message = require('../Model/Messages');
const Notification = require('../Model/Notifications');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.user = User;
db.post = Post;
db.court = Court;
db.coach = Coach;
db.booking = Booking;
db.message = Message;
db.notification = Notification;

db.connectDB = async () => {
   await mongoose.connect(process.env.MONGO_URI, {
        dbName: process.env.DB_NAME
    })
    .then(() => console.log("connect to MongoDB success"))
    .catch(error => console.error(error.message));
};

module.exports = db;
