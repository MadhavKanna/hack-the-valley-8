const { Schema, model } = require('mongoose');

const drawSchema = new Schema({
    drawId: String,
    name: String,
    drawValue: Number
})

const Draw = model('Draw', drawSchema);

module.exports = { Draw }; 