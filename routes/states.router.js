const express = require('express');
const passport = require('passport');
const { findStates } = require('../controllers/states.controller');

const router = express.Router();

router.use(passport.authenticate('jwt', { session: false }));
router.get('/', findStates);

module.exports = router;
