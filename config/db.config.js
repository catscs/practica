const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/practica', { useUnifiedTopology: true, useNewUrlParser: true });

const db = {};

db.user = require('../models/user.model');

module.exports = db;