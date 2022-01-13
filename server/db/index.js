const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/crypto", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    console.log("Connection Error", e.message);
  });

const db = mongoose.connection;
module.exports = db;
