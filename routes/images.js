const express = require('express');
const router = express.Router();
const passport = require('passport');

const Image = require('../models/images');

//retrieving data
router.get('/:userid/images', (req,res,next) => {

    Image.find({user:req.params.userid}, (err, images) => {
        res.json(images);
    })
});

router.get('/:userid/image/:id', (req,res,next) => {

    Image.findOne({
        _id: req.params.id,
        user: req.params.userid
    }, (err, images) => {
        res.json(images);
    });
});

//add image
router.post('/:userid/image',(req,res,next) => {

    console.log(req.body);
    let newImage = new Image({
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        user: req.params.userid
    });


    newImage.save((err, image)=> {
        if(err)
        {
            res.json("Failed to send image");
        }
        else
        {
            res.json("Image added"); 
        }
    })
});


//delete image
router.delete('/image/:id',(req,res,next) => {
    //logic
    Image.remove({
        _id: req.params.id,
    }, (err, result) => {
        if(err)
        {
            res.json(err);
        }
        else {
            res.json(result);   
        }
    })
});

//edit data

module.exports = router;