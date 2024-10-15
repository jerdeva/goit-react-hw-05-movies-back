const express = require("express");

const filmsRouter = express.Router();

const filmController = require("../../controllers/film-controller.js")


filmsRouter.get("/", filmController.filmsList);
filmsRouter.get("/:movieId", filmController.getFilmsId);
filmsRouter.get("/:movieId/credits", filmController.getMovieCredits);
filmsRouter.get("/:movieId/reviews", filmController.getMovieReviews);
filmsRouter.use((req, res) => {
  res.status(404).json({
    message: "Not Found",
  });
});


module.exports = filmsRouter ;