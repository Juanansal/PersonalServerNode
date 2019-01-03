

// Cambios de estado del editor
editor.cambioEstado = function(num, capa)
{
    
    // Cambios generales al cambiar de estado
    
    // Se elimina la imagen cargada si la hubiera
    editor.imagenCargada = null;
    
    editor.figuraDibujando = null;
    editor.dibujando = false;
    
    // Eliminar la seleccion de texto (algunos estados se anula)
    document.onselectstart = function() {return false;}
    document.onmousedown = function() {return false;}
    
    if(num == 0)
        {
            editor.estado = 0;
            
            editor.eliminarSeleccionGlobal();
            editor.eliminarDragGlobal();        
            
            // Eliminacion de la capa de propiedades si la hay
              editor.borrarCapaPorId("datos_propiedades");
            
            // Muestra la ventana de propiedades en el caso de cambiar a crear forma1
              editor.mostrarPropiedades(data.propiedades.edicion);
            
            // Se cambia el estilo del menu izquierda
            editor.CambiarEstiloMenuIzquierdo(capa);
            
            // Mostrar mensaje en el pie
            editor.mostrarMensajePie('Movimiento libre activado');
            
            console.log('Modo camara, estado 0');
        }
    
   if(num == 1)
        {
            editor.estado = 1;
            
              //Seleccion de todos los elementos svg y ponerles drag
             editor.CANVAS.each(function(i, children) {
                 this.draggable();
                 //console.log(this);
             });
            
            // Muestra la ventana de propiedades en el caso de cambiar a seleccion
            editor.borrarCapaPorId("datos_propiedades");
            editor.mostrarPropiedades(data.propiedades.edicion);
            
            // Se cambia el estilo del menu izquierda
            editor.CambiarEstiloMenuIzquierdo(capa);
            
            // Mostrar mensaje en el pie
            editor.mostrarMensajePie('Modo selección');
            
            console.log('Cambiado a estado 1');
            
        }
    
    if(num == 2)
        {
            editor.estado = 2;
            
            editor.eliminarSeleccionGlobal();
            editor.eliminarDragGlobal();            
            
            // Eliminacion de la capa de propiedades si la hay
              editor.borrarCapaPorId("datos_propiedades");
            
            // Muestra la ventana de propiedades en el caso de cambiar a crearCirculo
            editor.mostrarPropiedades(data.propiedades.crearCirculo);
            
            // Se cambia el estilo del menu izquierda
            editor.CambiarEstiloMenuIzquierdo(capa);
            
            // Se inicializa el slider para el tam del borde
            var slider = new Slider('#tam', {
                formatter: function(value) {
                    return '' + value;
                }            
                });          
            slider.on("slide", function(sliderValue) {
	           document.getElementById("infotam").textContent = sliderValue;
});
            
            
            // Se inicializa el slider para la transparencia del fondo
            var slider = new Slider('#transfondo', {
                formatter: function(value) {
                    return '' + value;
                }            
                });          
            slider.on("slide", function(sliderValue) {
	           document.getElementById("infotam2").textContent = sliderValue;
});
            
             // Se inicializa el slider para la transparencia del borde
            var slider = new Slider('#transborde', {
                formatter: function(value) {
                    return '' + value;
                }            
                });          
            slider.on("slide", function(sliderValue) {
	           document.getElementById("infotam3").textContent = sliderValue;
});
            
            
            // Mostrar mensaje en el pie
            editor.mostrarMensajePie('Dibujado circulos');
            
            console.log('Cambiado a estado 2');
        }
    
    if(num == 3)
        {
             editor.estado = 3;
            
             editor.eliminarSeleccionGlobal();
             editor.eliminarDragGlobal();          
            
              // Eliminacion de la capa de propiedades si la hay
              editor.borrarCapaPorId("datos_propiedades");
            
              // Muestra la ventana de propiedades en el caso de cambiar a crearRectangulo
              editor.mostrarPropiedades(data.propiedades.crearRectangulo);
            
            // Se cambia el estilo del menu izquierda
            editor.CambiarEstiloMenuIzquierdo(capa);
            
             // Se inicializa el slider para el tam del borde
             var slider = new Slider('#tam', {
                formatter: function(value) {
                    return '' + value;
                }            
                });          
            slider.on("slide", function(sliderValue) {
	           document.getElementById("infotam").textContent = sliderValue;
            });
            
            // Se inicializa el slider para la transparencia del fondo
            var slider = new Slider('#transfondo', {
                formatter: function(value) {
                    return '' + value;
                }            
                });          
            slider.on("slide", function(sliderValue) {
	           document.getElementById("infotam2").textContent = sliderValue;
});
            
             // Se inicializa el slider para la transparencia del borde
            var slider = new Slider('#transborde', {
                formatter: function(value) {
                    return '' + value;
                }            
                });          
            slider.on("slide", function(sliderValue) {
	           document.getElementById("infotam3").textContent = sliderValue;
});
            
            // Mostrar mensaje en el pie
            editor.mostrarMensajePie('Dibujado Rectangulos');
            
              console.log('Cambiado a estado 3');
        }
    
    if(num == 4)
        {
            editor.estado = 4;
            
            editor.eliminarSeleccionGlobal();
            editor.eliminarDragGlobal();  
         
            
            // Eliminacion de la capa de propiedades si la hay
              editor.borrarCapaPorId("datos_propiedades");
            
            // Muestra la ventana de propiedades en el caso de cambiar a crearRectangulo
              editor.mostrarPropiedades(data.propiedades.crearLinea);
            
            // Se cambia el estilo del menu izquierda
            editor.CambiarEstiloMenuIzquierdo(capa);
            
            // Se inicializa los sliders que la zona de propiedades
            var slider = new Slider('#tam', {
                formatter: function(value) {
                    return '' + value;
                }            
                });        
            slider.on("slide", function(sliderValue) {
	           document.getElementById("infotam").textContent = sliderValue;
            });
            
            // Se inicializa el slider para la transparencia de la recta
            var slider2 = new Slider('#transborde', {
                formatter: function(value) {
                    return '' + value;
                }            
                });          
            slider2.on("slide", function(sliderValue) {
	           document.getElementById("infotam2").textContent = sliderValue;
            });
            
            // Mostrar mensaje en el pie
            editor.mostrarMensajePie('Dibujado rectas');
            
            console.log('Cambiado a estado 4');
        }
    
    if(num == 5)
        {
            editor.estado = 5;
            
            editor.eliminarSeleccionGlobal();
            editor.eliminarDragGlobal();         
            
            // Eliminacion de la capa de propiedades si la hay
              editor.borrarCapaPorId("datos_propiedades");
            
            // Muestra la ventana de propiedades en el caso de cambiar a crear forma1
              editor.mostrarPropiedades(data.propiedades.crearForma1);
            
            // Se cambia el estilo del menu izquierda
            editor.CambiarEstiloMenuIzquierdo(capa);
            
            // Se inicializa los sliders que la zona de propiedades
            var slider1 = new Slider('#tamborde', {
                formatter: function(value) {
                    return '' + value;
                }            
                });  
            slider1.on("slide", function(sliderValue) {
	           document.getElementById("infotam").textContent = sliderValue;
            });
            
            var slider2 = new Slider('#puntas', {
                formatter: function(value) {
                    return '' + value;
                }            
                });      
            slider2.on("slide", function(sliderValue) {
	           document.getElementById("infotam2").textContent = sliderValue;
            });
            
            // Se inicializa el slider para la transparencia de la forma1 
            var slider = new Slider('#transborde', {
                formatter: function(value) {
                    return '' + value;
                }            
                });          
            slider.on("slide", function(sliderValue) {
	           document.getElementById("infotam3").textContent = sliderValue;
            });
            
            // Mostrar mensaje en el pie
            editor.mostrarMensajePie('Dibujado forma personalizada 1');
            
            console.log('Cambiado a estado 5');
        }
    
    if(num == 6)
        {
            editor.estado = 6;
            
            editor.eliminarSeleccionGlobal();
            editor.eliminarDragGlobal();         
            
            // Eliminacion de la capa de propiedades si la hay
              editor.borrarCapaPorId("datos_propiedades");
            
            // Muestra la ventana de propiedades en el caso de cambiar a crear forma1
              editor.mostrarPropiedades(data.propiedades.crearForma2);
            
            // Se cambia el estilo del menu izquierda
            editor.CambiarEstiloMenuIzquierdo(capa);
            
            // Se inicializa los sliders que la zona de propiedades
            var slider1 = new Slider('#tamborde', {
                formatter: function(value) {
                    return '' + value;
                }            
                });         
            slider1.on("slide", function(sliderValue) {
	           document.getElementById("infotam").textContent = sliderValue;
            });
            
            
            var slider2 = new Slider('#puntas', {
                formatter: function(value) {
                    return '' + value;
                }            
                });  
            slider2.on("slide", function(sliderValue) {
	           document.getElementById("infotam2").textContent = sliderValue;
            });
            
            
            // Se inicializa el slider para la transparencia de la forma1 
            var slider = new Slider('#transborde', {
                formatter: function(value) {
                    return '' + value;
                }            
                });          
            slider.on("slide", function(sliderValue) {
	           document.getElementById("infotam3").textContent = sliderValue;
            });
            
            // Mostrar mensaje en el pie
            editor.mostrarMensajePie('Dibujado forma personalizada 2');
            
            console.log('Cambiado a estado 6');
        }
    
    if(num == 7)
        {
            editor.estado = 7;
            
            editor.eliminarSeleccionGlobal();
            editor.eliminarDragGlobal();         
            
            // Eliminacion de la capa de propiedades si la hay
            editor.borrarCapaPorId("datos_propiedades");
            
            // Muestra la ventana de propiedades en el caso de cambiar a crear forma1
            editor.mostrarPropiedades(data.propiedades.crearImagen);
            
            // Se cambia el estilo del menu izquierda
            editor.CambiarEstiloMenuIzquierdo(capa);
            
            // Mostrar mensaje en el pie
            editor.mostrarMensajePie('Dibujado imagenes');
            
            console.log('Cambiado a estado 7');
        }
    
    if(num == 8)
        {
            editor.estado = 8;
            
            editor.eliminarSeleccionGlobal();
            editor.eliminarDragGlobal();  
         
            // Eliminacion de la capa de propiedades si la hay
              editor.borrarCapaPorId("datos_propiedades");
            
            // Muestra la ventana de propiedades en el caso de cambiar a crearRectangulo
              editor.mostrarPropiedades(data.propiedades.crearLapiz);
            
            // Se cambia el estilo del menu izquierda
            editor.CambiarEstiloMenuIzquierdo(capa);
            
            
            // Se inicializa los sliders que la zona de propiedades
            // slider1 para el grosor del lapiz
            var slider1 = new Slider('#grosor', {
                formatter: function(value) {
                    return '' + value;
                }            
                });        
            slider1.on("slide", function(sliderValue) {
	           document.getElementById("infotam").textContent = sliderValue;
            });
            
            
            // Se inicializa el slider para la transparencia del lápiz
            var slider2 = new Slider('#translapiz', {
                formatter: function(value) {
                    return '' + value;
                }            
                });          
            slider2.on("slide", function(sliderValue) {
	           document.getElementById("infotam2").textContent = sliderValue;
            });
            
            
            // Mostrar mensaje en el pie
            editor.mostrarMensajePie('Modo lápiz activado');
            
            console.log('Cambiado a estado 8');
        }
    
    
    if(num == 9)
        {
            editor.estado = 9;
            
            editor.eliminarSeleccionGlobal();
            editor.eliminarDragGlobal();  
         
            // Eliminacion de la capa de propiedades si la hay
              editor.borrarCapaPorId("datos_propiedades");
            
            // Muestra la ventana de propiedades en el caso de cambiar a crearRectangulo
              editor.mostrarPropiedades(data.propiedades.crearPolyline);
            
            // Se cambia el estilo del menu izquierda
            editor.CambiarEstiloMenuIzquierdo(capa);
            
            
            // Se inicializa los sliders que la zona de propiedades
            // slider1 para el grosor del lapiz
            var slider1 = new Slider('#grosor', {
                formatter: function(value) {
                    return '' + value;
                }            
                });        
            slider1.on("slide", function(sliderValue) {
	           document.getElementById("infotam").textContent = sliderValue;
            });
            
            
            // Se inicializa el slider para la transparencia del lápiz
            var slider2 = new Slider('#translapiz', {
                formatter: function(value) {
                    return '' + value;
                }            
                });          
            slider2.on("slide", function(sliderValue) {
	           document.getElementById("infotam2").textContent = sliderValue;
            });
            
            
            // Mostrar mensaje en el pie
            editor.mostrarMensajePie('Modo dibujados polilineas activado');
            
            console.log('Cambiado a estado 9');
        }
    
    
    if(num == 10)
        {
            editor.estado = 10;
                
            // Permitir la edicion y seleccion de texto 
            editor.eliminarSeleccionGlobal();
            editor.eliminarDragGlobal();        
            
            // Eliminacion de la capa de propiedades si la hay
            editor.borrarCapaPorId("datos_propiedades");
            
            // Se cambia el estilo del menu izquierda
            editor.CambiarEstiloMenuIzquierdo(capa);
            
            // Muestra la ventana de propiedades en el caso de cambiar a crear forma1
            editor.mostrarPropiedades(data.propiedades.exportar);
            
            // Se activa la selección de texto, para modificar el nombre del fichero
            document.onselectstart = function() {return true;}
            document.onmousedown = function() {return true;}
            
            // Mostrar mensaje en el pie
            editor.mostrarMensajePie('Exportar');
            
            console.log('Cambiado a estado 10');
        }
    
    if(num == 11)
        {
            editor.estado = 11;
            
             editor.eliminarSeleccionGlobal();
             editor.eliminarDragGlobal();
            
            // Eliminacion de la capa de propiedades si la hay
            editor.borrarCapaPorId("datos_propiedades");
            
            // Se cambia el estilo del menu izquierda
            editor.CambiarEstiloMenuIzquierdo(capa);
            
            // Muestra la ventana de propiedades en el caso de cambiar a crear forma1
            editor.mostrarPropiedades(data.propiedades.importar);
            
            // Mostrar mensaje en el pie
            editor.mostrarMensajePie('Importar');
            
            console.log('Cambiado a estado 11');
        }
    
    if(num == 12)
        {
            editor.estado = 12;
            
            editor.eliminarSeleccionGlobal();
            editor.eliminarDragGlobal();  
         
            // Eliminacion de la capa de propiedades si la hay
              editor.borrarCapaPorId("datos_propiedades");
            
            // Muestra la ventana de propiedades en el caso de cambiar a crearRectangulo
              editor.mostrarPropiedades(data.propiedades.crearPoligono);
            
            // Se cambia el estilo del menu izquierda
            editor.CambiarEstiloMenuIzquierdo(capa);
            
            
            // Se inicializa los sliders que la zona de propiedades
            // slider1 para el grosor del lapiz
            var slider1 = new Slider('#tam-borde', {
                formatter: function(value) {
                    return '' + value;
                }            
                });        
            slider1.on("slide", function(sliderValue) {
	           document.getElementById("infotam").textContent = sliderValue;
            });
            
            
            // Se inicializa el slider para la transparencia del borde del poligono
            var slider2 = new Slider('#transBorde', {
                formatter: function(value) {
                    return '' + value;
                }            
                });          
            slider2.on("slide", function(sliderValue) {
	           document.getElementById("infotam2").textContent = sliderValue;
            });
            
            // Se inicializa el slider para la transparencia del fondo del poligono
            var slider3 = new Slider('#transFondo', {
                formatter: function(value) {
                    return '' + value;
                }            
                });          
            slider3.on("slide", function(sliderValue) {
	           document.getElementById("infotam3").textContent = sliderValue;
            });
            
            
            
            // Mostrar mensaje en el pie
            editor.mostrarMensajePie('Modo dibujado de polígonos');
            
            console.log('Cambiado a estado 12');
        }
    
    
    if(num == 13)
        {
            editor.estado = 13;
            
            editor.eliminarSeleccionGlobal();
            editor.eliminarDragGlobal();  
         
            // Eliminacion de la capa de propiedades si la hay
              editor.borrarCapaPorId("datos_propiedades");
            
            // Muestra la ventana de propiedades en el caso de cambiar a crearRectangulo
              editor.mostrarPropiedades(data.propiedades.crearEstrella);
            
            // Se cambia el estilo del menu izquierda
            editor.CambiarEstiloMenuIzquierdo(capa);
            
            
            // Se inicializa los sliders que la zona de propiedades
            // slider1 para el grosor del borde de la estrella
            var slider1 = new Slider('#tam-borde', {
                formatter: function(value) {
                    return '' + value;
                }            
                });        
            slider1.on("slide", function(sliderValue) {
	           document.getElementById("infotam").textContent = sliderValue;
            });
            
            
            
            // Se inicializa el slider para la transparencia de la estrella
            var slider2 = new Slider('#transBorde', {
                formatter: function(value) {
                    return '' + value;
                }            
                });          
            slider2.on("slide", function(sliderValue) {
	           document.getElementById("infotam2").textContent = sliderValue;
            });
            
            
            
            // Se inicializa el slider para las esquinas de la estrella
            var slider3 = new Slider('#esquinas-estrella', {
                formatter: function(value) {
                    return '' + value;
                }            
                });          
            slider3.on("slide", function(sliderValue) {
	           document.getElementById("infotam4").textContent = sliderValue;
            });
               
                        

            // Se inicializa el slider para la transparencia del fondo
            var slider4 = new Slider('#transFondo', {
                formatter: function(value) {
                    return '' + value;
                }            
                });          
            slider4.on("slide", function(sliderValue) {
	           document.getElementById("infotam3").textContent = sliderValue;
            }); 
            
            
            
            
            // Mostrar mensaje en el pie
            editor.mostrarMensajePie('Modo dibujado de estrellas');
            
            console.log('Cambiado a estado 13');
        }
    
    
        
    
    
    // Reiniciar plugin jscolor para que cargue correctamente las 
    // paletas de colores generadas en los campos de propiedades
    jscolor.installByClassName("jscolor");
    
    
};// fin cambioEstado function





// Cambia los estilos del menu izquierda al realizarse pulsaciones: cambios de estado
editor.CambiarEstiloMenuIzquierdo = function(capa)
{
    
    // Si las capas son iguales, no se hace nada
    if(capa!=editor.capaEstadoSelec)
     {   
    
    // Si hay capa, es el caso de seleccion por un usuario
        if(capa)
        {
            capa.classList.add("izq_selec");    

            // Si hay una seleccion anterior, borra la seleccion anterior
            if(editor.capaEstadoSelec !=null)
            {
                editor.capaEstadoSelec.classList.remove("izq_selec");
            }          

            editor.capaEstadoSelec = capa;    
        }
     }
    
    
    
    
};


console.log('Modulo de Estados iniciado');