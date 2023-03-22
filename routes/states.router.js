const express = require('express');
const { findStates } = require('../controllers/states.controller');

const { protect } = require('../middlewares/auth.middlewares');
const router = express.Router();

router.use(protect);
router.get('/', findStates);

module.exports = router;
