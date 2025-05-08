const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller.js");

router.post("/wine", controller.WineInsert);
router.post("/shisha", controller.shisha_insert);
router.post("/food", controller.food_insert);

module.exports = router;
