const express = require('express');
const {
  findPublicationsTypes,
  findPublicationType,
  updatePublicationType,
} = require('../controllers/publicationsTypes.controller');
const passport = require('passport');
const { isAdmin } = require('../middlewares/roles.middlewares');

const router = express.Router();

router.use(passport.authenticate('jwt', { session: false }));
router.get('/', findPublicationsTypes);
router.get('/:id', findPublicationType);
router.put('/:id', isAdmin,updatePublicationType);

module.exports = router;
