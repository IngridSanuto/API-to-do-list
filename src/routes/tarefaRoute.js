const { Router } = require('express');
const TarefaController = require('../controllers/TarefaController.js');

const router = Router();

// Lista todas as tarefas
router.get('/', TarefaController.pegaTodas);

// Criar uma nova tarefa
router.post('/', TarefaController.criaTarefa);

// Buscar tarefa por ID
router.get('/:id', TarefaController.pegaPorId);

// Atualizar uma tarefa completa
router.put('/:id', TarefaController.atualizaTarefa);

// Atualizar apenas o status
router.patch('/:id/status', TarefaController.atualizaStatus);

// Deletar uma tarefa
router.delete('/:id', TarefaController.deletaTarefa);

module.exports = router;