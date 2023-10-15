const express = require('express');
const axios = require('axios');
const paymentRouter = express.Router();

paymentRouter.get("/api/payment", async function (req, res) {
    axios.post('')
})

module.exports = { paymentRouter }
