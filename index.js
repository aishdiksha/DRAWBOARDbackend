const express = require("express");
const app = express();
const userRouter = require("./routers/userRouter");
const{createServer}=require('http');
const { Server }=require('socket.io');
const httpServer = createServer(app);
const io= new Server(httpServer,{cors:{
  origin:['http://localhost:3000']
}});
//update send for event send 
//update rcieving for event recieve
io.on('connection', (socket) => {
  console.log("client connected");
  //do all operation after connection here
  socket.on('sendmsg',(msg)=>{
    console.log(msg);
    socket.broadcast.emit('recmsg',msg);
  });
});

const port = 5000;
//for reading json data
app.use(express.json());

app.use("/user", userRouter);

// creating a endpoint for '/'
app.get("/", (req, res) => {
  // for the server
  console.log("reqest on /");

  // for the client
  res.send("Request processed on /");
});

app.get("/home", (req, res) => {
  // for the server
  console.log("reqest on /home");

  // for the client
  res.send("Request processed on /home");
});

app.get("/add", (req, res) => {
  // for the server
  console.log("reqest on /add");

  // for the client
  res.send("Request processed on /add");
});

httpServer.listen(port, () => {
  console.log("Server started");
});