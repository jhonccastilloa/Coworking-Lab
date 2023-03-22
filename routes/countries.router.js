const express = require('express');
const { findCountries } = require('../controllers/countries.controller');

const { protect } = require('../middlewares/auth.middlewares');
const router = express.Router();

router.use(protect);
router.get('/', findCountries);

module.exports = router;
