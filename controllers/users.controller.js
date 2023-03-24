const { request, response } = require('express');
const users = require('../database/models/users');
const UsersService = require('../services/users.service');
const { getPagination, getPagingData } = require('../utils/helpers');

const usersService = new UsersService();

exports.findUsers = async (req, res, next) => {
  try {
    const query = req.query;
    const { page, size } = query;
    const { limit, offset } = getPagination(page, size, '10');
    query.limit = limit;
    query.offset = offset;

    const users = await usersService.findAndCount(query);
    const result = getPagingData(users, page, limit);
    return res.status(200).json({ results: result });
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
