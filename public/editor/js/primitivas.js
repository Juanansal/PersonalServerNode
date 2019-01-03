

// añade las propiedas basicas a la figura pasada por parametro (onclick drop etc)
editor.anadirPropiedades = function(figura)
{
//  figura.attr("onclick", "editor.seleccionar(evt, this)");  
    figura.attr("onmousedown", "editor.seleccionar(evt, this)");      
//  figura.attr("onmousedown", "editor.pulsarFigura(evt, this)");  // Uso en atras-adelante.js
    figura.draggable(false);    
    return figura;
};





// Cambia la transparencia del fondo
editor.cambiarTransparenciaFondo = function(trans, figura)
{   
    if(figura==null)
        {
            figura = editor.seleccionado
        }
    
    figura.attr(
    {
       'fill-opacity': trans
        
    })
    
};

// Cambia la transparencia del borde
editor.cambiarTransparenciaBorde = function(trans, figura)
{   
    if(figura==null)
        {
            figura = editor.seleccionado
        }
    
    figura.attr(
    {
       'stroke-opacity': trans
        
    })
    
};






// Crea un objeto svg circle
editor.dibujarCirculo = function(x, y, radio)
{
   var circulo = editor.CANVAS.ellipse(radio);
   circulo.move(x-(radio/2), y-(radio/2));
   circulo = editor.anadirPropiedades(circulo);
     
   circulo.attr({
      fill: '#f06'
    , 'fill-opacity': 0.5
    , stroke: '#000'
    , 'stroke-width': 5
    }) 
    
    
   return circulo;
};










// Se dibujara un circulo inicialmente, que puedo ser editado para convertirse en una elipse
editor.dibujarElipse = function(x, y, r1, r2)
{
    var elipse = editor.CANVAS.ellipse(r1,r2);
    elipse.move(x,y);
    elipse = editor.anadirPropiedades(elipse);

    return elipse;
};







// Cambia el tamaño de la elipse, con los 2 radios pasado por parametro, a la hora 
// de dibujar el circulo los 2 radios seran los mismos
editor.cambiarTamElipse = function(figura, radio1, radio2)
{    
    figura.radius(radio1,radio2);
    return figura;
};



// Cambia el tamaño del borde del circulo pasado por parametro
// 
editor.cambiarTamBordeElipse = function(num, figura)
{    
    // Si el parametro figura es null, se coje el la variable seleccionado del editor 
    // y se cambia el tam del borde de esa figura
    if(figura==null)
        {
            figura = editor.seleccionado
        }
    //console.log(figura);
    
    figura.attr({
    'stroke-width': num
    })
};


// Cambia el color del borde de la elipse con el valor pasado por parametro
// Si no hay segundo parametro con la figura, coje el valor seleccionado del editor que contiene
// la figura seleccionada
editor.cambiarColorBordeElipse = function(color, figura)
{
    var insertar = color.toHEXString();
    
    if(figura==null)
        {
            figura = editor.seleccionado
        }
    
    figura.attr(
    {
       stroke: insertar
    })
    
};



// Cambia el color del fondo de la elipse con el valor pasado por parametro
// Si no hay segundo parametro con la figura, coje el valor seleccionado del editor que contiene
// la figura seleccionada
editor.cambiarColorFondoElipse = function(color, figura)
{
    var insertar = color.toHEXString();
    
    if(figura==null)
        {
            figura = editor.seleccionado
        }
    
    figura.attr(
    {
       fill: insertar
    })
    
};






// Se dibujara un rectangulo
editor.dibujarRectangulo = function(x, y, ancho, alto)
{
    var rect = editor.CANVAS.rect(ancho,alto);
    rect.move(x,y);
    rect = editor.anadirPropiedades(rect);
    
    rect.attr({
    'fill-opacity': 0.5,
    })
    
    return rect;
};



// Cambias la altura de un rectandulo, si el parametro figura esta vacio, 
// se cojera el valor de editor.seleccionado
editor.cambiarAlturaRectangulo = function(altura, figura)
{    
    // Si el parametro figura es null, se coje el la variable seleccionado del editor 
    if(figura==null)
        {
            figura = editor.seleccionado
        }
    //console.log(figura);
    
    figura.attr({
    'height': altura
    })
};



// Cambias la anchura de un rectandulo, si el parametro figura esta vacio, 
// se cojera el valor de editor.seleccionado
editor.cambiarAnchuraRectangulo = function(anchura, figura)
{    
    
    // Si el parametro figura es null, se coje el la variable seleccionado del editor 
    if(figura==null)
        {
            figura = editor.seleccionado
        }
    //console.log(figura);
    
    figura.attr({
    'width': anchura
    })
};





// Cambia el tamaño del rectangulo que se esta dibujando
editor.cambiarTamRectangulo = function(figura, ancho, alto)
{    
    figura.size(ancho,alto);
    return figura;
};



// Cambia el tamaño del borde del rectangulo pasado por parametro
// 
editor.cambiarTamBordeRectangulo = function(num, figura)
{    
    // Si el parametro figura es null, se coje el la variable seleccionado del editor 
    // y se cambia el tam del borde de esa figura
    if(figura==null)
        {
            figura = editor.seleccionado
        }
    //console.log(figura);
    
    figura.attr({
    'fill-opacity': 0.5,
    'stroke-width': num
    })
};


// Cambia el color del borde del rectangulo con el valor pasado por parametro
// Si no hay segundo parametro con la figura, coje el valor seleccionado del editor que contiene
// la figura seleccionada
editor.cambiarColorBordeRectangulo = function(color, figura)
{
    var insertar = color.toHEXString();
    
    if(figura==null)
        {
            figura = editor.seleccionado
        }
    
    figura.attr(
    {
       stroke: insertar
    })
    
};





// Cambia el color del fondo del rectangulo con el valor pasado por parametro
// Si no hay segundo parametro con la figura, coje el valor seleccionado del editor que contiene
// la figura seleccionada
editor.cambiarColorFondoRectangulo = function(color, figura)
{
    var insertar = color.toHEXString();
    
    if(figura==null)
        {
            figura = editor.seleccionado
        }
    
    figura.attr(
    {
       fill: insertar
    })
    
};


// Se dibuja una recta
editor.dibujarRecta = function(x1, y1, x2, y2)
{
    var recta = editor.CANVAS.line(x1, y1, x2, y2).stroke({width: 5});
    recta = editor.anadirPropiedades(recta);
    return recta;
    
};


// Cambia la posicion del segundo punto de la recta
editor.cambiarTamRecta = function(figura, x1, y1, x2, y2)
{
     figura.plot(x1, y1, x2, y2);
     return figura;
};


// Cambia el color de la linea, si no hay parametro figura
// coge el valor de editor.seleccionado

editor.cambiarColorLinea = function(color, figura)
{
    var insertar = color.toHEXString();
    
    if(figura==null)
        {
            figura = editor.seleccionado
        }
    
    figura.attr(
    {
       stroke: insertar
    })
    
};


// Cambia el grosor de la linea con el valor pasado por parametro
// Si no hay segundo parametro con la figura, coje el valor seleccionado del editor que contiene
// la figura seleccionada
editor.cambiarGrosorLinea = function(grosor, figura)
{
    if(figura==null)
        {
            figura = editor.seleccionado
        }
    
    figura.attr(
    {
       'stroke-width': grosor
    })
    
};



// Cambia el grosor de la linea con el valor pasado por parametro
// Si no hay segundo parametro con la figura, coje el valor seleccionado del editor que contiene
// la figura seleccionada
editor.cambiarGrosorPolyline = function(grosor, figura)
{
    if(figura==null)
        {
            figura = editor.seleccionado
        }
    
    figura.attr(
    {
       'stroke-width': grosor
    })
    
};



// Cambia el tamaño de la polilinea de las formas personalizadas 1 y 2
// 
editor.cambiarTamForma1 = function(num, figura)
{    
    // Si el parametro figura es null, se coje el la variable seleccionado del editor 
    // y se cambia el tam del borde de esa figura
    if(figura==null)
        {
            figura = editor.seleccionado
        }
    //console.log(figura);
    
    var idPatron1 = figura.attr('idPatron1');
    var patron = SVG.get(idPatron1);
    var polyline = patron.first();    
    
    polyline.attr({
        'stroke-width': num
    })
};


// Cambia el color del borde con el valor pasado por parametro
// Si no hay segundo parametro con la figura, coje el valor seleccionado del editor que contiene
// la figura seleccionada
editor.cambiarColorBordePolilinea = function(color, figura)
{
    var insertar = color.toHEXString();
    
    if(figura==null)
        {
            figura = editor.seleccionado
        }
    
    var idPatron1 = figura.attr('idPatron1');
    var patron = SVG.get(idPatron1);
    var polyline = patron.first();    
    
    polyline.attr(
    {
       stroke: insertar
    })
    
};

// Cambia la transparencia de las formas personalizadas 1 y 2
editor.cambiarTransparenciaForma1 = function(trans, figura)
{   
    if(figura==null)
        {
            figura = editor.seleccionado
        }
    
    var idPatron1 = figura.attr('idPatron1');
    var patron = SVG.get(idPatron1);
    var polyline = patron.first();    
    
    polyline.attr(
    {
       'opacity': trans
        
    })
    
};


// Cambia las iteraciones de las formas personalizadas 1 y 2
editor.cambiarPuntasForma1 = function(puntas, figura)
{   
    if(figura==null)
        {
            figura = editor.seleccionado
        }
    
    var idPatron1 = figura.attr('idPatron1');
    var patron = SVG.get(idPatron1);
    var polyline = patron.first();    
    
    figura.attr(
    {
       'puntas': puntas       
    })
    
    // Se actualiza la figura
    editor.resizeForma1(null, figura);
    
};




editor.cambiarColorFigurasForma1 = function(color, figura)
{    
    var insertar = color.toHEXString();
    
    if(figura==null)
        {
            figura = editor.seleccionado
        }
    
    var idPatron1 = figura.attr('idPatron1');
    var patron = SVG.get(idPatron1);
    var polyline = patron.first();    
    
    var inicio = SVG.get(polyline.attr('marker-start'));
    var inter = SVG.get(polyline.attr('marker-mid'));     
    var final = SVG.get(polyline.attr('marker-end'));     

    
    inicio.clear();
    inter.clear();
    final.clear();
    
    inicio.update(function(add) {
    add.ellipse(3, 3).fill(insertar)
});
    inter.update(function(add) {
    add.ellipse(3, 3).fill(insertar)
});
    final.update(function(add) {
    add.ellipse(3, 3).fill(insertar)
});
    
    console.log(figura.attr());
    console.log(polyline.attr());
    console.log(inicio.attr());
    
    inicio.attr('fill',insertar);
    inter.attr('fill',insertar);
    final.attr('fill',insertar);
    
    
    figura.attr(
    {
       stroke: insertar
    })
};



// Cambia el tamaño de la imagen que se esta dibujando
editor.cambiarTamImagen = function(figura, ancho, alto)
{    
    figura.attr('width', ancho);
    figura.attr('height', alto);
    return figura;
};




// Cambia el color del borde del poligono con el valor pasado por parametro
// Si no hay segundo parametro con la figura, coje el valor seleccionado del editor que contiene
// la figura seleccionada
editor.cambiarColorBordePoligono = function(color, figura)
{
    var insertar = color.toHEXString();
    
    if(figura==null)
        {
            figura = editor.seleccionado
        }
    
    figura.attr(
    {
       stroke: insertar
    })
    
};



// Cambia el color del fondo del poligono con el valor pasado por parametro
// Si no hay segundo parametro con la figura, coje el valor seleccionado del editor que contiene
// la figura seleccionada
editor.cambiarColorFondoPoligono = function(color, figura)
{
    var insertar = color.toHEXString();
    
    if(figura==null)
        {
            figura = editor.seleccionado
        }
    
    figura.attr(
    {
       fill: insertar
    })
    
};

// Cambia la transparencia del borde del poligono
editor.cambiarTransparenciaBordePoligono = function(trans, figura)
{   
    if(figura==null)
        {
            figura = editor.seleccionado
        }
    
    figura.attr(
    {
       'stroke-opacity': trans
        
    })
    
};

// Cambia la transparencia del fondo del poligono
editor.cambiarTransparenciaFondoPoligono = function(trans, figura)
{   
    if(figura==null)
        {
            figura = editor.seleccionado
        }
    
    figura.attr(
    {
       'fill-opacity': trans
        
    })
    
};



editor.pintarEstrella = function(poligono, radio)
{
    
    // Se recupera los valores del zoom y la camara
    var datosCanvas = editor.CANVAS.viewbox();
    var zoom = datosCanvas.zoom;
    var xCanvas = datosCanvas.x;
    var yCanvas = datosCanvas.y;
    
    
     var centroX = poligono.attr('centroX');
     var centroY = poligono.attr('centroY');  
    
     var puntas = poligono.attr('puntas');
     var angulo = 180;  // radio inicial 180 (Dibuja en sentido contrario a las agujas del reloj, empezando por la punta de arriba)
     var radioIncremento = (360/puntas)/2;  // Se divide por 2 para las puntas intermedias que forman la estrella 

    // Se pillan las coordenadas del lapiz actual dibujandose  


    for(var i=0; i<puntas*2; i++, angulo=angulo+(radioIncremento))
        {

            // Primera pasada, se inicializa el poligono
            if(i==0)
                {
                     poligono.attr('points',centroX+','+(centroY-radio));
                     //poligono = editor.CANVAS.polygon(centroX+','+(centroY-radio));
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

};



editor.modificarPuntasEstrella = function(puntas, poligono)
{
    
    
    if(figura==null)
        {
            poligono = editor.seleccionado
        }   
    
    
    // Se recupera los valores del zoom y la camara
    var datosCanvas = editor.CANVAS.viewbox();
    var zoom = datosCanvas.zoom;
    var xCanvas = datosCanvas.x;
    var yCanvas = datosCanvas.y;
    
    
     var centroX = poligono.attr('centroX');
     var centroY = poligono.attr('centroY');  
    
     var puntas = poligono.attr('puntas');
     var angulo = 180;  // radio inicial 180 (Dibuja en sentido contrario a las agujas del reloj, empezando por la punta de arriba)
     var radioIncremento = (360/puntas)/2;  // Se divide por 2 para las puntas intermedias que forman la estrella 

    // Se pillan las coordenadas del lapiz actual dibujandose  


    for(var i=0; i<puntas*2; i++, angulo=angulo+(radioIncremento))
        {

            // Primera pasada, se inicializa el poligono
            if(i==0)
                {
                     poligono.attr('points',centroX+','+(centroY-radio));
                     //poligono = editor.CANVAS.polygon(centroX+','+(centroY-radio));
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

};




console.log('Primitivas iniciado');
