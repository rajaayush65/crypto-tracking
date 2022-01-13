const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./db");
const cryptoRouter = require("./routes/crypto-router")

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//app.use(bodyParser());

db.on("error",console.error.bind(console,"MongoDB Connection Error: "))

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api",cryptoRouter);

app.listen(PORT, () => {
  console.log(`Server Started On http://localhost:${PORT}`);
});
