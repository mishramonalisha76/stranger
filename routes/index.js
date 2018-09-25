var express = require('express');
var router = express.Router();

var io = require('socket.io').listen(3001, {log: false});
/* GET home page. */
router.get('/' ,function(req,res){
  res.redirect('home');
});
router.get('/login' ,function(req,res){
  res.render('login');
})
router.get('/chat' ,function(req,res){
  res.render('chatbox');
})
router.get('/home',function(req,res){
  res.render('index');
})
router.post('/home',function(req,res){
  res.redirect('chat');

});
router.get('/homepage' ,function(req,res){
  res.render('page');
})
users=[];

io.on('connection', function(socket) {
  console.log('A user connected');
  socket.on('setUsername', function(data) {
     res.write(data);

    })
  });
module.exports = router;
