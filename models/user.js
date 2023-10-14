const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userId: String,
    entriesLeft: Number,
    luckyDrawEntred: [String]
})
const User = model('User', userSchema);

module.exports = { User }; 