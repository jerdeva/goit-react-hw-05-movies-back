const express = require("express");

const movies = require("../../films/films.json");
const credits = require("../../cast/cast.json");
const reviews = require("../../reviews/reviews.json");

const filmsRouter = express.Router();


filmsRouter.get("/", (req, res) => {
  res.send(movies);
});

filmsRouter.get("/:movieId", (req, res) => {
  const { movieId } = req.params;
  const movie = movies.find((m) => m.id === parseInt(movieId));

  if (!movie) {
    return res.status(404).send({ error: "Movie not found" });
  }

  res.json(movie);
});

filmsRouter.get("/:movieId/credits", (req, res) => {
  const { movieId } = req.params;
  const credit = credits.filter((c) => c.id === parseInt(movieId));

  if (!credit) {
    return res.status(404).send({ error: "Credits not found" });
  }

  res.json(credit);
});

filmsRouter.get("/:movieId/reviews", (req, res) => {
  const { movieId } = req.params;
  const review = reviews.filter((r) => r.id === parseInt(movieId));

  if (!review) {
    return res.status(404).send({ error: "Reviews not found" });
  }

  res.json(review);
});

// app.get("*", (req, res) => {
//   res.redirect("/movies");
// });

filmsRouter.use((req, res) => {
  res.status(404).json({
    message: "Not Found",
  });
});


module.exports = filmsRouter ;