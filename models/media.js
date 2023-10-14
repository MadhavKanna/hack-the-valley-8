const { Binary } = require('mongodb');
const { Schema, model } = require('mongoose');

const mediaSchema = new Schema({
    name: String,
    data: Binary
})

// const userSchema = new Schema({
//     name: String, 
//     email: String, // email is userID
// })

const Media = model('Media', mediaSchema);

// const User = model('User', userSchema);

module.exports = { Media };