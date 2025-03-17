const path = require("path");
const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

const router = require("./src/route");
require("dotenv").config();

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(expressEjsLayouts);
app.set("layout extractScripts", true);
app.use("/", router);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
