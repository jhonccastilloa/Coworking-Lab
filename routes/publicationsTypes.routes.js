const express = require('express')
const { findPublicationsTypes, findPublicationType, updatePublicationType } = require('../controllers/publicationsTypes.controller');
const { protect } = require('../middlewares/auth.middlewares');
const router = express.Router()


router.use(protect);
router.get('/',findPublicationsTypes)
router.get('/:id',findPublicationType)
router.put('/:id',updatePublicationType)

module.exports = router