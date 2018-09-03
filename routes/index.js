var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/' ,function(req,res){
  res.redirect('home');
})
router.get('/chat' ,function(req,res){
  res.render('chatbox');
})
router.get('/home',function(req,res){
  res.render('index');
});
router.post('/home',function(req,res){
  res.redirect('chat');
})
module.exports = router;
