'use strict'

var express = require('express');
var FormController = require('../controllers/formulario');

var router = express.Router();


// Rutas útiles
router.post('/guardar', FormController.guardar);
router.get('/usuario', FormController.obtener);

module.exports = router;