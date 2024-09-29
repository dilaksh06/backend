// backend/models/LoveScore.js

const mongoose = require('mongoose');

const LoveScoreSchema = new mongoose.Schema({
    name1: {
        type: String,
        required: true,
    },
    name2: {
        type: String,
        required: true,
    },
    loveScore: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('LoveScore', LoveScoreSchema);
