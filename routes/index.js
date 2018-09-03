var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/chat' ,function(req,res){
  res.render('chatbox');
})
router.get('/home',function(req,res){
  res.render('index');
});
module.exports = router;
