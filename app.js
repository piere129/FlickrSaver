//importing modules
var dotenv = require('dotenv').config()
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var passport = require('passport');


var app = express();

//initialise static files in public
app.use(express.static(path.join(__dirname, 'public')));

//bodyparser
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(bodyparser.json())

//routing
const apiImage = require('./routes/images');
const users = require('./routes/users');

//routing with /api uses routes defined in route.js
app.use('/api', apiImage);
app.use('/auth', users)

//connection to mongodb
mongoose.connect(process.env.database, {
    useNewUrlParser: true
});
mongoose.connection.on('connected', () => {
    console.log('Connected to database mongodb @ 27017');
})
mongoose.connection.on('error', (err) => {
    if (err) {
        console.log("Error in database" + err);
    }
})

//adding middleware cors
app.use(cors());

//adding middleware passport
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//testing server
app.get('/', (req, res) => {
    res.send('test');
})

app.listen(process.env.PORT || 3000);