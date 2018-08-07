
const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    title:{
        type:String,
        required: false
    },
    description:{
        type:String,
        required: false
    },
    url:{
        type:String,
        required:false
    }
});

const Image = module.exports = mongoose.model('Image',ImageSchema);