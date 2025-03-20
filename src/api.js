const express = require("express");
const router = express.Router();
const { insertData } = require("./repository");

router.post("/diary", async (req, res) => {
  const { date, content } = req.body;
  console.log("date:", date);
  const result = await insertData(date, content);
  console.log("result:", result);
  res.json({ name: "lee", age: 20 });
});

module.exports = router;
