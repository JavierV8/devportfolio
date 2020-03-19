const mongoose = require("mongoose");
const config = require('config');

module.exports = function () {
  const db = config.get('db');
  const URI = db + "&w=majority";
  mongoose
    .connect(URI, { useCreateIndex: true, useNewUrlParser: true })
    .then(() => console.log("MongoDB is conected!"));
};
