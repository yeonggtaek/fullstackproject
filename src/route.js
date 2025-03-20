const express = require("express");
const router = express.Router();
const { getData } = require("./repository");
const { makeCalendarData } = require("./service");

router.get("/", async (req, res) => {
  const data = await makeCalendarData(new Date());
  res.render("index", { data });
});

module.exports = router;
