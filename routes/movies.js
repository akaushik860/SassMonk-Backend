// Filename: admin/quizRoute.js
const express = require("express");
const router = express.Router();
const MovieController = require("../controllers/movieController");

router.post("/saveMovie", MovieController.saveMovie);
router.post("/getMovies", MovieController.findMovies);

module.exports = router;