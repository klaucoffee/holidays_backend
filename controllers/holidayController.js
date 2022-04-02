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

//* Index Route - this gets the data from the form
router.get("/", (req, res) => {
  Holiday.find()
    .then((holidays) => {
      res.json(holidays);
    })
    .catch((err) => {
      res.json(err);
    });
});

//* Create Route - this posts the data onto the /api/holidays page
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const createdHoliday = await Holiday.create(req.body);
    res.status(200).send(createdHoliday);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
