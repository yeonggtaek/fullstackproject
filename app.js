require("dotenv").config();

const path = require("path");
const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const router = require("./src/route");
const apiRouter = require("./src/api");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(expressEjsLayouts);
app.set("layout extractScripts", true);
app.use("/", router);
app.use("/api", apiRouter);
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
