require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cors()); 

const routeV1 = require('./routes/index');
app.use('/', (req,res) => {
  res.send('Hello from Api')
});
app.use('/v1', routeV1);


module.exports = app
