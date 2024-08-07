const mongoose = require('mongoose');
const { Schema } = mongoose;

const validGender = ["male", "female", ""];

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 200
    },
    password: {
        type: String,
        required: true,
        maxlength: 200
    },
    username: {
        type: String,
        maxlength: 200,
        default: ''
    },
    phone: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        default: null
    },
    gender: {
        type: String,
        enum: validGender,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    roles: [{
        type: Schema.Types.ObjectId,
        ref: "role"
    }]
}, {
    timestamps: true
});

const User = mongoose.model('user', userSchema);
module.exports = User;
