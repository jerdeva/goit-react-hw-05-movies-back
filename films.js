const fs = require("fs").promises;
const path = require("path");


const filmsPath = path.join(__dirname, './films/films.json');

async function filmsList() {
    try {
        const data = await fs.readFile(filmsPath, "utf-8");
        const films = JSON.parse(data);
        return films;
    } catch (error) {
        throw error;
    }
}

async function getFilmsId(filmsId) {
    try {
        const id = String(filmsId);
        const films = await filmsList();
        const film = films.find((film) => film.id === id);
        return film || null;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    filmsList,
    getFilmsId
}

