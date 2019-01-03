
var axios = require('axios');

module.exports = function(app,conf)
{
    app.get('/api/meteo/test', function(req, res){

        axios({
            method: 'get',
            url: 'https://opendata.aemet.es/opendata/api/valores/climatologicos/inventarioestaciones/todasestaciones/',
            params: { api_key: conf.meteo.apikey }
        })
            .then(function (response) {
                axios.get(response.data.datos).then(function(response) {
                    console.log(response.data);
                    res.json(response.data);
                })
            })
            .catch(function (error) {
                res.send(error);
            });
    });
}