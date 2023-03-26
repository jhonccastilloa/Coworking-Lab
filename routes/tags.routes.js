const express = require('express');
const passport = require('passport');
const {
  findTags,
  findTag,
  editTag,
  addTag,
  deleteTag,
} = require('../controllers/tags.controller');
const { isAdmin } = require('../middlewares/roles.middlewares');

const router = express.Router();

router.use(passport.authenticate('jwt', { session: false }));

router.get('/', findTags);
router.get('/:id', findTag);
router.put('/:id', isAdmin, editTag);
router.post('/', isAdmin, addTag);
router.delete('/:id', isAdmin, deleteTag);

module.exports = router;
