
const Joi = require('joi');
const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  image: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  tools: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    minlength: 0,
    maxlength: 2048
  },
  url: {
    type: String,
    required: true,
    minlength: 0,
    maxlength: 2048
  }
});

const Portafolio = mongoose.model('Portfolio', portfolioSchema);

function validate(Portafolio) {
  const schema = {
    title: Joi.string().min(5).max(50).required(),
    image: Joi.string().min(5).max(50).required(),
    tools: Joi.string().min(5).max(100).required(),
    description: Joi.string().min(0).max(2048).required(),
    url: Joi.string().min(0).max(2048).required()
  };
  return Joi.validate(Portafolio, schema);
}

exports.Portafolio = Portafolio;
exports.validate = validate;
