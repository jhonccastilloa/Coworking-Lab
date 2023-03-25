const express = require('express');
const passport = require('passport');
const {
  findTags,
  findTag,
  editTag,
  addTag,
  deleteTag,
} = require('../controllers/tags.controller');

const router = express.Router();

router.use(passport.authenticate('jwt', { session: false }));
router.get('/', findTags);
router.get('/:id', findTag);
router.put('/:id', editTag);
router.post('/', addTag);
router.delete('/:id', deleteTag);

module.exports = router;
