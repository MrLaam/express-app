const mongoose = require("mongoose");
const mongoDB = "mongodb+srv://dbUser:pissword@cluster0.enjkv.mongodb.net/dogsDB?retryWrites=true&w=majority";

function connectToDatabase() {
    mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
}

module.exports = connectToDatabase()