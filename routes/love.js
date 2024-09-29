// backend/routes/love.js

const express = require('express');
const router = express.Router();
const LoveScore = require('../models/LoveScore');

// POST /api/love/calculate
router.post('/calculate', async (req, res) => {
    try {
        const { name1, name2 } = req.body;

        // Validate inputs
        if (!name1 || !name2) {
            return res.status(400).json({ status: 'error', message: 'Both names are required!' });
        }

        // Calculate love score (custom logic can be enhanced)
        const loveScore = Math.floor(Math.random() * 101); // 0 to 100

        // Create a new LoveScore document
        const newLoveScore = new LoveScore({
            name1,
            name2,
            loveScore,
        });

        await newLoveScore.save();

        res.json({ status: 'success', message: `${name1} and ${name2}'s love score is ${loveScore}%!` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Server Error' });
    }
});

module.exports = router;
