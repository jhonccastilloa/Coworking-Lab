const express = require('express');
const passport = require('passport');

const router = express.Router();

router.use(passport.authenticate('jwt', { session: false }));
router.get('/', findTags);

module.exports = router;
