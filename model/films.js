const fs = require("fs").promises;
const path = require("path");

const filmsPath = path.join(__dirname, "./films/films.json");
const creditPath = path.join(__dirname, "./cast/cast.json");
const reviewsPath = path.join(__dirname, "./reviews/reviews.json");

const filmsList = async() => {
  try {
    const data = await fs.readFile(filmsPath, "utf-8");
    const films = JSON.parse(data);
    return films;
  } catch (error) {
    throw error;
  }
}

const creditList = async() => {
  try {
    const data = await fs.readFile(creditPath, "utf-8");
    const credits = JSON.parse(data);
    return credits;
  } catch (error) {
    throw error;
  }
}

const getFilmsId =  async(filmsId) => {
  try {
    const id = String(filmsId);
    const films = await filmsList();
    const film = films.find((film) => film.id === id);
    return film || null;
  } catch (error) {
    throw error;
  }
}

const getFilmsByName = async(title) => {
  try {
    const name = String(title);
    const films = await filmsList();
    const film = films.find((film) => film.title === name);
    return film || null;
  } catch (error) {
    throw error;
  }
}

const getMovieCredits = async(movieId)=> {
  try {
    const id = Number(movieId);

    const credits = await creditList();

    const credit = credits.find((credit) => credit.id === id);

    if (!credit) {
      console.log("Акторов не найдено для данного ID.");
      return null;
    }

    const castMembers = credit.cast;

    return castMembers;
  } catch (error) {
    console.error("Ошибка:", error);
    throw error;
  }
}

  const getMovieReviews = async(movieId) => {
  try {
    const id = Number(movieId);

    const data = await fs.readFile(reviewsPath, "utf8");
    const reviews = JSON.parse(data);

    const review = reviews.find((review) => review.id === id);

    if (!review) {
      console.log("Рецензия не найдена для данного ID.");
      return null;
    }

    const reviewItem = review.results;
    return reviewItem;
  } catch (error) {
    console.error("Ошибка:", error);
    throw error;
  }
}




module.exports = {
  filmsList,
  getFilmsId,
  getFilmsByName,
  getMovieCredits,
  getMovieReviews,
};
