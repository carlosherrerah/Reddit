'use strict'

var validator = require('validator');

var Formulario = require('../models/formulario');

var controller = {

    
    guardar: (req, res) => {
        // Recoger parametros por post
        var params = req.body;

        // Validar datos (validator)
        try{
            var validate_Nombre = !validator.isEmpty(params.Nombre);
            var validate_Usuario = !validator.isEmpty(params.Usuario);
            var validate_Email = !validator.isEmpty(params.Email);
            var validate_Contraseña = !validator.isEmpty(params.Contraseña);

        }catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar !!!'
            });
        }

        if(validate_Nombre && validate_Usuario && validate_Email && validate_Contraseña){
            
            //Crear el objeto a guardar
            var form = new Formulario();

            // Asignar valores
            form.Nombre = params.Nombre;
            form.Usuario = params.Usuario;
            form.Email = params.Email;
            form.Contraseña = params.Contraseña;
           
            // Guardar el articulo
            form.save((err, formStored) => {

                if(err || !formStored){
                    return res.status(404).send({
                        status: 'error',
                        message: 'El articulo no se ha guardado !!!'
                    });
                }

                // Devolver una respuesta 
                return res.status(200).send({
                    status: 'success',
                    usuario: formStored
                });

            });

        }else{
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son válidos !!!'
            });
        }
       
    },

    obtener: (req, res) => {

        var query = Formulario.find({});

     

        // Find
        query.sort('-_id').exec((err, datos) => {

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los datos !!!'
                });
            }

            if(!datos){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay datos para mostrar !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                datos
            });

        });
    }
};

module.exports = controller;