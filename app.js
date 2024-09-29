const express = require("express");
const cors = require("cors");

const filmsRouter = require("./routes/api/films-routes.js");

const app = express();

app.use(cors());

app.use("/movies", filmsRouter);


app.listen(3000, () => console.log("Server running on 3000 port"))