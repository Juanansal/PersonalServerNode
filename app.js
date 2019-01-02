var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var fs = require('fs');
var app = express();

// Config
var confRush = {};
if (fs.existsSync("./config/rush.js")) {
    var confRush = require('./config/rush.js');
}
else {
    confRush.user = process.env.RUSH_USUARIO_DB;
    confRush.pass = process.env.RUSH_PASS_DB;
}


app.set('port', (process.env.PORT || 5000));


app.listen(app.get('port'), function() {
    console.log("Servidor configurado por puerto: "+app.get('port'));
});

console.log(process.env.RUSH_PASS_DB);

app.use(express.static(__dirname + '/web'));	

console.log('------------------------------------------------');
console.log('------------------------------------------------');

mongoose.connect('mongodb://'+confRush.user+':'+confRush.pass+'@ds055535.mlab.com:55535/exodarrushhelper', function(error){
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


