require('dotenv').config()
const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const bodyParser = require('body-parser');

// Configurar bodyParser para analizar solicitudes POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors()); // Enable CORS for all routes

const routeV1 = require('./routes/index');
app.use('/v1', routeV1);


module.exports = app