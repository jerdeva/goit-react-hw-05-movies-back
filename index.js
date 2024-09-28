const yargs = require("yargs");
const films = require("./films");
const argv = require("yargs").argv;

async function invokeAction({action, id, title}) {
    switch (action) {
      case "list":
        const filmsList = await films.filmsList();
        console.log(filmsList);
        break;

      case "get":
        const getFilm = await films.getFilmsId(id);
        console.log(getFilm);
        break;

      case "getByName":
        const getFilmByName = await films.getFilmsByName(title);
        console.log(getFilmByName);
        break;

      case "getMovieCredits":
        const getMovieCredits = await films.getMovieCredits(id);
        console.log(getMovieCredits);
        break;

      case "getMovieReviews":
        const getMovieReviews = await films.getMovieReviews(id);
        console.log(getMovieReviews);
        break;

      default:
        console.warn("\x1B[31m Unknown action type!");
    }
}


invokeAction(argv);
