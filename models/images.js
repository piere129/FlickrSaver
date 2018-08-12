
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

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
    },
    user: { type: Schema.Types.ObjectId, ref: 'User'}
});

const Image = module.exports = mongoose.model('Image',ImageSchema);