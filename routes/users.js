const express = require('express');
const router = express.Router();
const User = require('../models/users');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

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
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err,user) => {
        if(err) throw err;
        if(!user) 
        {
            return res.json({success:false, msg: "User not found"})
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
             if(err) throw err;
             if(isMatch){
                const token = jwt.sign({data: user}, config.secret, {
                    expiresIn: 604800
                   });
                
                //return everything except the password
                res.json({ success: true, token: 'JWT ' + token, 
                user: {
                    id: user._id,
                    name: user.name,
                    username: user.username,
                    email: user.email
                }
                });
             }
             //if no match
             else
             {
                return res.json({success:false, msg: "Wrong password"});
             }
        });
    })
});

//passing passport authenticate protects the route!
router.get('/profile', passport.authenticate('jwt',{session:false}), (req, res, next) => {
    res.json({user: req.user})
});

module.exports = router;