const express = require('express');
const usersRoutes = require('./api/routes/users');

const app = express();

app.use('/users', usersRoutes);

module.exports = app;