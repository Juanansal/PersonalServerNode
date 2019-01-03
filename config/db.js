
var mongoose = require('mongoose');


module.exports = function(conf) {

    // DB Rush
    conectarConDB(conf.rush.user, conf.rush.pass, conf.rush.serverDB);
}






function conectarConDB(user, pass, server) {
    mongoose.connect('mongodb://'+user+':'+pass+'@'+server, { useNewUrlParser: true }, function(error){
        if(error) {
            throw error; 	  
        }
        else {		         
            console.log('Conectado a la base de datos');
        }
    });
}

