
var Rush = require('../EsquemaRush');

module.exports = function(app)
{

    app.get('/rush/listar', function(req, res){
        Rush.find({}).sort({fecha:1}).exec(function(error, rushes){
            if(error){
				console.log('ERROR - Listado fallado');
                res.send('1');				
            }else{
                res.send(rushes); 
            }
       })
    });
	
	
    app.get('/rush/recuperar_rush_por_id', function(req, res){
        Rush.findById(req.query._id, function(error, resultado){
            if(error){
				console.log('ERROR - Error al recuperar el rush: '+req.query._id);
                res.send('1');
            }else{
				console.log('OK - Rush de '+resultado.pj+' recuperado');
                res.send(resultado);
            }
       });
    });


    app.post('/rush/guardar', function(req, res){
        if(req.query._id == null){

            var insertar = new Rush({
               pj: req.query.pj,
               rush: req.query.rush,
               precio: req.query.precio,
               fecha: req.query.fecha
            });
            insertar.save(function(error, resultado){
                if(error){
					console.log('ERROR - El rush no se ha guardado correctamente');
                    res.send('1');
                }else{
					console.log('OK - Rush de '+resultado.pj+' guardado correctamente');
                    res.send('0');
                }
            });
        }else{
            //Modifica
            Rush.findById(req.query._id, function(error, resultado){
                if(error){
                    console.log('ERROR - El rush no se ha guardado correctamente (Modificar)');
					res.send('2');
                }else{
                    var insertar = resultado;
                    insertar.pj = req.query.pj,
                    insertar.rush = req.query.rush,
                    insertar.precio = req.query.precio,
                    insertar.fecha = req.query.fecha,
                    insertar.save(function(error, resultado){
                        if(error){
                            res.send('3');
							console.log('ERROR - El rush no se ha guardado correctamente al modificar');
                        }else{ 
                            res.send('0');
							console.log('OK - Rush de '+insertar.pj+ ' modificado correctamente');
                        }
                    });
                }
            });
        }
    });

	
    app.post('/rush/eliminar', function(req, res){
        Rush.remove({_id: req.query._id}, function(error){
            if(error){
                res.send('1');
				console.log('ERROR - El rush no se ha eliminado');
            }else{
				console.log('OK - Rush eliminado correctamente');
                res.send('0');
            }
       });
    });
	
}