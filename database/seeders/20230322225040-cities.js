'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert(
        'cities',
        [
          {
            id: 1,
            state_id: 1,
            name: 'Aguascalientes',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 2,
            state_id: 1,
            name: 'Asientos',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 3,
            state_id: 1,
            name: 'Cosío',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 4,
            state_id: 1,
            name: 'Calvillo',
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
        { transaction }
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkDelete('cities', null, { transaction });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
