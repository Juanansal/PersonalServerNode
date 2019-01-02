var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var fs = require('fs');
var app = express();

// Config
var conf = require('./config/config.js')();
console.log(conf);
console.log(conf.rush.user);

app.set('port', (process.env.PORT || 5000));


app.listen(app.get('port'), function() {
    console.log("Servidor configurado por puerto: "+app.get('port'));
});

app.use(express.static(__dirname + '/web'));	

console.log('------------------------------------------------');
console.log('------------------------------------------------');

mongoose.connect('mongodb://'+conf.rush.user+':'+conf.rush.pass+'@ds055535.mlab.com:55535/exodarrushhelper', function(error){
//mongoose.connect('mongodb://'+process.env.RUSH_USUARIO_DB+':'+process.env.RUSH_PASS_DB+'@ds055535.mlab.com:55535/exodarrushhelper', function(error){
if(error)
{
    throw error; 	  
}else

{		   
    
    console.log('Conectado a la base de datos');
}
});

// Modelos
require('./api/peticiones/Rush.js')(app);


