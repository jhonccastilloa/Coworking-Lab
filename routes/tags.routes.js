const express = require('express');
const passport = require('passport');
const {
  findTags,
  findTag,
  editTag,
} = require('../controllers/tags.controller');

const router = express.Router();

router.use(passport.authenticate('jwt', { session: false }));
router.get('/', findTags);
router.get('/:id', findTag);
router.put('/:id', editTag);

module.exports = router;
