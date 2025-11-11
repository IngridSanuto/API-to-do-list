const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController.js');

const router = Router();

// Listar todas as categorias
router.get('/categorias', CategoriaController.pegaTodas);

// Buscar categoria por ID
router.get('/categorias/:id', CategoriaController.pegaPorId);

// Criar nova categoria
router.post('/categorias', CategoriaController.criaCategoria);

// Atualizar uma categoria
router.put('/categorias/:id', CategoriaController.atualizaCategoria);

// Deletar uma categoria
router.delete('/categorias/:id', CategoriaController.deletaCategoria);

module.exports = router;