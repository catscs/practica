const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/practica');

const db = {};

db.user = require('../models/user.model');

module.exports = db;