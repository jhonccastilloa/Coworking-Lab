'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert(
        'publications_types',
        [
          {
            id: '1',
            name: 'Marcas y tiendas',
            description: 'Esta es la descripcion de la publicacion de tipo 1',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: '2',
            name: 'Artistas y conciertos',
            description: 'Esta es la descripcion de la publicacion de tipo 2',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: '3',
            name: 'Torneos',
            description: 'Esta es la descripcion de la publicacion de tipo 2',
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
      await queryInterface.bulkDelete('publications_types', null, {
        transaction,
      });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
