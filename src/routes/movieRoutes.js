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

// router.post("/", createMovie);
router.get("/", getAllMovies);
router.get("/:id", getMovieById);
// router.put("/:id", updateMovie);
// router.delete("/:id", deleteMovie);

module.exports = router;
