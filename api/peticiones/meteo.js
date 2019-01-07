


var axios = require('axios');

// Devuelve todas las estaciones meteorologicas de españa
module.exports = function(app,conf)
{
    app.get('/api/meteo/dameEstaciones', function(req, res){

        axios({
            method: 'get',
            url: 'https://opendata.aemet.es/opendata/api/valores/climatologicos/inventarioestaciones/todasestaciones/',
            params: { api_key: conf.meteo.apikey },
            encoding: 'utf8'
        })
            .then(function (response) {
                axios.get(response.data.datos).then(function(response) {
                    //console.log(response.data);
                    res.send(response.data);
                })
            })
            .catch(function (error) {
                res.send('error');
            });
    });


    // Devuelve los datos de una estación dia por dia durante una mes
    // Si falla o no encuentra datos devuelve 'error'
    app.get('/api/meteo/dameDatosDeEstacionPorDia', function(req, res){

        // Se recojen paramentros
        var anyo = req.query.anyo;
        var mes = req.query.mes;
        var numDias = req.query.numdias;
        var estacion = req.query.estacion;
        var url = 'https://opendata.aemet.es/opendata/api/valores/climatologicos/diarios/datos/fechaini/'+anyo+'-'+mes+'-1T00%3A00%3A00UTC/fechafin/'+anyo+'-'+mes+'-'+numDias+'T23%3A59%3A59UTC/estacion/'+estacion;
        //console.log(url);

        axios({
            method: 'get',
            url: url,
            params: { api_key: conf.meteo.apikey },
            encoding: 'utf8'
        })
            .then(function (response1) {
                //console.log(response1.data);
                if(response1.data.estado != 404) {
                    axios.get(response1.data.datos).then(function(response2) {
                        //console.log(response2.data);
                        console.log('/api/meteo/dameDatosDeEstacionPorDia EXITO');                
                        res.send(response2.data);
                    })
                }
                else {
                    res.send('error');
                }
            })
            .catch(function (error) {
                res.send('error');
            });
    });


    // Devuelve los datos de una estación mes por mes durante un año
    // Si falla o no encuentra datos devuelve 'error'
    app.get('/api/meteo/dameDatosDeEstacionPorMes', function(req, res){

        // Se recojen paramentros
        var anyo = req.query.anyo;
        var estacion = req.query.estacion;
        var url = 'https://opendata.aemet.es/opendata/api/valores/climatologicos/mensualesanuales/datos/anioini/'+anyo+'/aniofin/'+anyo+'/estacion/'+estacion;
        //console.log(url);

        axios({
            method: 'get',
            url: url,
            params: { api_key: conf.meteo.apikey },
            encoding: 'utf8'
        })
            .then(function (response1) {
                //console.log(response1.data);
                if(response1.data.estado != 404) {
                    axios.get(response1.data.datos).then(function(response2) {
                        //console.log(response2.data);
                        console.log('/api/meteo/dameDatosDeEstacionPorMes EXITO');    
                        res.send(response2.data);
                    })
                }
                else {
                    res.send('error');
                }
            })
            .catch(function (error) {
                res.send('error');
            });
    });
   

}