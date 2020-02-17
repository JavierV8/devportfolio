const mongoose = require("mongoose");

module.exports = function () {
  const db = "mongodb://localhost/vidly";
  mongoose
    .connect(db, { useCreateIndex: true, useNewUrlParser: true })
    .then(() => console.log("MongoDB is conected!"));
};
