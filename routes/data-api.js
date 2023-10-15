const express = require('express');
const { User } = require('../models/user');
const { Draw } = require('../models/draw');
const dataApiRouter = express.Router();
// const { v4 } = require("uuidv4");
// This gets called ever time the app starts


dataApiRouter.get('/api/userData/:userId', [], async function (req, res) {
    const userData = await User.find({ userId: req.params.userId });
    console.log(userData);
    if (userData.length > 0) {
        // send all the auto-generated user-data
        res.send(userData);
    } else {
        const newUser = {
            userId: req.params.userId,
            entriesLeft: 0,
            luckyDrawEntred: []
        };
        User.insertMany([newUser]);
        res.send(newUser);
    }
})

dataApiRouter.get('/api/allDrawData', [], async function (req, res) {
    const allDrawData = await Draw.find({});
    res.send(allDrawData);
})

dataApiRouter.get('/api', [], (req, res) => {
    return res.send("API is running");
})

// apiRouter.get('/api/classify', [], (req, res))

module.exports = { dataApiRouter };
