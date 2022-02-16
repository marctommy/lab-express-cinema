const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model"); // file path
/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res) => {
  // url in the browser "/"
  Movie.find()
    .then((allMovies) => {
      //   res.send(allBooks);
      res.render("movies/movie", { movies: allMovies }); // rendering the hbs "no /"
    })
    .catch((error) => console.log(error));
});

router.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  Movie.findById(id)
    .then((result) => {
      console.log(result);
      res.render("movies/movie-details", { movie: result });
    })
    .catch((error) => console.log(error));
});

module.exports = router;
