'use strict';
const uuid = require('uuid');
const { Op } = require('sequelize');
const { hashPassword } = require('../../libs/bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    const usersSeeds = [
      {
        id: uuid.v4(),
        first_name: 'Jhon',
        last_name: 'Castillo',
        email: 'gpro1pro@gmail.com',
        username: 'jcastilloa',
        password: hashPassword('ribosoma1'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuid.v4(),
        first_name: 'Alejandro',
        last_name: 'Parrado',
        email: 'deb-28@hotmail.com',
        username: 'deb-28@hotmail.com',
        password: hashPassword('coworkinglab'),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    try {
      await queryInterface.bulkInsert('users', usersSeeds, { transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    const userNames = ['deb-28@hotmail.com','gpro1pro@gmail.com'];

    try {
      await queryInterface.bulkDelete(
        'users',
        {
          username: {
            [Op.or]: userNames,
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
