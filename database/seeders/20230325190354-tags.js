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
            name: 'Ropa y accesorios',
            description:
              'A series of events involving exposure to one or more hazards.',
            // image_url: 'http://image_url',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 2,
            name: 'Deportes ',
            description: 'tag description Deportes',
            img_url: 'www.image3.com',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 3,
            name: 'Conciertos',
            description: 'tag description Conciertos',
            img_url: 'www.image3.com',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 4,
            name: 'Meet & Greet',
            description: 'tag description Meet & Greet',
            img_url: 'www.image1.com',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 5,
            name: 'E-sport ',
            description: 'tag description E-sport',
            img_url: 'www.image3.com',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 6,
            name: 'Pop/Rock',
            description: 'tag description Pop/Rock',
            img_url: 'www.image3.com',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 7,
            name: 'Tecnology',
            description: 'tag description Tecnologia',
            img_url: 'www.image3.com',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 8,
            name: 'Hogar y Decoracion',
            description: 'tag description Hogar y Decoracion',
            img_url: 'www.image1.com',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 9,
            name: 'Abastecimiento',
            description: 'tag description abastecimiento',
            // image_url: 'http://image_url',
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
      await queryInterface.bulkDelete('tags', null, { transaction });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
