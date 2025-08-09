const express = require("express");
const testRoute = require("./testRoute");
const router = express.Router();
//use this file to mount the main filepath to the routes
//this mounts the route to the route you created in testRoute
router.use("/testRoute", testRoute);

module.exports = router;
