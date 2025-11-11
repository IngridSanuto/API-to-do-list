'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tarefas', [
      {
        titulo: 'Estudar JavaScript',
        descricao: 'Praticar lógica e manipulação do DOM',
        status: 'a fazer',
        data_criacao: new Date(),
        data_limite: new Date('2025-11-15'),
        horario: '10:00:00',
        categoria_id: null,
      },
      {
        titulo: 'Fazer exercícios semanais',
        descricao: 'Praticar atividade física para melhorar a saúde',
        status: 'em andamento',
        data_criacao: new Date(),
        data_limite: new Date('2025-11-20'),
        horario: '15:00:00',
        categoria_id: null,
      },
      {
        titulo: 'Organizar tarefas da semana',
        descricao: 'Listar compromissos e definir prioridades',
        status: 'concluída',
        data_criacao: new Date(),
        data_limite: new Date('2025-11-10'),
        horario: '09:00:00',
        categoria_id: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tarefas', null, {});
  },
};
