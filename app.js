//importing modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

//bodyparser
app.use(bodyparser.urlencoded({
    extended: true
  }));

  app.use(bodyparser.json())


const route = require('./routes/route');

//routing with /api uses routes defined in route.js
app.use('/api', route);

//port no
const port = 3000;

//connection to mongodb
mongoose.connect('mongodb://localhost:27017/webapps-database', {useNewUrlParser:true});
mongoose.connection.on('connected', ()=>{
    console.log('Connected to database mongodb @ 27017');
})
mongoose.connection.on('error', (err)=>{
    if(err)
    {
        console.log("Error in database" + err);
    }
})

//adding middleware
app.use(cors());


//initialise static files in public
app.use(express.static(path.join(__dirname,'public')));

//testing server
app.get('/',(req,res) => {
    res.send('test');
})


app.listen(port, () => {
    console.log('server started at port ' + port);
})