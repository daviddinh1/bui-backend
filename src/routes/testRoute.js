const express = require("express");
const testRoute = express.Router();

testRoute.get("/", (req, res) => {
  res.send("test route is working");
});

module.exports = testRoute;
