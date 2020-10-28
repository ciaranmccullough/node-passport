require('dotenv').config();
const express = require('express');
const passport = require('passport');
const { json } = require('body-parser');
const userRouter = require('./user/router/user.router');
const app = express();
const {} = process.env;

require('./database');
require('../app/user/router/user.router');

app.use(passport.initialize());
app.use(json());
app.use('/', userRouter);

module.exports = app;
