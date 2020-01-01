const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    username: { type: String, required: true },
    email: String
});

module.exports = mongoose.model('user', userSchema);