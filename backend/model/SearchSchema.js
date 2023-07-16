const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema({
    title: {
        type: String
    },
    genre: {
        type: String
    },  
    img_url: {
        type: String
    },
    synopsis: {
        type: String
    },
    score: {
        type: String
    },
})

const GenreList = mongoose.model('anime', GenreSchema);

module.exports = GenreList; 