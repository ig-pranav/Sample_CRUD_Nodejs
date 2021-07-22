var express = require('express');
const { create } = require('../model/details');
var router = express.Router();
var Details = require("../model/details")

/* GET home page. */
router.get('/', function(req, res, next) {
  Details.find({}, function(err,data){
    if (err){
      console.log(err);
    } else {
      res.render('index',{data:data});
    }
  });
});
// create
router.post('/create', function(req, res, next) {
  var name = req.body.name;
  var phoneNumber = req.body.phoneNumber;
  var newDetails = {
    name : name,
    phoneNumber : phoneNumber
  }
  Details.create(newDetails, function(err,data){
    if(err) {
      console.log(err);
    } else {
      console.log(data);
      res.redirect('/');
    }
  });
});
// create

//edit page
router.get('/edit/:id', function(req, res){
  Details.findById(req.params.id, function(err,data){
    if (err){
      console.log(err);
    } else {
      res.render('edit',{data: data});
    }
  });
});
//edit page
//update
router.post('/update/:id', function(req, res){
  var name = req.body.name;
  var phoneNumber = req.body.phoneNumber;
  var newDetails = {
    name : name,
    phoneNumber : phoneNumber
  }
  Details.findByIdAndUpdate(req.params.id,newDetails, function(err,data){
    if (err){
      console.log(err);
    } else {
      console.log(data);
      res.redirect('/');
    }
  });
});
//update

//delete
router.post('/delete', function(req, res){
  var id = req.body.id;
  Details.findByIdAndDelete({_id : id}, function(err){
    if(err){
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});
//delete
module.exports = router;
