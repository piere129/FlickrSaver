const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
//const config = require('../models/database');

//user schema
var Schema = mongoose.Schema;


const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    images: [{type: Schema.Types.ObjectId, ref:'Image'}]
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback).populate('images');
}

module.exports.getUsers =  User.find().populate('images');

module.exports.getUserByUsername = function (username, callback) {
    const query = {
        username: username
    };
    User.findOne(query, callback).populate('images');
}

module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) {
                throw err
            } else {
                newUser.password = hash;
                newUser.save(callback);
            }
        });
    });
}

module.exports.comparePassword = (toComparePassword, hash, callback) => {
    bcrypt.compare(toComparePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch)
    })
}