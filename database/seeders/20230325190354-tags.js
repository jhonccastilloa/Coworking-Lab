'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert(
        'tags',
        [
          {
            id: 1,
            name: 'tag 1',
            description: 'tag description 1',
            img_url: 'www.image1.com',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 2,
            name: 'tag 2 ',
            description: 'tag description 2',
            img_url: 'www.image3.com',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 3,
            name: 'tag 3',
            description: 'tag description 3',
            img_url: 'www.image3.com',
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
      await queryInterface.bulkDelete('states', null, { transaction });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
