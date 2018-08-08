const express = require('express');
const router = express.Router();
const User = require('../models/users');
const passport = require('passport');
const jwt = require('jsonwebtoken');

//register route
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.name,
        username: req.body.username,
        password: req.body.password
    });

    //we could also do newUser.save, but  extra functionality (encryption) is needed, 
    //so it routes to the User model to call addUser function
    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({success: false, msg: 'Failed to register User'});
        } else {
            res.json({success: true, msg: "User registered"});
        }
    });
});

//get users
router.get('/users',(req,res,next) => {

    User.find( (err, users) => {
        res.json(users);
    })
});


//authenticate
router.post('/authenticate', (req, res, next) => {
    res.send("AUTHENTICATE");
});

//authenticate
router.get('/profile', (req, res, next) => {
    res.send("PROFILE");
});

module.exports = router;