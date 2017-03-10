var express = require('express');
var Bear = require('../models/bears');

var router = express.Router();

router.use(function(req, res, next){
  console.log('Running the express router');
  next();
});

router.route('/bears')
  .get(function(req, res){
    Bear.find(function (err, bearData){
      if(err){
        console.log("You are stupid");
      } else{
        res.json(bearData);
      }
    });
  })
  .post(function (req, res){
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

router.route('bears/:bear_id')
  .get(function (req, res) {
    var bear_id = req.params.bear_id;
    Bear.findById(bear_id, function(err, bearData){
      if (err){
        console.log("Your bears suck, specifically," + bear_id)
      }else{
        res.json(bearData);
      }
    });
  })
  .put(function (req, res) {
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
  })
  .delete(function (req, res) {
    var bear_id = req.params.bear_id;
    Bear.remove({_id: bear_id}, function(err, bear) {
      if (err) {
        console.log(err);
      } else {
        res.json({message: "bear removed"});
      }
    });
  });
module.exports = router;
