const movies = require("../model/films.js");

const filmsList = async (req, res, next) => {
  try {
    const result = await movies.filmsList();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const creditList = async () => {
  try {
    const result = await movies.creditList();
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getFilmsId = async (req, res, next) => {
  try {
    const { movieId } = req.params;
    const result = await movies.getFilmsId(movieId);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getFilmsByName = async (title) => {
  try {
    const { name } = req.params;
    const result = await movies.getFilmsByName(name);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getMovieCredits = async (req, res, next) => {
  try {
    const { movieId } = req.params;
    const result = await movies.getMovieCredits(movieId);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getMovieReviews = async (req, res, next) => {
  try {
    const { movieId } = req.params;
    const result = await movies.getMovieReviews(movieId);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  filmsList,
  creditList,
  getFilmsId,
  getFilmsByName,
  getMovieCredits,
  getMovieReviews,
};
