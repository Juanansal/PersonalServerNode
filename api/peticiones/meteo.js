
var axios = require('axios');

module.exports = function(app,conf)
{
    app.get('/api/meteo/test', function(req, res){
        console.log('BUENOS DIAS');

        axios({
            method: 'get',
            url: 'https://opendata.aemet.es/opendata/api/valores/climatologicos/inventarioestaciones/todasestaciones/',
            data: { api_key: conf.meteo.apikey }
        })
            .then(function (response) {
                console.log(response.data);
                console.log(response.status);
            })
            .catch(function (error) {
                console.log(error);
            });


    });
	
}