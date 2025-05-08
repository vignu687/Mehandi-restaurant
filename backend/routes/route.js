const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller.js");

router.get("/wine", controller.WineInsert);

module.exports = router;
