var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var fs = require('fs');
var aws = require('aws-sdk');
var app = express();

// Config
var conf = require('./config/rush.js');
/*
try {
    fs.statSync('./config/rush.js');
    console.log('file or directory exists');
    conf = require('./config/rush.js');
}
catch (err) {
  if (err.code === 'ENOENT') {
    console.log('file or directory does not exist');
    
    conf = new aws.S3({
        user: process.env.RUSH_USUARIO_DB,
        pass: process.env.RUSH_PASS_DB
      });     
  }
}

console.log(conf);
*/

app.set('port', (process.env.PORT || 5000));


app.listen(app.get('port'), function() {
    console.log("Servidor configurado por puerto: "+app.get('port'));
});

app.use(express.static(__dirname + '/web'));	

console.log('------------------------------------------------');
console.log('------------------------------------------------');

//mongoose.connect('mongodb://dumde:manco@ds055535.mlab.com:55535/exodarrushhelper', function(error){
mongoose.connect('mongodb://'+conf.user+':'+conf.pass+'@ds055535.mlab.com:55535/exodarrushhelper', function(error){
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


