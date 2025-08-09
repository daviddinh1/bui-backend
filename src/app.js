const express = require("express");
const routes = require("./routes/index");
const app = express();

// Core middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

module.exports = app;
