require("dotenv").config();
const express = require("express");
const Holiday = require("./models/Holiday"); //reading from Models
const HolidayController = require("./controllers/holidayController"); //reading from Controllers

const app = express();
const PORT = process.env.PORT ?? 2000;

//MONGOOSE CONNECTION
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI; // "mongodb://localhost:27017/holidays";

//...farther down the page

// Error / Disconnection
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

//...farther down the page

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

//MIDDLEWARE
app.use("/api/holidays", HolidayController);

app.get("/", (req, res) => {
  res.send("Hi 2");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
