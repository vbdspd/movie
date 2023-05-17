var express = require('express');
var router = express.Router();

var fs=require('fs')


/* GET home page. */
router.get('/', function(req, res, next) {
 fs.readFile('./public/index',function(err,data){
  if(err){
    console.log(err)
  }
  else{
    res.send(data)
  }
 })
});

module.exports = router;
