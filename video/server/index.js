
//var  isAuthenticated  = require('../database/autentication.js')

var app = require('express')();

var path = require('path')
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(4000, ()=>console.log('dfd'));
var users = {}
// app.use(bodyParser.json());
// app.use(express.static('build'));
io.on('connection', socket => {
    console.log("User  conncetd ")
    
    socket.on("userName", function (data)  {

        console.log('data' + data.name, data.pp ) 
        // if (isAuthenticated(data.name,data.password)){
        //     console.log( "correct user ")
            // get socket id  from database 
            // const socket = authorized('df') this returns the socket id 

            // add to the online socket user pool  const 
            //userInfo{userName : david234 socketId: fdijrfijwufwbeufbns}
       // }
                //         if (!users[data.userName]) {
                //     users[data.userName] = socket.id
                //     console.log('socketusers' + users)
                //     console.log('user ' + users[data.userName])
                //     console.log('username  ' + data.userName)

                // }
        })
   
    // socket.emit("yourID", socket.id);
    // socket.emit("allUsers", users);
    // socket.on('disconnect', () => {
    //     delete users[socket.id];
    // })
})
    


//server.listen( PORT, () => `listeing on port ${ PORT}`)