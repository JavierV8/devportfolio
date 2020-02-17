const express = require('express');
const users = require('../routes/users');
const auth = require('../routes/auth');
const portafolio = require('../routes/portafolio');
const admin = require('../routes/admin');
const error = require('../middleware/error');
const contact = require('../routes/contact');
var cors = require('cors');

module.exports = function (app) {
  app.use(cors());
  app.use(express.json());
  app.use('/api/users', users);
  app.use('/api/auth', auth);
  app.use('/api/portafolio', portafolio);
  app.use('/api/admin', admin);
  app.use('/api/contact', contact);
  app.use(error);
}