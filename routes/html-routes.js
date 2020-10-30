const path = require("path");
const router = require("express").Router();
const Workout = require("../models/workout.js");


//HTML front end routes for rendering the pages

router.get("/", function (req,res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
router.get("/exercise", function (req,res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
router.get("/stats", function (req,res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});
module.exports = router;