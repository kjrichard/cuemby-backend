var express = require('express');
var api = express.Router();
var playerController = require('../controller/playerController');
const verifyToken = require('../middelwares/authenticated');

api.post('/team', verifyToken,playerController.getplayersWithTeam);
api.get('/player', verifyToken, playerController.getPlayersWithName);


module.exports = api;