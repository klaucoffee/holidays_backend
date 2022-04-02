const express = require("express");
const Holiday = require("../models/holiday.js");
const router = express.Router();

router.get("/seed", async (req, res) => {
  const holidays = [
    {
      name: "New Year's Day",
    },
    {
      name: "Good Friday",
    },
  ];
  await Holiday.deleteMany({});
  await Holiday.insertMany(holidays);
  res.json(holidays);
});

router.get("/", (req, res) => {
  res.send("holidays");
});

//* Create Route
router.post("/", async (req, res) => {
  try {
    const createdHoliday = await Holiday.create(req.body);
    res.status(200).send(createdHoliday);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
