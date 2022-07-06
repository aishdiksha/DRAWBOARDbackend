const mongoose = require("mongoose");

const url =
  "mongodb+srv://aishwarya:aish1116@cluster0.bt0xa.mongodb.net/mernwss300?retryWrites=true&w=majority";

// Asynchronous
//  it will return a promise
mongoose
  .connect(url)
  .then(() => {
    console.log("database connected");
  })
  .catch((e) => {
    console.error(e);
  });
module.exports = mongoose;