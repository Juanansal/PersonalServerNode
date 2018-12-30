var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var app = express();

   //config
   //

    app.set('port', (process.env.PORT || 5000));

	app.listen(app.get('port'), function() {
	  console.log("Servidor configurado por puerto: "+app.get('port'));
	});

    app.use(express.static(__dirname + '/web'));	
	
	console.log('------------------------------------------------');
	console.log('------------------------------------------------');

    mongoose.connect('mongodb://dumde:manco@ds055535.mlab.com:55535/exodarrushhelper', function(error){
       if(error)
	   {
	      throw error; 	  
       }else
       
	   {		   
           
          console.log('Conectado a la base de datos');
       }
    });


    // Modelos
	require('./modelos/peticiones/Rush.js')(app);


	