const express = require("express");
const { getData } = require("./db");
const app = express();
const port = 3000;
require("dotenv").config();

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const data = await getData();
  res.render("index", { data });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
