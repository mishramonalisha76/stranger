var express = require('express');
var router = express.Router();
var c=0;
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


router.post('/homepage',function(req,res){
  res.redirect('/login');

});
router.get('/homepage' ,function(req,res){
  res.render('page');
})
router.post('/login',function(req,res){
  
  
  if(c%2==0)
  {
  var user1=req.body.username;
  res.redirect('/chat');
  console.log(user1);
  console.log("test");
  
  var msg;
  io.on('connection', function(socket) {
    console.log('A user connected');
     
    socket.on('msg', function(msg) {
      //Send message to everyone
      var data=user1+':'+msg;
       
      io.sockets.emit('newmsg', data);
   })
  });
  c++;
    }
  else
  {
  var user2=req.body.username;
  res.redirect('/chat');
  console.log(user2);
console.log("test");

var msg;
io.on('connection', function(socket) {
  console.log('A user connected');
   
  socket.on('msg', function(msg) {
    //Send message to everyone
    var data=user2+':'+msg;
     
    io.sockets.emit('newmsg', data);
 })
});
c++;
  }

});
module.exports = router;
