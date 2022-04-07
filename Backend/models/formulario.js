'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FormSchema = Schema({
    Nombre: String,
    Usuario: String,
    Email: String,
    Contraseña: String
});

module.exports = mongoose.model('Formulario', FormSchema);
