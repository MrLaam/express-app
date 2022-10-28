const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const DogSchema = new Schema({
    name: String,
    species: String,
    age: Number,
  });

module.exports = DogSchema