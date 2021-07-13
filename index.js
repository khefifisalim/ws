const express = require("express");
const app = express();
const connectDB = require("./DB/connectDB");

connectDB();

const port = process.env.PORT || 5000;

app.listen(port, (err) =>
  err
    ? console.log("error", err)
    : console.log(`server is runnig on port ${port}`)
);
