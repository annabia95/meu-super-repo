"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Data", [
      {
        title: "Código Limpo",
        author: "Robert Cecil Martin",
        pageQuantity: 425,
      },
      {
        title:
          "Arquitetura limpa: O guia do artesão para estrutura e design de software",
        author: "Robert Cecil Martin",
        pageQuantity: 432,
      },
      {
        title: "UX Design: Guia Definitivo com as Melhores Práticas de UX",
        author: "Will Grant",
        pageQuantity: 208,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Data", null, {});
  },
};
