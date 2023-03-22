const { request, response } = require('express');
const users = require('../database/models/users');
const UsersService = require('../services/users.service');

const usersService = new UsersService();

exports.findUsers = async (req, res, next) => {
  try {
    const query = req.query;
    const users = await usersService.findAndCount(query);

    return res.json({ results: users });
  } catch (error) {
    next(error);
  }
};

exports.addUser = async (req, res, next) => {
  try {
    const { first_name, last_name, email, password, username } = req.body;
  } catch (error) {
    next(error);
  }
};

exports.findUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await usersService.getUser(id);
    return res.json({ results: user });
  } catch (error) {
    next(error);
  }
};

exports.editUser = async (req, res, next) => {
  try {
    let { id } = req.params;
    let { body } = req;

    let user = await usersService.updateUser(id, body);
    return res.json({ results: user });
  } catch (error) {
    next(error);
  }
};
