const { Binary } = require('mongodb');
const { Schema, model } = require('mongoose');

const mediaSchema = new Schema({
    name: String,
    data: Binary
})

const Media = model('Media', mediaSchema);

module.exports = { Media };