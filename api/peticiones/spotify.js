
var axios = require('axios');
var request = require('request')
//axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

// Peticion post para recibir el token para realizar llamadas http a spotify
module.exports = function(app,conf)
{
    // Realizado con promesas correctamente

    let client_id = conf.spotify.public;
    let client_secret = conf.spotify.secret;
    let spotifyUrl = 'https://accounts.spotify.com/api/token';

    app.get('/api/spotify/dameToken', function(req, res){

        
        var authOptions = {
            url: spotifyUrl,
            headers: {
                Authorization: 'Basic ' + new Buffer(client_id + ':' + client_secret).toString('base64')
            },
            form: {
                grant_type: 'client_credentials'
            },
            json: true
        };

        request.post(authOptions, (err, httpResponse, body) => {
    
            if (err) {
                return resp.status(400).json({
                    ok: false,
                    mensaje: 'No se pudo obtener el token',
                    err
                })
            }
    
            res.json(body);
    
        });





/*
        let dato = { 
            hola: 'que tal', 
            public: publicKey,
            private: secretKey
        };
        console.log(dato);
        */
    });


}