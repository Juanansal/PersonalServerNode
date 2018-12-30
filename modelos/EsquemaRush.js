var mongoose = require('mongoose');

var EsquemaRush = new mongoose.Schema({
        pj: String,
        rush: String,
        precio: String,
        fecha: Date
    });
    module.exports = mongoose.model('Rush', EsquemaRush);
	
	
	/*
		usuarioCom: String,
        RutaCom: String,
        comentario: String,
        fecha: String
	*/