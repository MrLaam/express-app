const express = require('express')
const router = express.Router()
const Dog = require('../models/Dog')
const app = require('../config/express')

// Get all dogs
router.get('/all', async (req, res) => {
    const dogs = await Dog.find({});
    res.json(dogs);
})

// Get dog by name
router.get('/:name', async (req, res) => {
    const dog = await Dog.find({ 'name': req.params.name });
    res.json(dog)
})

// Create dog
router.post('/create', (req, res) => {
    // if (req.body.name === undefined && req.body.species === undefined && req.body.age === undefined) {
    //     res.status(400)
    //     res.send('You done goofed')
    // }
    const newDog = new Dog({name: req.body.name, species: req.body.species, age: req.body.age})
    newDog.save(function (err, dog) {
        if (err) {
            res.status(res.statusCode)
            res.send('You done goofed')
        }
        console.log(dog.name + ' added to collection.');
        res.statusCode
        res.send('Successfully added ' + dog.name + ' to collection.')
    });
})



module.exports = router