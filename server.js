//Require the dependencies

var express = require('express');
var bodyParser = require('body-parser');
var Bear = require('./models/bears')
var bearRouter = require('./routes/bears')
var app = express();
// use the EJS templates to make user interface
app.set('view engine', 'ejs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/animals');
//lets us read post data
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());
//serve our static html, css, js
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index', {welcome:"Hola Mundo, yo soy Sharknado!"});

});

app.get('/loop', function (req, res) {
    res.render('loop', {welcome:"Hola Mundo, yo soy Sharknado!", num: 50});
  });



app.get('/bears', function(req, res){
    Bear.find(function (err, bears){
      if(err){
        console.log("You are stupid");
      } else{
        res.render('bears', {welcome: "Welcome to The World of Bears", bears: bears})
        }
      });


  });




app.use('/api', bearRouter);

app.listen(3001);

console.log('Server started on port 3000')
