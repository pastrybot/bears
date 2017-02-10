//Require the dependencies

var express = require('express');
var bodyParser = require('body-parser');
var Bear = require('./models/bears')
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/animals');
//lets us read post data
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send("Hola Mundo, yo soy Sharknado!");

});

app.get('/api/greeting', function (req, res) {
  res.send('hello, welcome to the greeting API');
});

app.post('/api/greeting', function(req, res){
  var name = req.body.name;
  var greeting = req.body.greeting;
  res.json({name: name, greeting: greeting});
});
app.get('/api/greeting/:name', function(req, res){
  res.send("Hello, " + req.params.name);
});
app.post('/api/bears', function (req, res){
  var bear = new Bear()
  bear.species = req.body.species;
  bear.age = req.body.age;
  bear.name = req.body.name;
  bear.weight = req.body.weight;
  bear.location = req.body.location;
  bear.attitude = req.body.attitude;
  bear.save(function (err, bearData){
    if (err){
      console.log("an error occurred in saving the bear")
    } else {

    res.json(bearData);
  }
});
});
app.get('/api/bears', function (req, res) {
  Bear.find(function (err, bearData){
    if(err){
      console.log("You are stupid");
    } else{
      res.json(bearData);
    }

  });

});
app.get('/api/bears/:bear_id', function (req, res){
  var bear_id = req.params.bear_id;
  Bear.findById(bear_id, function(err, bearData){
    if (err){
      console.log("Your bears suck, specifically," + bear_id)
    }else{
      res.json(bearData);

    }
  });

});

app.put('/api/bears/:bear_id', function (req, res) {
  var bear_id = req.params.bear_id;
  Bear.findById(bear_id, function(err, bear) {
    if (err) {
      console.log("Your bears suck, specifically," + bear_id);
    } else {
      console.log(req.body);
      console.log(bear);
      bear.species = req.body.species ? req.body.species : bear.species;
      bear.age = req.body.age ? req.body.age : bear.age;
      bear.name = req.body.name ? req.body.name : bear.name;
      bear.weight = req.body.weight ? req.body.weight : bear.weight;
      bear.location = req.body.location? req.body.location : bear.location;
      bear.attitude = req.body.attitude ? req.body.attitude : bear.attitude;
      bear.save(function (err, data){
        if(err){
          console.log(err);
        } else {
          res.json(data);
        }
      });
    }
  });
});
app.delete('/api/bears/:bear_id', function (req, res) {
  var bear_id = req.params.bear_id;
  Bear.remove({_id: bear_id}, function(err, bear) {
    if (err) {
      console.log(err);
    } else {
    res.json({message: "bear removed"});
  }
});

});

app.listen(3000);

console.log('Server started on port 3000')
