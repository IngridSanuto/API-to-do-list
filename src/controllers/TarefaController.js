const database = require('../models');

class TarefaController {

    // Método que lista todas as tarefas, com opção de filtrar por status
    static async pegaTodas(req, res) {
        try {
            // Extrai o parâmetro "status" da URL, caso o usuário queira filtrar (ex: /tarefas?status=concluido)
            const { status } = req.query;

            // Define os valores de status aceitos
            const statusValidos = ['a fazer', 'em andamento', 'concluido'];

            // Se o usuário enviou um status, mas ele não é válido → retorna um erro claro
            if (status && !statusValidos.includes(status)) {
                return res.status(400).json({
                    mensagem: `Status inválido. Use apenas: ${statusValidos.join(', ')}.`
                });
            }

            // Cria um objeto de filtro dinâmico que será usado na busca, Se o usuário não enviar nenhum status, o filtro fica vazio e retorna todas as tarefas
            const filtro = {};
            if (status) {
                filtro.status = status; 
            }

            // Busca todas as tarefas no banco de dados, Inclui os dados da categoria associada e aplica o filtro se ele existir
            const listaDeTarefas = await database.tarefa.findAll({
                where: filtro,
                include: {
                    model: database.categoria,
                    as: 'categoria'
                }
            });

            // Retorna a lista de tarefas encontradas (com ou sem filtro)
            return res.status(200).json(listaDeTarefas);

        } catch (erro) {
            return res.status(500).json({
                mensagem: 'Erro ao buscar tarefas',
                erro: erro.message
            });
        }
    }

    // Criar uma nova tarefa
    static async criaTarefa(req, res) {
        const novaTarefa = req.body;
        try {
            //cria a tarefa
            const tarefaCriada = await database.tarefa.create(novaTarefa);

            //busca a tarefa criada com a categoria
            const tarefaComCategoria = await database.tarefa.findOne({
            where: { id: tarefaCriada.id },
            include: {
                model: database.categoria,
                as: 'categoria'
            }
        });

            return res.status(201).json(tarefaCriada);
        } catch (erro) {
            return res.status(500).json({ mensagem: 'Erro ao criar tarefa', erro: erro.message });
        }
    }

    // Buscar tarefa por ID
    static async pegaPorId(req, res) {
        const { id } = req.params;
        try {
            const tarefa = await database.tarefa.findOne({ 
                where: { id: Number(id) },
                include: {
                    model: database.categoria,
                    as: 'categoria'
                }
             });
            if (!tarefa) {
                return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
            }
            return res.status(200).json(tarefa);
        } catch (erro) {
            return res.status(500).json({ mensagem: 'Erro ao buscar tarefa', erro: erro.message });
        }
    }

    // Atualizar uma tarefa completa
    static async atualizaTarefa(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;
        try {
            const tarefa = await database.tarefa.findOne({ where: { id: Number(id) } });
            if (!tarefa) {
                return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
            }
            await database.tarefa.update(novasInfos, { where: { id: Number(id) } });
            const tarefaAtualizada = await database.tarefa.findOne({ where: { id: Number(id) } });
            return res.status(200).json(tarefaAtualizada);
        } catch (erro) {
            return res.status(500).json({ mensagem: 'Erro ao atualizar tarefa', erro: erro.message });
        }
    }

    // Atualizar apenas o status da tarefa
    static async atualizaStatus(req, res) {
        const { id } = req.params;
        const { status } = req.body;
        try {
            const tarefa = await database.tarefa.findOne({ where: { id: Number(id) } });
            if (!tarefa) {
                return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
            }
            await database.tarefa.update({ status }, { where: { id: Number(id) } });
            const tarefaAtualizada = await database.tarefa.findOne({ where: { id: Number(id) } });
            return res.status(200).json(tarefaAtualizada);
        } catch (erro) {
            return res.status(500).json({ mensagem: 'Erro ao atualizar status', erro: erro.message });
        }
    }

    // Deletar uma tarefa
    static async deletaTarefa(req, res) {
        const { id } = req.params;
        try {
            const tarefa = await database.tarefa.findOne({ where: { id: Number(id) } });
            if (!tarefa) {
                return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
            }
            await database.tarefa.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `Tarefa com id ${id} deletada com sucesso` });
        } catch (erro) {
            return res.status(500).json({ mensagem: 'Erro ao deletar tarefa', erro: erro.message });
        }
    }
}

module.exports = TarefaController;
