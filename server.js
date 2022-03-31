require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT ?? 2000;

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
