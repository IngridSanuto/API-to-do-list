'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tarefas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: 'a fazer'
      },
      data_criacao: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      data_limite: {
        type: Sequelize.DATE
      },
      horario: {
        type: Sequelize.TIME
      },
      categoria_id: {
        type: Sequelize.INTEGER,
        allowNull: true,     // --> Permite que esse campo fique nulo. Isso significa que nem toda tarefa precisa ter uma categoria associada.
        references: { model: 'categorias', key: 'id' }, 
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL' // --> se uma categoria for apagada, o campo categoria_id das tarefas associadas será definido como NULL (em vez de excluir as tarefas).
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tarefas');
  }
};
