const express = require("express");
const router = express.Router();
const getcontroller = require("../controllers/getcontroller.js");

router.get("/getwine", getcontroller.GetAllWines);
router.get("/getFood", getcontroller.GetAllFoods);
router.get("/getShisha", getcontroller.GetAllshisha);
module.exports = router;
