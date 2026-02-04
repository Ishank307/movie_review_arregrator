const express = require("express");
const router = express.Router();

const {
  addReview,
  getReviewsByMovie,
  deleteReview,
} = require("../controllers/reviewController");

const protect = require("../middlewares/authMiddleware");

router.post("/movies/:movieId/reviews", protect, addReview);
router.delete("/reviews/:reviewId", protect, deleteReview);


// router.post("/movies/:movieId/reviews", addReview);
router.get("/movies/:movieId/reviews", getReviewsByMovie);
// router.delete("/reviews/:reviewId", deleteReview);

module.exports = router;
