const express = require("express");
const router = express.Router();

const {
  addReview,
  getReviewsByMovie,
  deleteReview,
  updateReview,
} = require("../controllers/reviewController");

const protect = require("../middlewares/authMiddleware");

router.post("/movies/:movieId/reviews", protect, addReview);
router.delete("/reviews/:reviewId", protect, deleteReview);
router.put("/reviews/:reviewId", protect, updateReview);
router.get("/movies/:movieId/reviews", getReviewsByMovie);

module.exports = router;
