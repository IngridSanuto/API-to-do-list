const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());

app.use(express.json()); // permite JSON no body
routes(app); // chama o index.js das rotas

module.exports = app;