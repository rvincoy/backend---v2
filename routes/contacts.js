const express = require('express');

const contactController = require('../controllers/contacts');

const router = express.Router();


router.get('/', contactController.getAll);
router.get('/:id', contactController.getSingle);

module.exports = router;
