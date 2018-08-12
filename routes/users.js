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
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        images: []
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

    User.getUsers( (err, users) => {
        res.json(users);
    })
});

//get 1 user 
router.get('/user',(req,res,next) => {
    const username = req.body.username;

    User.getUserByUsername(username, (err,user) => {
        if(err) throw err;
        if(!user) 
        {
            return res.json({success:false, msg: "User not found"})
        }
        res.json({ success: true,
                user: {
                    id: user._id,
                    name: user.name,
                    username: user.username,
                    email: user.email, 
                    images: user.images
                }
                });

    })
})


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
                    email: user.email, 
                    images: user.images
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
//must add authorization header in the service, calling the api call!
router.get('/profile', passport.authenticate('jwt',{session:false}), (req, res, next) => {
    res.json({user: req.user})
});

module.exports = router;