'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.bulkInsert('publications_types', [
        {
          id: '1',
          name: 'Publicacion tipo 1',
          description:'Esta es la descripcion de la publicacion de tipo 1',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '2',
          name: 'Publicacion tipo 2',
          description:'Esta es la descripcion de la publicacion de tipo 2',
          created_at: new Date(),
          updated_at: new Date()
        }
      ], { transaction })

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
