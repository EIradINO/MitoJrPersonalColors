'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reflections', [
      {
        content: "aiueo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "kakikukeko",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "sasisuseso",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "tatituteto",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reflections', null, {})
  }
};
