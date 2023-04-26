'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.addColumn('markers', 'createdAt', {
      type: DataTypes.DATE
    })
    await queryInterface.addColumn('markers', 'updatedAt', {
      type: DataTypes.DATE
    })
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.removeColumn('markers', 'createdAt')
    await queryInterface.removeColumn('markers', 'updatedAt')
  }
};
