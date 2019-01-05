


var axios = require('axios');

module.exports = function(app,conf)
{
    app.get('/api/meteo/test', function(req, res){

        axios({
            method: 'get',
            url: 'https://opendata.aemet.es/opendata/api/valores/climatologicos/inventarioestaciones/todasestaciones/',
            params: { api_key: conf.meteo.apikey },
            encoding: 'utf8'
        })
            .then(function (response) {
                axios.get(response.data.datos).then(function(response) {
                    console.log(response.data);
                    res.send(response.data);
                    //res.send('lul');
                })
            })
            .catch(function (error) {
                res.send('ERROR LUL ERROR');
            });
    });



    app.get('/api/meteo/test2', function(req, res){

        res.send('LUL');
    });

}




/*





var request = require('request');

module.exports = function(app,conf)
{
    app.get('/api/meteo/test', function(req, res){
        console.log(conf)

        var options = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        request.get('https://opendata.aemet.es/opendata/api/valores/climatologicos/inventarioestaciones/todasestaciones/?api_key='+conf.meteo.apikey,options,function(err,response,body){
            if(err) {
                console.log('Error');
            }
            else
            {
                var peticion = JSON.parse(body);
                console.log(peticion.datos);

                request.get(peticion.datos,function(err,response,body){
                    if(err) {
                        console.log('Error');
                    }
                    else
                    {
                        var enviar = JSON.parse(body);
                        console.log(enviar);
                        res.send(enviar);
                    }
                }); // fin peticion2
            }
        }); // fin peticiin 1
    });



    app.get('/api/meteo/test2', function(req, res){

        res.send('LUL');
    });

}
*/