const  mongoose  = require("mongoose");

//khai bao goi tuong mongoose su dung nhu 1 bien global
mongoose.Promise = global.Promise;
//khai bao 1 doi tuong dai dien DB lam viec
const db = {};
// bo sung cac thuoc tinh cho DB
db.mongoose = mongoose;

db.connectDB = async()=>{
   await mongoose.connect(process.env.MONGO_URI,{
        dbName: process.env.DB_NAME
    }).then(()=>console.log("connect to MongoDB success"))
    .catch(error=>console.error(error.message));
};
module.exports = db;