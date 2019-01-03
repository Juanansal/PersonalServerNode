
/**************************************************/
// CIRCULO ESTADO 2
/**************************************************/

// Inicio del dibujado del circulo, click en el editor en estado 2 
editor.dibujadoCirculo_Inicio = function(ev)
{
     editor.dibujando = true;
            
    //console.log(ev.layerX+"  "+ev.layerY);
    console.log('Empezando a dibujar el circulo');

    // Crea el circulo y lo inserta en la variable dibujando que almacena el circulo
    // hasta que se deje de hacer click

    
    // Se recupera los valores del zoom y la camara
    var datosCanvas = editor.CANVAS.viewbox();
    var zoom = datosCanvas.zoom;
    var xCanvas = datosCanvas.x;
    var yCanvas = datosCanvas.y;
    
    var circulo = editor.dibujarCirculo((ev.layerX/zoom)+xCanvas, (ev.layerY/zoom)+yCanvas, 0);

    // Se introducen los parametros iniciales que hay en la zona de propiedades
    var tamBorde = document.getElementById("tam").value;
    var colorBorde = document.getElementById("colorborde").jscolor.toHEXString();
    var colorFondo = document.getElementById("colorfondo").jscolor.toHEXString();
    var transBorde = document.getElementById("transborde").value;
    var transFondo = document.getElementById("transfondo").value;
    

     circulo.attr({
     'fill': colorFondo,
     'fill-opacity': transFondo,
     'stroke-opacity': transBorde,     
     'stroke': colorBorde,
     'stroke-width': tamBorde,
     'tipo': 'circulo'         
     })
            
     editor.figuraDibujando = circulo;  
};



// Dibujado del circulo, mientras se mantiene el cliz izquierda
editor.dibujadoCirculo_Dibujando = function(ev)
{
   if(editor.dibujando== true)
        {
            //console.log('Dibujando el circulo');
                    
            // Hay que guardar el punto inicial y poner de radio la distancia
            // entre el punto inicial y el punto del raton
                    
            // Formula de la distancia        var d = Math.sqrt( (x2-=x1)*x2 + (y2-=y1)*y2 );
                    
            //  var d = Math.sqrt( (x2-=x1)*x2 + (y2-=y1)*y2 );
                    
            
            // Se recupera los valores del zoom y la camara
            var datosCanvas = editor.CANVAS.viewbox();
            var zoom = datosCanvas.zoom;
            var xCanvas = datosCanvas.x;
            var yCanvas = datosCanvas.y;
            
            // Asignacion de valores para comparan el centro con la posicion del raton
                    
            var x1 = editor.figuraDibujando.attr('cx');  // x Centro del circulo
            var y1 = editor.figuraDibujando.attr('cy');  // y Centro del circulo           
            
            //console.log(xCanvas+'   '+yCanvas);     
            
            var x2 = (ev.layerX/zoom)+xCanvas; // x Posicion del raton + los valores de zoom y camara
            var y2 = (ev.layerY/zoom)+yCanvas; // y Posicion del raton + los valores de zoom y camara        
            
             // Calculo de la distancia
            var distancia = Math.sqrt( (x2-=x1)*x2 + (y2-=y1)*y2 );                    
            //console.log(x1+" "+y1+"  ----  "+x2+" "+x2+"       Distancia: "+distancia);
                   
            //console.log('x: '+x2+'    y: '+y2)
            //console.log(zoom+'  '+distancia);
            //console.log('----------------------------------------------------');
            //console.log('----------------------------------------------------');
            
             editor.cambiarTamElipse(editor.figuraDibujando,distancia,distancia);
          }  
};

editor.dibujadoCirculo_Final = function(ev)
{
    editor.dibujando = false;
    editor.figuraDibujando = null;
    console.log('Terminando de dibujar el circulo');
    
    // Se guarda el estado nuevo
    editor.guardarEstado();
    
    
    // Mostrar mensaje en el pie
    editor.mostrarMensajePie('Circulo dibujado correctamente');
};









/**************************************************/
// RECTANGULO ESTADO 3
/**************************************************/

editor.dibujadoRectangulo_Inicio = function(ev)
{
    editor.dibujando = true;
    console.log('Empezando a dibujar el rectangulo');

    // Crea un rectangulo y lo inserta en la variable dibujando
    // hasta que se deje de hacer click

    // Se recupera los valores del zoom y la camara
    var datosCanvas = editor.CANVAS.viewbox();
    var zoom = datosCanvas.zoom;
    var xCanvas = datosCanvas.x;
    var yCanvas = datosCanvas.y;
    
    var rect = editor.dibujarRectangulo((ev.layerX/zoom)+xCanvas, (ev.layerY/zoom)+yCanvas, 0, 0);
    
    // Se añaden 2 atributos extras con las posiciones iniciales para poder
    // cambiar el tamaño en todas direcciones con mayor facilidad
    rect.attr('xInicial',(ev.layerX/zoom)+xCanvas);
    rect.attr('yInicial',(ev.layerY/zoom)+yCanvas);


    // Se introducen los parametros inciales que hay en la zona de propiedades
    var tamBorde = document.getElementById("tam").value;  
    var colorBorde = document.getElementById("colorborde").jscolor.toHEXString();
    var colorFondo = document.getElementById("colorfondo").jscolor.toHEXString();
    var transBorde = document.getElementById("transborde").value;
    var transFondo = document.getElementById("transfondo").value;

    rect.attr({
     'fill': colorFondo,
     'fill-opacity': transFondo,
     'stroke-opacity': transBorde,    
     'stroke': colorBorde,
     'stroke-width': tamBorde,
     'tipo': 'rectangulo'    
    })
    
    editor.figuraDibujando = rect;
};



editor.dibujadoRectangulo_Dibujando = function(ev)
{
    if(editor.dibujando == true)
        {
            
          // Se recupera los valores del zoom y la camara
            var datosCanvas = editor.CANVAS.viewbox();
            var zoom = datosCanvas.zoom;
            var xCanvas = datosCanvas.x;
            var yCanvas = datosCanvas.y;
            
          // Se cambia el tamaño sumando la posicion inicial + la posicion actual del raton 
          // tanto del ancho como del alto                           
          var x = editor.figuraDibujando.attr('x'); 
          var y = editor.figuraDibujando.attr('y');                                      

          var anchoInicial = editor.figuraDibujando.attr('xInicial'); 
          var altoInicial = editor.figuraDibujando.attr('yInicial');   

          var ancho = (ev.layerX/zoom)+xCanvas - anchoInicial;
          var alto = (ev.layerY/zoom)+yCanvas - altoInicial;  


          //Si es negativo ancho o alto, se cambia la posicion inicial 


          if(ancho < 0 || alto < 0)
            {
                if(ancho<0)
                    {
                        ancho = anchoInicial - ((ev.layerX/zoom)+xCanvas);
                        //ancho = anchoInicial - ev.layerX;      
                        //console.log(anchoInicial+' - '+ ((ev.layerX/zoom)+xCanvas) +' = '+ancho);
                        
                        editor.figuraDibujando.attr('x',(ev.layerX/zoom)+xCanvas);
                    }

                if(alto<0)
                    {
                        alto = altoInicial - ((ev.layerY/zoom)+yCanvas);
                        editor.figuraDibujando.attr('y',(ev.layerY/zoom)+yCanvas);
                    }
            }
          //console.log(ancho+"  "+alto)    
          editor.cambiarTamRectangulo(editor.figuraDibujando,ancho,alto);
        }  
};


editor.dibujadoRectangulo_Final = function(ev)
{
    editor.dibujando = false;
    editor.figuraDibujando = null;       
    console.log('Terminando de dibujar el rectangulo');
    
    // Se guarda el estado nuevo
    editor.guardarEstado();
    
    // Mostrar mensaje en el pie
    editor.mostrarMensajePie('Rectangulo dibujado correctamente');
};










/**************************************************/
// LINEAS ESTADO 4
/**************************************************/

editor.dibujadoLinea_Inicio = function(ev)
{
    editor.dibujando = true;
            
    // Se recupera los valores del zoom y la camara
    var datosCanvas = editor.CANVAS.viewbox();
    var zoom = datosCanvas.zoom;
    var xCanvas = datosCanvas.x;
    var yCanvas = datosCanvas.y;
    
    //console.log(ev.layerX+"  "+ev.layerY);
    console.log('Empezando a dibujar la recta');

    // Crea la recta y lo inserta en la variable dibujando
    // hasta que se deje de hacer click

    // Al empezar a dibujar se coje la misma posicion tanto para el punto 1 como el 2
    var recta = editor.dibujarRecta(((ev.layerX/zoom)+xCanvas), ((ev.layerY/zoom)+yCanvas), ((ev.layerX/zoom)+xCanvas), ((ev.layerY/zoom)+yCanvas));


    // Se introducen los parametros iniciales que hay en la zona de propiedades
    var tamBorde = document.getElementById("tam").value;
    var colorBorde = document.getElementById("colorborde").jscolor.toHEXString();
    var transparencia = document.getElementById("transborde").value;

    recta.attr({
     'stroke-opacity': transparencia,
     'stroke': colorBorde,
     'stroke-width': tamBorde,
     'tipo': 'linea'
    })           
            
    editor.figuraDibujando = recta;  
};



editor.dibujadoLinea_Dibujando = function(ev)
{
    if(editor.dibujando== true)
        {
            // Se recupera los valores del zoom y la camara
            var datosCanvas = editor.CANVAS.viewbox();
            var zoom = datosCanvas.zoom;
            var xCanvas = datosCanvas.x;
            var yCanvas = datosCanvas.y;  
            
            // Se localiza la posicion del punto 1 Inicial y la posicion del punto 2 Raton                   
            var x1, y1, x2, y2;
            x1 = editor.figuraDibujando.attr('x1');
            y1 = editor.figuraDibujando.attr('y1');
            x2 = ((ev.layerX/zoom)+xCanvas);
            y2 = ((ev.layerY/zoom)+yCanvas);

            // Se realiza el movimiento del segundo punto 
            editor.cambiarTamRecta(editor.figuraDibujando, x1, y1, x2, y2);                 
        }
};



editor.dibujadoLinea_Final = function(ev)
{
    editor.dibujando = false;
    editor.figuraDibujando = null;       
    console.log('Terminando de dibujar la recta');
    
    // Se guarda el estado nuevo
    editor.guardarEstado();
    
    // Mostrar mensaje en el pie
    editor.mostrarMensajePie('Recta dibujada correctamente');
};






/**************************************************/
// FORMA PERSONALIZADA 1    ESTADO 5 o 6
/**************************************************/


editor.dibujadoForma1_Inicio = function(ev)
{
    editor.dibujando = true;
    console.log('Empezando a dibujar las formas personalizadas');

    // Se recupera los valores del zoom y la camara
    var datosCanvas = editor.CANVAS.viewbox();
    var zoom = datosCanvas.zoom;
    var xCanvas = datosCanvas.x;
    var yCanvas = datosCanvas.y;
    
    // Crea un rectangulo y lo inserta en la variable dibujando
    // hasta que se deje de hacer click

    var rect = editor.dibujarRectangulo(((ev.layerX/zoom)+xCanvas), ((ev.layerY/zoom)+yCanvas), 0, 0);

    // Se añaden 2 atributos extras con las posiciones iniciales para poder
    // cambiar el tamaño en todas direcciones con mayor facilidad
    rect.attr('xInicial',((ev.layerX/zoom)+xCanvas));
    rect.attr('yInicial',((ev.layerY/zoom)+yCanvas));



    // Se introducen los parametros inciales que hay en la zona de propiedades
    var tamBorde = document.getElementById("tamborde").value;
    var colorBorde = document.getElementById("colorborde").jscolor.toHEXString();
    var puntas = document.getElementById("puntas").value;
    var transparencia = document.getElementById("transborde").value;


    // Se crea el patron con la polyline y se añade al fondo del rectangulo
    var patron = editor.CANVAS.pattern(.25, 1, function(add) {
    add.polyline('0,0 20,100 40,200 60,100 80,0')
        })
    patron.attr('patternUnits','objectBoundingBox');  
    rect.fill(patron);

    // acceso rapido a la polilinea del patron
    var polyline = patron.first();

    // Se insertan las propiedades iniciales de la polyline
    polyline.attr({
        'fill-opacity': '0',
        'stroke': colorBorde,
        'opacity': transparencia,
        'fill': '#FFF',
        'stroke-width': tamBorde,
    });

        
    // Se añade el id del patron para acceder rapidamente a el a la hora del dibujado
    // y se inicializan las puntas (iteraciones de la forma personalizada)
    rect.attr('idPatron1',patron.attr('id'));
    //patron.first().attr('puntas',puntas);  // Al final las puntas no añadidas al atributo del rectangulo
    

    rect.attr({
     'fill-opacity': 1,
     'stroke': '#000',
     'stroke-width': 0,
     'puntas': puntas    
    })         
    
    // Dependiendo del estado se le asigna un tipo distinto a los atributos
    if(editor.estado == 5)
        {
            rect.attr('tipo','forma1');
        }
    if(editor.estado == 6)
        {
            rect.attr('tipo','forma2');
        }

    
    // Si el estado es = 6 Se crea la forma con los patrones indicados   
    if(editor.estado == 6)
        {
            var colorFiguras = document.getElementById("colorfiguras").jscolor.toHEXString();  
            
            var introducir1 = editor.CANVAS.ellipse(3, 3).fill(colorFiguras);
            var introducir2 = editor.CANVAS.ellipse(3, 3).fill(colorFiguras);
            var introducir3 = editor.CANVAS.ellipse(3, 3).fill(colorFiguras);


            polyline.marker('start', 3, 3, function(add) {
             add.add(introducir1);
            })

            polyline.marker('end', 3, 3, function(add) {
             add.add(introducir2);
            })

            polyline.marker('mid', 3, 3, function(add) {
             add.add(introducir3);
            console.log(add.attr());
            })   

        }
    editor.figuraDibujando = rect;
};


editor.dibujadoForma1_Dibujando = function(ev)
{
    if(editor.dibujando== true)
        {

          // Se recupera los valores del zoom y la camara
          var datosCanvas = editor.CANVAS.viewbox();
          var zoom = datosCanvas.zoom;
          var xCanvas = datosCanvas.x;
          var yCanvas = datosCanvas.y; 
            
          // Se cambia el tamaño sumando la posicion inicial + la posicion actual del raton 
          // tanto del ancho como del alto                           
          var x = editor.figuraDibujando.attr('x'); 
          var y = editor.figuraDibujando.attr('y');                                      

          var anchoInicial = editor.figuraDibujando.attr('xInicial'); 
          var altoInicial = editor.figuraDibujando.attr('yInicial');   

          var ancho = ((ev.layerX/zoom)+xCanvas) - anchoInicial;
          var alto = ((ev.layerY/zoom)+yCanvas) - altoInicial;  


          // Se modifica el patron dependiendo de la altura y anchura actual del rectangulo

         // Se accede a la id del patron y de la polilinea que hace el dibujo

         var idPatron1 = editor.figuraDibujando.attr('idPatron1');
         var patron = SVG.get(idPatron1);
         var polyline = patron.first();      



          // Se modifica el patron y la polilinea dependiendo del alto y ancho del rectangulo    

          //console.log(ancho+'   '+alto)      
          console.log(polyline.attr());  
          //console.log(patron.attr());    
          // "0,0 40,200 80,0"
          var puntas = editor.figuraDibujando.attr('puntas');                    
          var porcentaje = 1/puntas;
          var anchoPuntas = ancho/puntas;    
          console.log(anchoPuntas);

          patron.attr('width',porcentaje);  

          polyline.plot([[0,alto*0.1],[anchoPuntas/4,alto/2], [anchoPuntas/2,alto*0.9], [(anchoPuntas/4)*3,alto/2],[anchoPuntas,alto*0.1]]);

          // Si la altura o el ancho es menor de 0, la figura de mueve a las posiciones de 0
          // y no se dibuja
          if(ancho<0)
          {
              ancho=0;
          }
          if
          (alto<0) 
          {
              alto=0;
          }  


        console.log(ancho+"  "+alto)    
        editor.cambiarTamRectangulo(editor.figuraDibujando,ancho,alto);

      }
};


editor.dibujadoForma1_Final = function(ev)
{
    editor.dibujando = false;
    editor.figuraDibujando = null;
    
    // Mostrar mensajes informativos segun el estado
    if(editor.estado==5)
        {
            console.log('Terminando de dibujar la forma 1');
            editor.mostrarMensajePie('Forma personalizada 1 dibujada correctamente');
        }
    
    if(editor.estado==6)
        {
            console.log('Terminando de dibujar la forma 2');
            editor.mostrarMensajePie('Forma personalizada 2 dibujada correctamente');
        }
    
    // Se guarda el estado nuevo
    editor.guardarEstado();
    
};







/**************************************************/
//   IMAGENES   ESTADO 7
/**************************************************/

editor.dibujadoImagen_Inicio = function(ev)
{
    
    
   if(editor.imagenCargada)
       {                     
           // Se recupera los valores del zoom y la camara
            var datosCanvas = editor.CANVAS.viewbox();
            var zoom = datosCanvas.zoom;
            var xCanvas = datosCanvas.x;
            var yCanvas = datosCanvas.y;


            var imagen = editor.CANVAS.image(editor.imagenCargada);

           // Atributos iniciales
           imagen.attr({
             'xInicial': ((ev.layerX/zoom)+xCanvas),
             'yInicial': ((ev.layerY/zoom)+yCanvas),
             'primera': 0,    // excepcion para la primera iteración, para que fije el tamaño inicial en 1=alto, 1=ancho (excepcion en Dibujando)
             'tipo': 'imagen',
             'preserveAspectRatio': 'none'     
            })
           
           //console.log(imagen.attr());
           
           // Propiedades iniciales para seleccionar y drag
           imagen = editor.anadirPropiedades(imagen);
           
            editor.cambiarTamImagen(imagen,1,1);
            imagen.move(((ev.layerX/zoom)+xCanvas), ((ev.layerY/zoom)+yCanvas));


            //console.log(imagen.attr('width'));
            //console.log(imagen.attr('height'));

            editor.figuraDibujando = imagen;
            editor.dibujando = true;
       }
    else
       {
           // Mostrar mensaje en el pie
            editor.mostrarMensajePie('No se ha cargado ninguna imagen','#FF0000');
       }
};


editor.dibujadoImagen_Dibujando = function(ev)
{
    if(editor.dibujando == true)
        {
          
          // Se recupera los valores del zoom y la camara
          var datosCanvas = editor.CANVAS.viewbox();
          var zoom = datosCanvas.zoom;
          var xCanvas = datosCanvas.x;
          var yCanvas = datosCanvas.y; 

          // Se cambia el tamaño sumando la posicion inicial + la posicion actual del raton 
          // tanto del ancho como del alto                           
          var x = editor.figuraDibujando;                                   

          // Se leen los valores del click inicial    
          var anchoInicial = editor.figuraDibujando.attr('xInicial'); 
          var altoInicial = editor.figuraDibujando.attr('yInicial');       

          // Se calcula el ancho y alto dependiendo de la posicion del raton    
          var ancho = ((ev.layerX/zoom)+xCanvas) - anchoInicial;
          var alto = ((ev.layerY/zoom)+yCanvas) - altoInicial;  

          //Si alto o ancho es menor de 0, se actualica el tamaño a 0 (No se pinta)
          if(ancho<0 || alto<0)
              {
                  ancho = 1;
                  alto = 1;
              }

          // Se actualiza la imagen con los valores actuales  
          editor.cambiarTamImagen(editor.figuraDibujando,ancho,alto);
            
         //Si es la primera pasada actualizamos el tamaño a uno minusculo, para evitar
         // problemas de la carga de la imagen        
         if(editor.figuraDibujando.attr('primera') == 0)
             {
                  editor.cambiarTamImagen(editor.figuraDibujando,1,1);
                  editor.figuraDibujando.attr('primera',1);
             }   
        }     
};

editor.dibujadoImagen_Final = function(ev)
{
    //Si ancho o alto es menor de 5, no se pinta la imagen
     if(editor.dibujando == true)
         {
            var figura = editor.figuraDibujando;

            var ancho = figura.attr('width');
            var alto = figura.attr('height');  

            if(ancho<5 || alto<5)
            {
                figura.remove();
            }
            else
            {  
                // Se guarda el estado nuevo
                editor.guardarEstado();
            }
         }

    editor.dibujando = false;
    editor.figuraDibujando = null;
    console.log('Terminando de dibujar la imagen');
};







/**************************************************/
//   LAPIZ    ESTADO 8
/**************************************************/

editor.dibujadoLapiz_Inicio = function(ev)
{   
            
    // Se recupera los valores del zoom y la camara
    var datosCanvas = editor.CANVAS.viewbox();
    var zoom = datosCanvas.zoom;
    var xCanvas = datosCanvas.x;
    var yCanvas = datosCanvas.y;
    
    //console.log(ev.layerX+"  "+ev.layerY);
     console.log('Empezando a dibujar el lápiz');


    // punto inicial de la polilinea
    var polyline = editor.CANVAS.polyline([[((ev.layerX/zoom)+xCanvas),((ev.layerY/zoom)+yCanvas)]]);
    
    // Propiedades iniciales para seleccionar y drag
    polyline = editor.anadirPropiedades(polyline);
    
    // Se introducen los parametros iniciales que hay en la zona de propiedades
    var grosor = document.getElementById("grosor").value;
    var color = document.getElementById("colorlapiz").jscolor.toHEXString();
    var transparencia = document.getElementById("translapiz").value;
    
    // Se añaden los atributos iniciales
    polyline.fill('none');
    
    polyline.stroke
    ({ 
        'color': color, 
        'width': grosor, 
        'linecap': 'round', 
        'linejoin': 'round'
    });
    
    polyline.attr
    ({
        'tipo': 'polyline',
        'tipoSeleccion': 0,      // 0 - Normal (Polilinea completa),    1 - Profundo(punto por punto)
        'opacity': transparencia
        
        
    });
    
    editor.dibujando = true;
    editor.figuraDibujando = polyline;  
    
};


editor.dibujadoLapiz_Dibujando = function(ev)
{
    if(editor.dibujando == true)
        {
            console.log('Dibujando el lápiz');           
            
            // Se recupera los valores del zoom y la camara
            var datosCanvas = editor.CANVAS.viewbox();
            var zoom = datosCanvas.zoom;
            var xCanvas = datosCanvas.x;
            var yCanvas = datosCanvas.y;   

            // Se pillan las coordenadas del lapiz actual dibujandose  
            var figura = editor.figuraDibujando;
            var actualizar = figura.attr('points');

            // Se actualiza añadiendo la nueva coordenada
            actualizar = actualizar+' '+((ev.layerX/zoom)+xCanvas)+','+((ev.layerY/zoom)+yCanvas);
            
            // Se añade el nuevo punto a la polilinea
            figura.plot(actualizar);
            
        }  
};

editor.dibujadoLapiz_Final = function(ev)
{    
    editor.dibujando = false;
    editor.figuraDibujando = null;
    console.log('Terminando de dibujar el lápiz');
    
    // Se guarda el estado nuevo
    editor.guardarEstado();
    
    // Mostrar mensaje en el pie
    editor.mostrarMensajePie('Trazo dibujado correctamente');
};







/**************************************************/
//   POLYLINE    ESTADO 9
/**************************************************/

editor.dibujadoPolyline_Inicio = function(ev)
{   
            
    // Solo deben hacer esto la primera vez para cada polilinea
    if(editor.dibujando != true)
        {
            // Se recupera los valores del zoom y la camara
            var datosCanvas = editor.CANVAS.viewbox();
            var zoom = datosCanvas.zoom;
            var xCanvas = datosCanvas.x;
            var yCanvas = datosCanvas.y;

            //console.log(ev.layerX+"  "+ev.layerY);
             console.log('Empezando a dibujar la polilínea');


            // punto inicial de la polilinea
            var polyline = editor.CANVAS.polyline([[((ev.layerX/zoom)+xCanvas),((ev.layerY/zoom)+yCanvas)]]);

            // Propiedades iniciales para seleccionar y drag
            polyline = editor.anadirPropiedades(polyline);

            // Se introducen los parametros iniciales que hay en la zona de propiedades
            var grosor = document.getElementById("grosor").value;
            var color = document.getElementById("colorlapiz").jscolor.toHEXString();
            var transparencia = document.getElementById("translapiz").value;

            // Se añaden los atributos iniciales
            polyline.fill('none');

            polyline.stroke
            ({ 
                'color': color, 
                'width': grosor, 
                'linecap': 'round', 
                'linejoin': 'round'
            });

            polyline.attr
            ({
                'tipo': 'polyline',
                'tipoSeleccion': 0,      // 0 - Normal (Polilinea completa),    1 - Profundo(punto por punto)
                'opacity': transparencia
            });
    
            editor.dibujando = true;
            editor.figuraDibujando = polyline;  
        }
};


editor.dibujadoPolyline_Dibujando = function(ev)
{
    if(editor.dibujando == true)
        {
            console.log('Dibujando la polilinea');           
            
            // Se recupera los valores del zoom y la camara
            var datosCanvas = editor.CANVAS.viewbox();
            var zoom = datosCanvas.zoom;
            var xCanvas = datosCanvas.x;
            var yCanvas = datosCanvas.y;   

            // Se pillan las coordenadas del lapiz actual dibujandose  
            var figura = editor.figuraDibujando;
            var actualizar = figura.attr('points');

            // Se actualiza añadiendo la nueva coordenada
            actualizar = actualizar+' '+((ev.layerX/zoom)+xCanvas)+','+((ev.layerY/zoom)+yCanvas);
            
            // Se añade el nuevo punto a la polilinea
            figura.plot(actualizar);
            
        }   
};

editor.dibujadoPolyline_Final = function(ev)
{
    editor.dibujando = false;
    editor.figuraDibujando = null;
    console.log('Terminando de dibujar la polilínea');
    
    // Se guarda el estado nuevo
    editor.guardarEstado();
    
    // Mostrar mensaje en el pie
    editor.mostrarMensajePie('Polilinea dibujada correctamente');


};







/**************************************************/
//   POLIGONOS   ESTADO 12
/**************************************************/

editor.dibujadoPoligono_Inicio = function(ev)
{   
            
    // Solo deben hacer esto la primera vez para cada polilinea
    if(editor.dibujando != true)
        {
            // Se recupera los valores del zoom y la camara
            var datosCanvas = editor.CANVAS.viewbox();
            var zoom = datosCanvas.zoom;
            var xCanvas = datosCanvas.x;
            var yCanvas = datosCanvas.y;

            //console.log(ev.layerX+"  "+ev.layerY);
             console.log('Empezando a dibujar el polígono');


            // punto inicial de la polilinea
            var poligono = editor.CANVAS.polygon([[((ev.layerX/zoom)+xCanvas),((ev.layerY/zoom)+yCanvas)]]);

            // Propiedades iniciales para seleccionar y drag
            poligono = editor.anadirPropiedades(poligono);

            // Se introducen los parametros iniciales que hay en la zona de propiedades
            var tamBorde = document.getElementById("tam-borde").value;
            var colorBorde = document.getElementById("colorborde").jscolor.toHEXString();
            var colorFondo = document.getElementById("colorfondo").jscolor.toHEXString();
            var transparenciaBorde = document.getElementById("transBorde").value;
            var transparenciaFondo = document.getElementById("transFondo").value;

            // Se añaden los atributos iniciales

            poligono.stroke
            ({ 
                'linecap': 'round', 
                'linejoin': 'round'
            });
            
            poligono.attr
            ({
                'fill': colorFondo,
                'stroke': colorBorde,
                'stroke-width': tamBorde,
                'tipo': 'poligono',
                'tipoSeleccion': 0,      // 0 - Normal (Polilinea completa),    1 - Profundo(punto por punto)  // Sin uso provisional
                'stroke-opacity': transparenciaBorde,
                'fill-opacity': transparenciaFondo
            });
    
            editor.dibujando = true;
            editor.figuraDibujando = poligono;  
        }
};


editor.dibujadoPoligono_Dibujando = function(ev)
{
    if(editor.dibujando == true)
        {
            console.log('Dibujando la polilinea');           
            
            // Se recupera los valores del zoom y la camara
            var datosCanvas = editor.CANVAS.viewbox();
            var zoom = datosCanvas.zoom;
            var xCanvas = datosCanvas.x;
            var yCanvas = datosCanvas.y;   

            // Se pillan las coordenadas del lapiz actual dibujandose  
            var figura = editor.figuraDibujando;
            var actualizar = figura.attr('points');

            // Se actualiza añadiendo la nueva coordenada
            actualizar = actualizar+' '+((ev.layerX/zoom)+xCanvas)+','+((ev.layerY/zoom)+yCanvas);
            
            // Se añade el nuevo punto a la polilinea
            figura.plot(actualizar);
            
        }   
};

editor.dibujadoPoligono_Final = function(ev)
{
    editor.dibujando = false;
    editor.figuraDibujando = null;
    console.log('Terminando de dibujar el polígono');
    
    // Se guarda el estado nuevo
    editor.guardarEstado();
    
    // Mostrar mensaje en el pie
    editor.mostrarMensajePie('Polígono dibujado correctamente');


};



/**************************************************/
//   ESTRELLA   ESTADO 13
/**************************************************/

editor.dibujadoEstrella_Inicio = function(ev)
{   
            
    console.log('PASA POR AQUI!!');
    
    // Solo deben hacer esto la primera vez para cada polilinea
    if(editor.dibujando != true)
        {
            // Se recupera los valores del zoom y la camara
            var datosCanvas = editor.CANVAS.viewbox();
            var zoom = datosCanvas.zoom;
            var xCanvas = datosCanvas.x;
            var yCanvas = datosCanvas.y;

            //console.log(ev.layerX+"  "+ev.layerY);
             console.log('Empezando a dibujar el polígono');        
            
            
         // Se introducen los parametros iniciales
            
         var tamBorde = document.getElementById("tam-borde").value;   
         var transparenciaBorde = document.getElementById("transBorde").value;
         var transparenciaFondo = document.getElementById("transFondo").value;        
         var colorBorde = document.getElementById("colorborde").jscolor.toHEXString();
         var colorFondo = document.getElementById("colorfondo").jscolor.toHEXString();   
            
            
            
         var centroX = ((ev.layerX/zoom)+xCanvas);
         var centroY = ((ev.layerY/zoom)+yCanvas);
         var radio= 1;    
         var puntas = document.getElementById("esquinas-estrella").value;    
         var angulo = 180;  // radio inicial 180 (Dibuja en sentido contrario a las agujas del reloj, empezando por la punta de arriba)
         var radioIncremento = (360/puntas)/2;  // Se divide por 2 para las puntas intermedias que forman la estrella
         var camara = 0;    

         var poligono = null;       

        for(var i=0; i<puntas*2; i++, angulo=angulo+(radioIncremento))
            {
                // Primera pasada, se inicializa el poligono
                if(i==0)
                    {
                         poligono = editor.CANVAS.polygon(centroX+','+(centroY-radio));
                         var actualizar = poligono.attr('points');
                    }
                // Resto de iteraciones
                else
                    {                  

                        actualizar = poligono.attr('points');
                        // En cada de par (Puntas de la estrella)
                        if(i%2==0)
                            {
                                 actualizar = actualizar+' '+(centroX+(Math.sin(angulo/180*Math.PI)*radio))+','+(centroY+(Math.cos(angulo/180*Math.PI)*radio));            
                            }
                        // No es una punta de la estrella
                        else
                            {
                                actualizar = actualizar+' '+(centroX+(Math.sin((angulo+0)/180*Math.PI)*(radio/2)))+','+(centroY+(Math.cos((angulo+0)/180*Math.PI)*(radio/2)));      
                            }
                        // Se introduce la coornadas nuevas al poligono
                        poligono.plot(actualizar);

                    }      
            }

            // Propiedades iniciales para seleccionar y drag
            poligono = editor.anadirPropiedades(poligono);

            // Se introducen los parametros iniciales que hay en la zona de propiedades
            //var grosor = document.getElementById("tam-borde").value;
            //var color = document.getElementById("colorlapiz").jscolor.toHEXString();
            //var transparencia = document.getElementById("transBorde").value;

            // Se añaden los atributos iniciales

            poligono.stroke
            ({ 
                'linecap': 'round', 
                'linejoin': 'round'
            });
            
            poligono.attr
            ({
                'fill': colorFondo,
                'stroke': colorBorde,
                'stroke-width': tamBorde,
                'tipo': 'estrella',
                'opacity': 1,
                'centroX': centroX,
                'centroY': centroY,
                'puntas': puntas,
                'radio': 0,
                'stroke-opacity': transparenciaBorde,
                'fill-opacity': transparenciaFondo
            });
    
            editor.dibujando = true;
            editor.figuraDibujando = poligono;  
        }
};


editor.dibujadoEstrella_Dibujando = function(ev)
{
    if(editor.dibujando == true)
        {
            //console.log('Dibujando la estrella');           

            //console.log('Dibujando el circulo');
                    
            // Hay que guardar el punto inicial y poner de radio la distancia
            // entre el punto inicial y el punto del raton
                    
            // Formula de la distancia        var d = Math.sqrt( (x2-=x1)*x2 + (y2-=y1)*y2 );
                    
            //  var d = Math.sqrt( (x2-=x1)*x2 + (y2-=y1)*y2 );
                    
            
            // Se recupera los valores del zoom y la camara
            var datosCanvas = editor.CANVAS.viewbox();
            var zoom = datosCanvas.zoom;
            var xCanvas = datosCanvas.x;
            var yCanvas = datosCanvas.y;
            
            // Asignacion de valores para comparan el centro con la posicion del raton
                    
            var x1 = editor.figuraDibujando.attr('centroX');  // x Centro del circulo
            var y1 = editor.figuraDibujando.attr('centroY');  // y Centro del circulo           
            
                 
            
            var x2 = (ev.layerX/zoom)+xCanvas; // x Posicion del raton + los valores de zoom y camara
            var y2 = (ev.layerY/zoom)+yCanvas; // y Posicion del raton + los valores de zoom y camara
                    
             // Calculo de la distancia
            var distancia = Math.sqrt( (x2-=x1)*x2 + (y2-=y1)*y2 );                    
            //console.log(x1+" "+y1+"  ----  "+x2+" "+x2+"       Distancia: "+distancia);
                   
            //console.log('x: '+x2+'    y: '+y2)
            //console.log(zoom+'  '+distancia);
            //console.log('----------------------------------------------------');
            //console.log('----------------------------------------------------');
            
            //console.log(distancia);
            
            var figura = editor.figuraDibujando
            
            //Se actualiza el radio en los atributos (distancia)
            figura.attr('radio',distancia);
            
            // Se pinta la estrella actualizada
            editor.pintarEstrella(figura, distancia);

            
        }   
};

editor.dibujadoEstrella_Final = function(ev)
{
    editor.dibujando = false;
    editor.figuraDibujando = null;
    console.log('Terminando de dibujar la estrella');
    
    // Se guarda el estado nuevo
    editor.guardarEstado();
    
    // Mostrar mensaje en el pie
    editor.mostrarMensajePie('Estrella dibujada correctamente');


};








console.log('Modulo Creacion de primitivas iniciado');