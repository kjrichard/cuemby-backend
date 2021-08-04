const express = require("express");
const app = express();
const body = require("body-parser");

//Middlewares
app.use(body.urlencoded({extended:false}));
app.use(body.json());
var cors = require('cors')

//Cors
app.use(cors());

//rutas
app.use('/api', require('./src/route/index'));
//Exportar
module.exports = app;