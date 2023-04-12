'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert(
        'publications',
        [
          {
            id: uuid.v4(),
            user_id: user1.id,
            publication_type_id: publicationtype1.id,
            city_id: city1.id,
            title: 'video juegos',
            description: 'juguemos en un entorno diferente',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: uuid.v4(),
            user_id: user2.id,
            publication_type_id: publicationtype2.id,
            city_id: city2.id,
            title: 'Musica',
            description: 'Ir al concierto',
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

    const publications = [];

    try {
      await queryInterface.bulkDelete(
        'publications',
        {
          title: {
            [Op.or]: publications,
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
