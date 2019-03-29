
var axios = require('axios');
var request = require('request')
//axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

// Peticion post para recibir el token para realizar llamadas http a spotify
module.exports = function(app,conf)
{
    // Realizado con promesas correctamente

    let client_id = conf.spotify.public;
    let client_secret = conf.spotify.secret;

    app.get('/api/spotify/dameToken', function(req, res){

        let spotifyUrl = 'https://accounts.spotify.com/api/token';

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
    
        })
    });



    //////////////////////////////////
    // Authentificacion para spotify
    /////////////////////////////////////
    const passport = require('passport');
    const SpotifyStrategy = require('passport-spotify').Strategy;
 
    passport.use(
    new SpotifyStrategy(
        {
        clientID: client_id,
        clientSecret: client_secret,
        callbackURL: 'http://localhost:4200' 
        },
        function(accessToken, refreshToken, expires_in, profile, done) {
            console.log(accessToken);
            console.log(profile);
        }
    )
    );

    app.get('/api/spotify/login',
        passport.authenticate('spotify', {
          scope: ['user-read-email', 'user-read-private']
        }),
        function(req, res) {
          // The request will be redirected to spotify for authentication, so this
          // function will not be called.
        }
      );
}


