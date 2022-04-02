const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const holidaySchema = new Schema({
  name: String, // String is shorthand for {type: String}
  description: String,
  likes: Number,
  celebrated: Boolean,
});

const Holiday = mongoose.model("Holiday", holidaySchema);

//make this exportable to be accessed in `app.js`
module.exports = Holiday;
