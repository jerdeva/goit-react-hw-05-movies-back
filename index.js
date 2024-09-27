const yargs = require("yargs");
const films = require("./films");
const argv = require("yargs").argv;

async function invokeAction({action, id}) {
    switch (action) {
      case "list":
        const filmsList = await films.filmsList();
         console.log(filmsList);
        break;

      case "get":
        const getFilm = await films.getFilmsId(id);
         console.log(getFilm);
        break;

      default:
        console.warn("\x1B[31m Unknown action type!");
    }
}


invokeAction(argv);
