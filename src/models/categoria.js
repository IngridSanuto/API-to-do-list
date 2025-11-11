'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    static associate(models) {
      Categoria.hasMany(models.tarefa, {
        foreignKey: 'categoria_id',
        as: 'tarefas'
      });
    }
  }

  Categoria.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categoria',
    tableName: 'categorias'
  });

  return Categoria;
};
