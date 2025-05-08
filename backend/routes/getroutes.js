const express = require("express");
const router = express.Router();
const getcontroller = require("../controllers/getcontroller.js");

router.get("/getwine", getcontroller.GetAllWines);

module.exports = router;
