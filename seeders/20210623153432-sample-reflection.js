'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reflections', [
      {
        sentence: "aiueo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sentence: "kakikukeko",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sentence: "sasisuseso",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sentence: "tatituteto",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sentence: "naninuneno",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sentence: "hahihuheho",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reflections', null, {});
  }
};
