// Esse arquivo junta todas as rotas do projeto

const express = require('express');
const tarefas = require('./tarefaRoute.js');
const categorias = require('./categoriaRoute.js');

module.exports = (app) => {
    app.use(
        express.json(),
        tarefas,
        categorias
    );
};

