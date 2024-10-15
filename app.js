const express = require("express");
const cors = require("cors");
const logger = require("morgan")
const filmsRouter = require("./routes/api/films-routes.js");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatsLogger));


app.use(cors());

app.use("/movies", filmsRouter);


module.exports = app;