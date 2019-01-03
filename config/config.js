
var fs = require('fs');

module.exports = init;

function init() {

    var enviar;

    if (fs.existsSync("./config/local.js")) {
        enviar = require('../config/local.js');   
    }
    else {
        enviar = {
            rush: {
                user: process.env.RUSH_USUARIO_DB,
                pass: process.env.RUSH_PASS_DB,
                serverDB: process.env.RUSH_SERVER_DB
            }
        }
    }
    return enviar;
}