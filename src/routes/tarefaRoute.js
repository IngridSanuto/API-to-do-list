const { Router } = require('express');
const TarefaController = require('../controllers/TarefaController.js');

const router = Router();

// Lista todas as tarefas
router.get('/tarefas', TarefaController.pegaTodas);

// Criar uma nova tarefa
router.post('/tarefas', TarefaController.criaTarefa);

// Buscar tarefa por ID
router.get('/tarefas/:id', TarefaController.pegaPorId);

// Atualizar uma tarefa completa
router.put('/tarefas/:id', TarefaController.atualizaTarefa);

// Atualizar apenas o status
router.patch('/tarefas/:id/status', TarefaController.atualizaStatus);

// Deletar uma tarefa
router.delete('/tarefas/:id', TarefaController.deletaTarefa);

module.exports = router;