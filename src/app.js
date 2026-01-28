const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  next();
});
app.use(cors({
  origin: '*',
  methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type']
}));


app.options('', cors());


app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  next();
});

app.use(express.json()); // permite JSON no body
routes(app); // chama o index.js das rotas

module.exports = app;