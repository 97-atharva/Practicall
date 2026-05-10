const express = require("express");
const mongoose = require("mongoose");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => console.log("MongoDB Connected"));

app.use("/", studentRoutes);

app.listen(3000, () => {
  console.log("Server Started at http://localhost:3000");
});