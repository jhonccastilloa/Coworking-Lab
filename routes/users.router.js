const express = require('express');
const passport = require('passport');
const router = express.Router();

const {
  findUsers,
  findUser,
  editUser,
} = require('../controllers/users.controller');
const { protectAccountOwner } = require('../middlewares/auth.middlewares');
const { isAdmin } = require('../middlewares/roles.middlewares');

router.use(passport.authenticate('jwt', { session: false }));

router.get('/', isAdmin, findUsers);
router.get('/:id', findUser);
router.put('/:id', protectAccountOwner, editUser);

module.exports = router;
