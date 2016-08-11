// io.js

var io = require('socket.io')();

// object to hold player's initials as keys
var players = {};


// Listen for new connections from clients (socket)
io.on('connection', function (socket) {
  console.log('Client connected to socket.io!');
  socket.on('add-circle', function (data) {
      io.emit('add-circle', data);

  });
  socket.on('clear', function (data) {
      io.emit('clear', data);

  });
  socket.on('register-player', function (data) {
       // assigning true is arbitrary
       // we just need to create a key
       players[data.initials] = true;
       socket.initials = data.initials;
       io.emit(
           'update-player-list',
           Object.keys(players)
      );
   });

   socket.on('disconnect', function (data) {
       delete players[socket.initials];
       io.emit(
           'update-player-list',
           Object.keys(players)
       );

});
});
// io represents socket.io on the server - let's export it
module.exports = io;
