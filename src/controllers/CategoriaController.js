const database = require('../models');

class CategoriaController {
  // Listar todas as categorias
  static async pegaTodas(req, res) {
    try {
      const listaDeCategorias = await database.categoria.findAll({
        include: { model: database.tarefa, as: 'tarefas' }
      });
      return res.status(200).json(listaDeCategorias);
    } catch (erro) {
      return res.status(500).json({ mensagem: 'Erro ao buscar categorias', erro: erro.message });
    }
  }

  // Buscar categoria por ID
  static async pegaPorId(req, res) {
    const { id } = req.params;
    try {
      const categoria = await database.categoria.findOne({
        where: { id: Number(id) },
        include: { model: database.tarefa, as: 'tarefas' }
      });
      if (!categoria) {
        return res.status(404).json({ mensagem: 'Categoria não encontrada' });
      }
      return res.status(200).json(categoria);
    } catch (erro) {
      return res.status(500).json({ mensagem: 'Erro ao buscar categoria', erro: erro.message });
    }
  }

  // Criar nova categoria
  static async criaCategoria(req, res) {
    const novaCategoria = req.body;
    try {
      const categoriaCriada = await database.categoria.create(novaCategoria);
      return res.status(201).json(categoriaCriada);
    } catch (erro) {
      return res.status(500).json({ mensagem: 'Erro ao criar categoria', erro: erro.message });
    }
  }

  // Atualizar uma categoria
  static async atualizaCategoria(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      const categoria = await database.categoria.findOne({ where: { id: Number(id) } });
      if (!categoria) {
        return res.status(404).json({ mensagem: 'Categoria não encontrada' });
      }
      await database.categoria.update(novasInfos, { where: { id: Number(id) } });
      const categoriaAtualizada = await database.categoria.findOne({ where: { id: Number(id) } });
      return res.status(200).json(categoriaAtualizada);
    } catch (erro) {
      return res.status(500).json({ mensagem: 'Erro ao atualizar categoria', erro: erro.message });
    }
  }

  // Deletar uma categoria
  static async deletaCategoria(req, res) {
    const { id } = req.params;
    try {
      const categoria = await database.categoria.findOne({ where: { id: Number(id) } });
      if (!categoria) {
        return res.status(404).json({ mensagem: 'Categoria não encontrada' });
      }
      await database.categoria.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ mensagem: `Categoria com id ${id} deletada com sucesso` });
    } catch (erro) {
      return res.status(500).json({ mensagem: 'Erro ao deletar categoria', erro: erro.message });
    }
  }
}

module.exports = CategoriaController;
