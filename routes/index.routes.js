const express = require('express');
const app = express();

app.use('/users', require('./user.routes'));

module.exports = app;