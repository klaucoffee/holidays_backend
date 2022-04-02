const mongoose = require("mongoose");
const { Schema } = mongoose;

const holidaySchema = mongoose.Schema({
  name: { type: String, required: true },
  celebrated: { type: Boolean, default: false },
  description: { type: String, default: "Best holiday ever!" },
  likes: { type: Number, default: 0 },
  tags: [{ type: String }],
});

const Holiday = mongoose.model("Holiday", holidaySchema);

module.exports = Holiday;
