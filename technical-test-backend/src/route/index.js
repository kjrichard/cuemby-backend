'use strict'
var express = require('express');
var route = express.Router();

route.use('/auth',require('./adminRoute'));
route.use('/v1',require('./playerRouter'));

module.exports = route;