const express = require('express');
const passport = require('passport');
const router = express.Router();

const {
  findUsers,
  findUser,
  editUser,
} = require('../controllers/users.controller');

router.get('/', findUsers);
// router.post('/', passport.authenticate('jwt', { session: false }), addUser);
router.get('/:id', findUser);
router.put('/:id', passport.authenticate('jwt', { session: false }), editUser);

module.exports = router;
