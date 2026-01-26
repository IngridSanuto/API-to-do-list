const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController.js');

const router = Router();

// Listar todas as categorias
router.get('/', CategoriaController.pegaTodas);

// Buscar categoria por ID
router.get('/:id', CategoriaController.pegaPorId);

// Criar nova categoria
router.post('/', CategoriaController.criaCategoria);

// Atualizar uma categoria
router.put('/:id', CategoriaController.atualizaCategoria);

// Deletar uma categoria
router.delete('/:id', CategoriaController.deletaCategoria);

module.exports = router;