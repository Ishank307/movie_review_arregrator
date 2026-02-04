const express = require("express");
const router = express.Router();

const {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
} = require("../controllers/moviecontroller");

const protect = require("../middlewares/authMiddleware");

router.post("/", protect, createMovie);
router.put("/:id", protect, updateMovie);
router.delete("/:id", protect, deleteMovie);
router.get("/", getAllMovies);
router.get("/:id", getMovieById);

module.exports = router;
