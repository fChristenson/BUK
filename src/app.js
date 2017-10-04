const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public"), { maxAge: "1y" }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/meetups", (req, res) => {
  res.render("meetups");
});

app.get("/burgers", (req, res) => {
  res.render("burgers");
});

app.get("/members", (req, res) => {
  res.render("members");
});

app.get("/structure", (req, res) => {
  res.render("structure");
});

app.get("/rules", (req, res) => {
  res.render("rules");
});

module.exports = app;
