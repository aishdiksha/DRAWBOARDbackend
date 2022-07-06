const express = require("express");
const app = express();
const userRouter = require("./routers/userRouter");

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:3000","http://192.168.2.172:3000"],
  },
});

// receiving event
io.on("connection", (socket) => {
  console.log("client connected");

  //  do all operation after connection here
  socket.on("sendmsg", (msg) => {
    console.log(msg);
    msg.sent = false;
    socket.broadcast.emit("recmsg", msg);
  });
});

const port = 5000;

// for reading JSON data
app.use(express.json());

app.use("/user", userRouter);

// creating a endpoint for '/'
app.get("/", (req, res) => {
  // for the server
  console.log("request on /");
  // for the client
  res.send("Request processed on /");
});

app.get("/home", (req, res) => {
  // for the server
  console.log("request on /home");
  // for the client
  res.send("Request processed on /home");
});

app.get("/add", (req, res) => {
  // for the server
  console.log("request on /add");
  // for the client
  res.send("Request processed on /add");
});

httpServer.listen(port, () => {
  console.log("server started");
});

//  swiper library
// cors = creater origin resource server
