const express = require('express');
const { findCountries } = require('../controllers/countries.controller');
const passport = require('passport');

const router = express.Router();

router.use(passport.authenticate('jwt', { session: false }));

router.get('/', findCountries);

module.exports = router;
