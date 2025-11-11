'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarefa extends Model {
    static associate(models) {
      Tarefa.belongsTo(models.categoria, {
        foreignKey: 'categoria_id',
        as: 'categoria'
      });
    }
  }
  Tarefa.init({
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'O título é obrigatório' },
        len: { args: [3, 100], msg: 'O título deve ter entre 3 e 100 caracteres' } 
        // o titulo possue limite e mínimo de tamanho e é obrigatório
      }
    },
    descricao: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM('a fazer', 'em andamento', 'concluída'), // Valores que são permitidos na tarefa
      allowNull: false,
      defaultValue: 'a fazer',
      validate: {
        len: { args: [0, 255], msg: 'A descrição deve ter no máximo 255 caracteres' }, // limite de tamanho da descrição
        isIn: {
          args: [['a fazer', 'em andamento', 'concluída']],
          msg: 'Status deve ser apenas "a fazer", "em andamento" ou "concluída"'
        }
      }
    },
    data_criacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    data_limite: {
  type: DataTypes.DATE,
  validate: {
    isAfterToday(value) {
      if (value && new Date(value) < new Date()) {
        throw new Error('A data limite deve ser uma data futura');
      }
    }
  }
},
horario: DataTypes.TIME,
categoria_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tarefa',
    tableName: 'tarefas',
    timestamps: false // Desativa os campos automáticos createdAt e updatedAt
  });

  return Tarefa;
};