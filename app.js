//importing modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var config = require('./config/database');
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
app.use('/users', users)

//port no
const port = 3000;

//connection to mongodb
mongoose.connect(config.database, {useNewUrlParser:true});
mongoose.connection.on('connected', ()=>{
    console.log('Connected to database mongodb @ 27017');
})
mongoose.connection.on('error', (err)=>{
    if(err)
    {
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
app.use(express.static(path.join(__dirname,'public')));

//testing server
app.get('/',(req,res) => {
    res.send('test');
})


app.listen(port, () => {
    console.log('server started at port ' + port);
})