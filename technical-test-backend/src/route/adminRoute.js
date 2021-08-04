var express = require('express');
var api = express.Router();
var authController = require('../controller/authController');
const verifyToken = require('../middelwares/authenticated');


api.post('/signup', authController.signup);
api.post('/signin', authController.signin); 

module.exports = api;