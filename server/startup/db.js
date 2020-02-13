const mongoose = require("mongoose");
const config = require("config");

module.exports = function() {
  //const db = "";//config.get('db');
  const db = "mongodb://localhost/portfolio";
  mongoose
    .connect(db, { useCreateIndex: true, useNewUrlParser: true })
    .then(() => console.log("conectado"));
};
