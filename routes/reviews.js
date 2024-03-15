// Filename: admin/quizRoute.js
const express = require("express");
const router = express.Router();
const ReviewController = require("../controllers/reviewController");

router.post("/saveReview", ReviewController.saveReview);
router.post("/getReviews", ReviewController.findReviews);

module.exports = router;