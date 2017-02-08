//Require the dependencies

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
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


app.listen(3000);

console.log('Server started on port 3000')
