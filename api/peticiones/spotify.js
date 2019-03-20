
var axios = require('axios');

// Realizado incorrectamente con promesas (Pero funcional)
// Devuelve todas las estaciones meteorologicas de españa
module.exports = function(app,conf)
{
    // Realizado con promesas correctamente

    // Devuelve los datos de una estación mes por mes durante un año
    // Si falla o no encuentra datos devuelve 'error'
    app.get('/api/spotify/dameToken', function(req, res){

        let dato = 'BUENOS DIASSSSSSSSSSSSSSS';
        console.log(dato)
        res.send(dato);
    });


}