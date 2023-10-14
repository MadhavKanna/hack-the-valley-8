const express = require('express');
const apiRouter = express.Router();


apiRouter.get('/api/stuff', function (req, res) {
    res.send('Yo this shit works');
})

apiRouter.get('/api', [], (req, res) => {
    return res.send("API is running");
})

module.exports = { apiRouter };
