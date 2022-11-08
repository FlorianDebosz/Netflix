const { addToLikedMovies, getLikedMovies, removeMovies } = require("../controllers/UserController");

const router = require("express").Router();

router.post("/add", addToLikedMovies);
router.get("/liked/:email", getLikedMovies);
router.put("/delete",removeMovies);
module.exports = router;