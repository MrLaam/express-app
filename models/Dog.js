const mongoose = require('mongoose')
const DogSchema = require('../schemas/DogSchema')

const Dog = mongoose.model("Dog", DogSchema)

module.exports = Dog