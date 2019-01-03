// ESTADO 1 (Seleccion)
// Selecciona el objetivo clickado en pantalla
editor.seleccionar = function(evt, etiqueta)
{
    
    
    // Si esta en el estado 1, se puede seleccionar
    if(editor.estado==1)
    {
        // Si hay una seleccion anterior la elimina
        if(editor.seleccionado != null)
            {
               // Se comprueba condiciones especiales para deseleccionar selecciones profundas
                if(editor.seleccionado.attr('tipo')=='polyline' && editor.seleccionado.attr('tipoSeleccion')==1)  // Caso para la polilinea
                    {
                         editor.seleccionado.selectize(false, {deepSelect:true});
                         editor.seleccionado.attr('tipoSeleccion',0);
                    }
                else   // deSeleccion normal
                    {
                        editor.seleccionado.selectize(false);
                    }       
            }   

        //console.log(evt);
        //console.log(evt.offsetX+"  "+evt.offsetY);

        var id = etiqueta.id;    
        var figura = SVG.get(id);

        // Propiedades por defecto de la seleccion
        figura.selectize({rotationPoint: true,
                        deepSelect: false});
        
        figura.resize({snapToGrid: 1,    // numero de pixels que redimensiona
                       snapToAngle: 1});// tamaño del angulo por el que rota
        
        editor.seleccionado = figura;
        
        
        // Se introcuce en una variable el string de la figura seleccionada    atras-adelante.js
        //var temp = figura.svg();
        //editor.seleccionadoString = editor.eliminarTagDeString('svg',temp); 
        editor.pulsarFigura(figura);
        
        // Se recoge el tipo asignado a la figura
        var tipo = figura.attr('tipo');
        
        
        // Se filtra dependiendo del tipo de objeto seleccionado y se
        // pasan los valores de la figura seleccionada a los campos de las opciones
        if(tipo == 'circulo')
        {         
            editor.seleccionEllipse(figura);
        }
        
        if(tipo == 'rectangulo')
        {            
            editor.seleccionRectangulo(figura);
        }
        
        if(tipo == 'linea')
        {            
            editor.seleccionLinea(figura);
        }   
        
        if(tipo == 'forma1')
        {            
            document.getElementById(id).addEventListener("resizing", editor.resizeForma1);
            editor.seleccionForma1(figura, id);
        } 
        
        if(tipo == 'forma2')
        {            
            document.getElementById(id).addEventListener("resizing", editor.resizeForma1);
            editor.seleccionForma2(figura, id);
        } 
        
        if(tipo == 'imagen')
        {            
            editor.seleccionImagen(figura);
        }
        
        if(tipo == 'polyline')
        {            
            editor.seleccionPolyline(figura);
        }
        
        if(tipo == 'poligono')
        {            
            editor.seleccionPoligono(figura);
        }
        
        if(tipo == 'estrella')
        {            
            editor.seleccionEstrella(figura);
        }
        
    }
};




editor.seleccionEllipse = function(figura)
{
    // Se activa la barra de propiedades del objeto seleccionado
    editor.mostrarPropiedades(data.propiedades.edicionCirculo);
            
    // Reiniciar plugin jscolor para que carge correctamente las 
    // paletas de colores generadas en los campos de propiedades
    jscolor.installByClassName("jscolor");
    
    // Se inicializa los sliders de la zona de propiedades
    
    
    // Se introducen los valores del objeto seleccionado en los campos
    
    // tam Borde
    var tamBordeCapa = document.getElementById("tam");           
    var tamBorde = figura.attr('stroke-width');
    var transFondo = figura.attr('fill-opacity');
    var transBorde = figura.attr('stroke-opacity');
    
        // Slider 1 para el tamaño del borde
        var slider1 = new Slider('#tam', {
            formatter: function(value) 
            {
                document.getElementById("infotam").textContent = value;
                return '' + value;
            },  
            value : tamBorde           
            });

        slider1.on("slide", function(sliderValue) 
        {
            document.getElementById("infotam").textContent = sliderValue;
            editor.cambiarTamBordeElipse(sliderValue);
        });
    
        
    // slider2 para la transparencia del fondo
        var slider2 = new Slider('#tam2', {
            formatter: function(value) 
            {
                document.getElementById("infotam2").textContent = value;
                return '' + value;
            },  
            value : transFondo        
            });

        slider2.on("slide", function(sliderValue) 
        {
            document.getElementById("infotam2").textContent = sliderValue;
            editor.cambiarTransparenciaFondo(sliderValue);
        });
    
        // slider3 para la transparencia del borde
        var slider3 = new Slider('#tam3', {
            formatter: function(value) 
            {
                document.getElementById("infotam3").textContent = value;
                return '' + value;
            },  
            value : transBorde           
            });

        slider3.on("slide", function(sliderValue) 
        {
            document.getElementById("infotam3").textContent = sliderValue;
            editor.cambiarTransparenciaBorde(sliderValue);
        });
    
    
    
    // Color de borde
    var colorBordeCapa = document.getElementById("colorborde");
    var colorBorde = figura.attr('stroke');
    colorBordeCapa.jscolor.fromString(colorBorde);

    // Color de fondo
    var colorFondoCapa = document.getElementById("colorfondo");
    var colorFondo =  figura.attr('fill');
    colorFondoCapa.jscolor.fromString(colorFondo);
    
    // Mostrar mensaje en el pie de pagina
     editor.mostrarMensajePie('Circulo seleccionado');
    
    
};



editor.seleccionRectangulo = function(figura)
{
    // Se activa la barra de propiedades del objeto seleccionado
    editor.mostrarPropiedades(data.propiedades.edicionRectangulo);  
            
    // Reiniciar plugin jscolor para que carge correctamente las 
    // paletas de colores generadas en los campos de propiedades
    jscolor.installByClassName("jscolor");
    
    
    
    // Se introducen los valores del objeto seleccionado en el formulario      
    var tamBordeCapa = document.getElementById("tam");  
    var tamBorde = figura.attr('stroke-width');
    var transFondo = figura.attr('fill-opacity');
    var transBorde = figura.attr('stroke-opacity');
    
    
        // Se inicializa los sliders de la zona de propiedades
        // slider 1 para el tamaño del borde
        var slider1 = new Slider('#tam', {
            formatter: function(value) 
            {
                document.getElementById("infotam").textContent = value;
                return '' + value;
            },  
            value : tamBorde           
            });

        slider1.on("slide", function(sliderValue) 
        {
            document.getElementById("infotam").textContent = sliderValue;
            editor.cambiarTamBordeRectangulo(sliderValue);
        });
    
    
        // slider2 para la transparencia del fondo
        var slider2 = new Slider('#tam2', {
            formatter: function(value) 
            {
                document.getElementById("infotam2").textContent = value;
                return '' + value;
            },  
            value : transFondo        
            });

        slider2.on("slide", function(sliderValue) 
        {
            document.getElementById("infotam2").textContent = sliderValue;
            editor.cambiarTransparenciaFondo(sliderValue);
        });
    
        // slider3 para la transparencia del borde
        var slider3 = new Slider('#tam3', {
            formatter: function(value) 
            {
                document.getElementById("infotam3").textContent = value;
                return '' + value;
            },  
            value : transBorde           
            });

        slider3.on("slide", function(sliderValue) 
        {
            document.getElementById("infotam3").textContent = sliderValue;
            editor.cambiarTransparenciaBorde(sliderValue);
        });
    
    // Color de borde
    var colorBordeCapa = document.getElementById("colorborde");
    var colorBorde = figura.attr('stroke');
    colorBordeCapa.jscolor.fromString(colorBorde);
    
     
    // Color de fondo
    var colorFondoCapa = document.getElementById("colorfondo");
    var colorFondo =  figura.attr('fill');
    colorFondoCapa.jscolor.fromString(colorFondo);
               
    // Alto
    //var altoRec = document.getElementById("alto_rec");
    //altoRec.value = figura.attr('height');
    
    // Ancho
    //var anchoRec = document.getElementById("ancho_rec");
    //anchoRec.value = figura.attr('width');
    
    
    // Mostrar mensaje en el pie de pagina
     editor.mostrarMensajePie('Rectangulo seleccionado');
    
    
};



editor.seleccionLinea = function(figura)
{
    // Se activa la barra de propiedades del objeto seleccionado
    editor.mostrarPropiedades(data.propiedades.edicionLinea);
    
    // Reiniciar plugin jscolor para que carge correctamente las 
    // paletas de colores generadas en los campos de propiedades
    jscolor.installByClassName("jscolor");
    
    // Se introducen los valores del objeto seleccionado en el formulario
    var grosorCapa = document.getElementById("grosor");
    var grosor = figura.attr('stroke-width');
    var transRecta = figura.attr('stroke-opacity');
    
        // Slider 1 para el grosor de la recta
        var slider1 = new Slider('#grosor', {
            formatter: function(value) 
            {
                document.getElementById("infotam").textContent = value;
                return '' + value;
            },  
            value : grosor           
            });

        slider1.on("slide", function(sliderValue) 
        {
            //console.log(sliderValue);
            document.getElementById("infotam").textContent = sliderValue;
            editor.cambiarGrosorLinea(sliderValue);
        });
    
    // slider 2 para la transparencia de la recta
        var slider2 = new Slider('#tam2', {
            formatter: function(value) 
            {
                document.getElementById("infotam2").textContent = value;
                return '' + value;
            },  
            value : transRecta       
            });

        slider2.on("slide", function(sliderValue) 
        {
            document.getElementById("infotam2").textContent = sliderValue;
            editor.cambiarTransparenciaBorde(sliderValue);
        });
    
    // Color
    var colorCapa = document.getElementById("colorborde");
    var color = figura.attr('stroke');
    colorCapa.jscolor.fromString(color);
    
    // Mostrar mensaje en el pie de pagina
     editor.mostrarMensajePie('Recta seleccionada');  
};



editor.seleccionPolyline = function(figura)
{
    // Se activa la barra de propiedades del objeto seleccionado
    editor.mostrarPropiedades(data.propiedades.edicionPolyline);
    
    // Reiniciar plugin jscolor para que carge correctamente las 
    // paletas de colores generadas en los campos de propiedades
    jscolor.installByClassName("jscolor");
    
    // Se introducen los valores del objeto seleccionado en el formulario
    var grosorCapa = document.getElementById("grosor");
    var grosor = figura.attr('stroke-width');
    var transparencia = figura.attr('opacity');  
    
    
    
        // Slider 1 para el grosor de la polyline
        var slider1 = new Slider('#grosor', {
            formatter: function(value) 
            {
                document.getElementById("infotam").textContent = value;
                return '' + value;
            },  
            value : grosor           
            });

        slider1.on("slide", function(sliderValue) 
        {
            //console.log(sliderValue);
            document.getElementById("infotam").textContent = sliderValue;
            editor.cambiarGrosorPolyline(sliderValue);
        });
    
    
        // slider 2 para la transparencia de la polyline
        var slider2 = new Slider('#trans', {
            formatter: function(value) 
            {
                document.getElementById("infotam2").textContent = value;
                return '' + value;
            },  
            value : transparencia     
            });

        slider2.on("slide", function(sliderValue) 
        {
            document.getElementById("infotam2").textContent = sliderValue;
            editor.cambiarTransparenciaBorde(sliderValue);
        });
    
       
    // Color
    var colorCapa = document.getElementById("color");
    var color = figura.attr('stroke');
    colorCapa.jscolor.fromString(color);
    
    // Mostrar mensaje en el pie de pagina
     editor.mostrarMensajePie('Polilinea seleccionada seleccionada');  
};




editor.seleccionPoligono = function(figura)
{
    // Se activa la barra de propiedades del objeto seleccionado
    editor.mostrarPropiedades(data.propiedades.edicionPoligono);
    
    // Reiniciar plugin jscolor para que carge correctamente las 
    // paletas de colores generadas en los campos de propiedades
    jscolor.installByClassName("jscolor");
    
    // Se introducen los valores del objeto seleccionado en el formulario
    var grosorCapa = document.getElementById("grosor");
    var grosor = figura.attr('stroke-width');
    var transparenciaBorde = figura.attr('stroke-opacity');  
    var transparenciaFondo = figura.attr('fill-opacity'); 
    
    
    
        // Slider 1 para el tam del borde del poligono
        var slider1 = new Slider('#tamborde', {
            formatter: function(value) 
            {
                document.getElementById("infotam").textContent = value;
                return '' + value;
            },  
            value : grosor           
            });

        slider1.on("slide", function(sliderValue) 
        {
            //console.log(sliderValue);
            document.getElementById("infotam").textContent = sliderValue;
            editor.cambiarGrosorPolyline(sliderValue);
        });
    
    
        // slider 2 para la transparencia del borde del poligono
        var slider2 = new Slider('#trans', {
            formatter: function(value) 
            {
                document.getElementById("infotam2").textContent = value;
                return '' + value;
            },  
            value : transparenciaBorde     
            });

        slider2.on("slide", function(sliderValue) 
        {
            document.getElementById("infotam2").textContent = sliderValue;
            editor.cambiarTransparenciaBordePoligono(sliderValue);
        });
    

        // slider 3 para la transparencia del fondo del poligono
        var slider3 = new Slider('#trans2', {
            formatter: function(value) 
            {
                document.getElementById("infotam3").textContent = value;
                return '' + value;
            },  
            value : transparenciaFondo     
            });

        slider3.on("slide", function(sliderValue) 
        {
            document.getElementById("infotam3").textContent = sliderValue;
            editor.cambiarTransparenciaFondoPoligono(sliderValue);
        });
    
    
    
       
    // Color Borde
    var colorCapa = document.getElementById("color");
    var colorBorde = figura.attr('stroke');
    colorCapa.jscolor.fromString(colorBorde);
    
    // Color Fondo
    var colorCapa = document.getElementById("color");
    var colorFondo = figura.attr('fill');
    colorCapa.jscolor.fromString(colorBorde);
    
    
    // Mostrar mensaje en el pie de pagina
     editor.mostrarMensajePie('Poligono seleccionada');  
};






// Cambia entre los 2 modos de seleccion para la polilinea
editor.cambiarModoSeleccionPolyline = function(ev, capa)
{
    // Se pilla la figura seleccionada
    var figura = editor.seleccionado;
   
    // Antes de seleccionar se comprueba que tipo de seleccion se tenia y se deselecciona
    if(figura.attr('tipoSeleccion')!=0)  // deSeleccion profunda
        {
             figura.selectize(false, {deepSelect:true});
        }
    else   // deSeleccion normal
        {
             figura.selectize(false);
        }
   
    // Se realiza la seleccion dependiendo de la opcion elegida por el usuario
    if(capa.checked == true)
        {
            figura.selectize({deepSelect: true});
            figura.attr('tipoSeleccion',1);
        }
    else
        {
            figura.selectize({deepSelect: false});
            figura.attr('tipoSeleccion',0);
        }
    
    console.log(figura.attr());
}




editor.seleccionImagen = function(figura)
{
    // Se activa la barra de propiedades del objeto seleccionado
    editor.mostrarPropiedades(data.propiedades.edicionImagen);  
            
    // Reiniciar plugin jscolor para que carge correctamente las 
    // paletas de colores generadas en los campos de propiedades
    jscolor.installByClassName("jscolor");
    
    
    // Mostrar mensaje en el pie de pagina
     editor.mostrarMensajePie('Imagen seleccionada');
    
    
};



editor.seleccionForma1 = function(figura)
{
    
    // Se activa la barra de propiedades del objeto seleccionado
    editor.mostrarPropiedades(data.propiedades.edicionForma1);
    
    // Reiniciar plugin jscolor para que carge correctamente las 
    // paletas de colores generadas en los campos de propiedades
    jscolor.installByClassName("jscolor");
    
    
    // Se recogen los valores actuales de la figura
    var idPatron1 = figura.attr('idPatron1');
    var patron = SVG.get(idPatron1);
    var polyline = patron.first();    
    
    console.log(polyline.attr());
    var tamBorde = polyline.attr('stroke-width');
    var transBorde = polyline.attr('opacity');
    var puntas = figura.attr('puntas');
    
    // Se inicializa los sliders de la zona de propiedades
        // slider 1 para el tamaño del borde
        var slider1 = new Slider('#tam', {
            formatter: function(value) 
            {
                document.getElementById("infotam").textContent = value;
                return '' + value;
            },  
            value : tamBorde           
            });

        slider1.on("slide", function(sliderValue) 
        {
            document.getElementById("infotam").textContent = sliderValue;
            editor.cambiarTamForma1(sliderValue);
        });
    
    
        // slider2 para la transparencia del fondo
        var slider2 = new Slider('#tam2', {
            formatter: function(value) 
            {
                document.getElementById("infotam2").textContent = value;
                return '' + value;
            },  
            value : transBorde        
            });

        slider2.on("slide", function(sliderValue) 
        {
            document.getElementById("infotam2").textContent = sliderValue;
            editor.cambiarTransparenciaForma1(sliderValue);
        });
    
    
    // slider3 para las puntas
        var slider2 = new Slider('#tam3', {
            formatter: function(value) 
            {
                document.getElementById("infotam3").textContent = value;
                return '' + value;
            },  
            value : puntas     
            });

        slider2.on("slide", function(sliderValue) 
        {
            document.getElementById("infotam3").textContent = sliderValue;
            editor.cambiarPuntasForma1(sliderValue);
        });

    
    // Color de borde
    var colorBordeCapa = document.getElementById("colorborde");
    var colorBorde = polyline.attr('stroke');
    colorBordeCapa.jscolor.fromString(colorBorde);
    
    
    // Mostrar mensaje en el pie de pagina
     editor.mostrarMensajePie('Forma personalizada 1 seleccionada');
};



editor.seleccionForma2 = function(figura)
{
    
    // Se activa la barra de propiedades del objeto seleccionado
    editor.mostrarPropiedades(data.propiedades.edicionForma2);
    
    // Reiniciar plugin jscolor para que carge correctamente las 
    // paletas de colores generadas en los campos de propiedades
    jscolor.installByClassName("jscolor");
    
    
    // Se recogen los valores actuales de la figura
    var idPatron1 = figura.attr('idPatron1');
    var patron = SVG.get(idPatron1);
    var polyline = patron.first();    
    
    //console.log(polyline.attr());
    var tamBorde = polyline.attr('stroke-width');
    var transBorde = polyline.attr('opacity');
    var puntas = figura.attr('puntas');
    
    // Se inicializa los sliders de la zona de propiedades
        // slider 1 para el tamaño del borde
        var slider1 = new Slider('#tam', {
            formatter: function(value) 
            {
                document.getElementById("infotam").textContent = value;
                return '' + value;
            },  
            value : tamBorde           
            });

        slider1.on("slide", function(sliderValue) 
        {
            document.getElementById("infotam").textContent = sliderValue;
            editor.cambiarTamForma1(sliderValue);
        });
    
    
        // slider2 para la transparencia del fondo
        var slider2 = new Slider('#tam2', {
            formatter: function(value) 
            {
                document.getElementById("infotam2").textContent = value;
                return '' + value;
            },  
            value : transBorde        
            });

        slider2.on("slide", function(sliderValue) 
        {
            document.getElementById("infotam2").textContent = sliderValue;
            editor.cambiarTransparenciaForma1(sliderValue);
        });
    
    
    // slider3 para las puntas
        var slider2 = new Slider('#tam3', {
            formatter: function(value) 
            {
                document.getElementById("infotam3").textContent = value;
                return '' + value;
            },  
            value : puntas     
            });

        slider2.on("slide", function(sliderValue) 
        {
            document.getElementById("infotam3").textContent = sliderValue;
            editor.cambiarPuntasForma1(sliderValue);
        });

    
    // Color de borde
    var colorBordeCapa = document.getElementById("colorborde");
    var colorBorde = polyline.attr('stroke');
    colorBordeCapa.jscolor.fromString(colorBorde);
    
    
    // Mostrar mensaje en el pie de pagina
     editor.mostrarMensajePie('Forma personalizada 2 seleccionada');
};




// La esquina es un poligono, asi que practicamente usa todas las funciones y utilidades
// de la seleccion del poligono

editor.seleccionEstrella = function(figura)
{
    // Se activa la barra de propiedades del objeto seleccionado
    editor.mostrarPropiedades(data.propiedades.edicionEstrella);
    
    // Reiniciar plugin jscolor para que carge correctamente las 
    // paletas de colores generadas en los campos de propiedades
    jscolor.installByClassName("jscolor");
    
    // Se introducen los valores del objeto seleccionado en el formulario
    var grosorCapa = document.getElementById("grosor");
    var grosor = figura.attr('stroke-width');
    var transparenciaBorde = figura.attr('stroke-opacity');  
    var transparenciaFondo = figura.attr('fill-opacity'); 
    var esquinas = figura.attr('puntas');
    
    
    
        // Slider 1 para el tam del borde del poligono
        var slider1 = new Slider('#tamborde', {
            formatter: function(value) 
            {
                document.getElementById("infotam").textContent = value;
                return '' + value;
            },  
            value : grosor           
            });

        slider1.on("slide", function(sliderValue) 
        {
            //console.log(sliderValue);
            document.getElementById("infotam").textContent = sliderValue;
            editor.cambiarGrosorPolyline(sliderValue);
        });
    
    
        // slider 2 para la transparencia del borde del poligono
        var slider2 = new Slider('#trans', {
            formatter: function(value) 
            {
                document.getElementById("infotam2").textContent = value;
                return '' + value;
            },  
            value : transparenciaBorde     
            });

        slider2.on("slide", function(sliderValue) 
        {
            document.getElementById("infotam2").textContent = sliderValue;
            editor.cambiarTransparenciaBordePoligono(sliderValue);
        });
    

        // slider 3 para la transparencia del fondo del poligono
        var slider3 = new Slider('#trans2', {
            formatter: function(value) 
            {
                document.getElementById("infotam3").textContent = value;
                return '' + value;
            },  
            value : transparenciaFondo     
            });

        slider3.on("slide", function(sliderValue) 
        {
            document.getElementById("infotam3").textContent = sliderValue;
            editor.cambiarTransparenciaFondoPoligono(sliderValue);
        });
    
    
     /*   
    // Slider 4 para las esquinas de la estrella
        var slider4 = new Slider('#esquinasEstrella', {
            formatter: function(value) 
            {
                document.getElementById("infotam4").textContent = value;
                return '' + value;
            },  
            value : esquinas           
            });

        slider4.on("slide", function(sliderValue) 
        {
            console.log(sliderValue);
            document.getElementById("infotam").textContent = sliderValue;
            //editor.cambiarGrosorPolyline(sliderValue);
        });
    */
    
    
    
    
       
    // Color Borde
    var colorCapa = document.getElementById("color");
    var colorBorde = figura.attr('stroke');
    colorCapa.jscolor.fromString(colorBorde);
    
    // Color Fondo
    var colorCapa = document.getElementById("color");
    var colorFondo = figura.attr('fill');
    colorCapa.jscolor.fromString(colorBorde);
    
    
    // Mostrar mensaje en el pie de pagina
     editor.mostrarMensajePie('Estrella seleccionada');  
};







// Redimension de las formas personalizadas 1 y 2
editor.resizeForma1 = function(ev, figura)
{
    // Se pilla la figura para poder ser trabajada
    
    
    // si no hay evento se pasa la figura por parametro
    if(ev)
        {
            var etiqueta = ev.target;
            var id = etiqueta.id;
            figura = SVG.get(id);
        }
    
    
    var ancho = figura.attr('width');
    var alto = figura.attr('height')
    var puntas = figura.attr('puntas');
    
    console.log(ancho+'    '+alto+'     '+puntas); 
    
    // Se accede a la id del patron y de la polilinea que hace el dibujo
    var idPatron1 = figura.attr('idPatron1');
    var patron = SVG.get(idPatron1);
    var polyline = patron.first();      
                 
    var porcentaje = 1/puntas;
    var anchoPuntas = ancho/puntas;    

    patron.attr('width',porcentaje);  

    // Funcion magica que modifica la polilinea segun los tamaños y las puntas
    polyline.plot([[0,alto*0.1],[anchoPuntas/4,alto/2], [anchoPuntas/2,alto*0.9], [(anchoPuntas/4)*3,alto/2],[anchoPuntas,alto*0.1]]);
    
    
    
};



console.log('Modulo de selección iniciado');
