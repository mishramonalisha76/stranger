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

router.post('/login',function(req,res){
  res.redirect('/chat');

});
router.post('/homepage',function(req,res){
  res.redirect('/login');

});
router.get('/homepage' ,function(req,res){
  res.render('page');
})


io.on('connection', function(socket) {
  console.log('A user connected');
   
  socket.on('msg', function(data) {
    //Send message to everyone
    io.sockets.emit('newmsg', data);
 })

});
module.exports = router;
