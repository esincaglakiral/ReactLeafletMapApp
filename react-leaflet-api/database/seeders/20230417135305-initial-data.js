"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [
      {
        latitude: 37.034407,
        longitude: 27.43054,
        description: "Bodrum",
      },
    ];

    await queryInterface.bulkInsert("markers", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("markers", null, {});
  },
};
