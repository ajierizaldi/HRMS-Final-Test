'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reimburses', {
      reimburseId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      dateReimburse: {
        type: Sequelize.DATE
      },
      balance: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.ENUM('pending', 'approved', 'rejected')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reimburses');
  }
};