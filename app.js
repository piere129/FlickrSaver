//importing modules
var dotenv = require('dotenv').config()
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var passport = require('passport');
var app = express();

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

//initialise static files in public
app.use(express.static(path.join(__dirname, 'frontend/dist/frontend')));


app.all('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'frontend/dist/frontend/index.html'));
});

app.listen(process.env.PORT || 3000);