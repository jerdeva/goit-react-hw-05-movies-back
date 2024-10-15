const app = require("./app.js");
const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://OlenaJ:F9q7i89IIwfpttBN@cluster0.5xrft.mongodb.net/my-movies?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch(() => {
    console.log(error.message)
    process.exit(1)
  });



//Paasword MongoDB F9q7i89IIwfpttBN
//Login OlenaJ
