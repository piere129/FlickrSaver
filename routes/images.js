const express = require('express');
const router = express.Router();
const passport = require('passport');

const Image = require('../models/images');

//retrieving data
router.get('/:userid/images', (req, res, next) => {

    Image.find({
        user: req.params.userid
    }, (err, images) => {
        res.json(images);
    })
});

router.get('/:userid/image/:id', (req, res, next) => {

    Image.findOne({
        _id: req.params.id,
        user: req.params.userid
    }, (err, images) => {
        res.json(images);
    });
});

//add image
router.post('/:userid/image', passport.authenticate('jwt', {
    session: false
}), (req, res, next) => {

    let newImage = new Image({
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        user: req.params.userid
    });


    newImage.save((err, image) => {
        if (err) {
            res.json("Failed to send image");
        } else {
            res.json("Image added");
        }
    })
});

//add image
router.put('/:userid/image', passport.authenticate('jwt', {
    session: false
}), (req, res, next) => {

    let updatedImage = new Image({
        _id: req.body._id,
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        user: req.params.userid
    });

    console.log(updatedImage);

    Image.findByIdAndUpdate(req.body._id, updatedImage, {
        new: true
    }, (err, image) => {
        if (err) {
            res.json("Failed to update image");
        } else {
            res.json("Image updated");
        }
    })
});


//delete image
router.delete('/image/:id', passport.authenticate('jwt', {
    session: false
}), (req, res, next) => {
    //logic
    Image.remove({
        _id: req.params.id,
    }, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

//edit data

module.exports = router;