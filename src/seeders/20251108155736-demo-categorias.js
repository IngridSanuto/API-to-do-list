'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categorias', [
      {
        nome: 'Estudos',
        descricao: 'Tarefas relacionadas ao aprendizado e estudo pessoal',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Saúde',
        descricao: 'Atividades físicas e cuidados com o bem-estar',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Organização',
        descricao: 'Planejamento, metas e rotinas do dia a dia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categorias', null, {});
  },
};
