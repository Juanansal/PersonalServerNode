var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var fs = require('fs');
var app = express();

// Config variables de aplicacion
var conf = require('./config/config.js')();

// Config de las bases de datos
require('./config/db.js')(conf);

// Config API (modelos)
require('./api/peticiones/Rush.js')(app);

// Config del servidor
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
    console.log('------------------------------------------------');
    console.log('------------------------------------------------');
    console.log("Servidor configurado por puerto: "+app.get('port'));
});

app.use(express.static(__dirname + '/public'));	





