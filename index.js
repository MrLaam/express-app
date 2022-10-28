const express = require('express')
const mongoose = require('mongoose')
const port = 6969;

// Connect to MongDB
const connectToDatabase = require('./database/connection')
connectToDatabase;

// Import routes here
const dogRoutes = require('./routes/dogs')

/* Uncomment this if you want to see if the connection works and get a list of your collections */
// mongoose.connection.on('open', function (ref) {
//     console.log('Connected to mongo server.');

//     mongoose.connection.db.listCollections().toArray(function (err, names) {
//         console.log(names);
//     });
// })

const app = require('./config/express')
app.use('/dogs', dogRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})