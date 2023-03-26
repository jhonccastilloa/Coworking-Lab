const express = require('express');
const passport = require('passport');
const { getAllCities } = require('../controllers/cities.controller');

const router = express.Router();
router.use(passport.authenticate('jwt', { session: false }));

router.get('/', getAllCities);

module.exports = router;
