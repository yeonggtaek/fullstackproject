const express = require("express");
const router = express.Router();
const { getData } = require("./repository");
const { makeCalendarData } = require("./service");

router.get("/", async (req, res) => {
  const data = makeCalendarData(new Date());
  res.render("index", { data });
});

router.get("/calendar", (req, res) => {
  const calendarData = makeCalendarData(new Date());
  res.render("calendar", calendarData); 
});

module.exports = router;
