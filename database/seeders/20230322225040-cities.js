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
            id: '1',
            state_id: state1.id,
            name: 'Ciudad de mexico',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: '2',
            state_id: state2.id,
            name: 'Monterrey',
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

    const cities = ['Ciudad de mexico', 'Monterrey'];

    try {
      await queryInterface.bulkDelete(
        'cities',
        {
          name: {
            [Op.or]: cities,
          },
        },
        { transaction }
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
