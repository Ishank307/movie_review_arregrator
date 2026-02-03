const express = require("express");
const router = express.Router();

router.post("/movies/:movieId/reviews", (req, res) => {
  res.send("Add review to movie");
});

router.get("/movies/:movieId/reviews", (req, res) => {
  res.send("Get reviews for movie");
});

router.delete("/reviews/:reviewId", (req, res) => {
  res.send("Delete review");
});

module.exports = router;
