/* Estados de la aplicación

  Por defecto 0

 0 -  Mover Vista
 1 -  Seleccion, editar, borrar, etc
 2 -  Pintar Circulo
 3 -  Pintar Rectangulo
 4 -  Pintar Lineas
 5 -  Pintar Forma 1 (Valla)
 6 -  Pintar Forma 2 (Valla con formas)
 7 -  Pintar Imagen 
 8 -  Lapiz
 9 -  Polyline
 10 - Exportar 
 11 - Importar
 12 - Dibujado poligonos
 13 - Dibujado de estrellas
 
*/

var editor = 
    {   
        anchoInit: null,
        altoInit: null,
        ratioInit: null, // anchoInit/altoInit 
        idDiv: null,
        seleccionado: null, // Objeto seleciona con estado = 1
        seleccionadoString: null,  // Se necesita para poder comparar cambios (Usado en atras-adelante) 
        CANVAS: null, // Variable padre donde se almacena todas las figuras y propiedades generales
        estado: 1, // Estado de la aplicacion
        capaEstadoSelec: null, // Capa del menu izquierda correspondiente al estado seleccionado
        moviendo: false, // Indica si se esta moviendo el Canvas (Estado = 0)
        dibujando: false, // Indica si esta dibujando una nueva figura o no
        figuraDibujando: null, // Figura dibujandose en los estados de dibujado
        pilaDelEditor: null, // Pila donde se van guardando los estados para deshacer y rehacer el editor (atras-adelante.js)
        posicionPila: -1
    };

var data = 
    {
        propiedades: {}  // Objeto con variables con html que se rellenan en data.js
    };


// Se inicializa la zona de dibujado asignando el id <div>, el ancho y el alto
// Devuelve la variable donde se dibuja todo 
editor.init = function(id, ancho, alto)
{
    // Se pillan las capas para coger los tamaños
    var capaIzq = document.getElementById("menu_izquierda");
    var capaCentro = document.getElementById("zona-central");

     // Se recoge el alto y ancho de las capas
    var alto = capaIzq.scrollHeight;     // Se pilla la capa izquierda, ya que tiene el mismo alto y ya esta inicializada previamente
    var ancho = capaCentro.scrollWidth;
    
    var draw = SVG(id).size(ancho, alto);  
    editor.anchoInit = ancho;
    editor.altoInit = alto;
    editor.ratio = ancho/alto;
    editor.idDiv = id;
    editor.CANVAS = draw;
    
    // Inicializacion de la pila para deshacer y rehacer
    editor.pilaDelEditor = [];
    editor.posicionPila = -1;
    editor.guardarEstado();
    
    // Se añade la capa del menu de herramientas inicial y el estado
    var capa = document.getElementById('seleccionHerramientaInit');
    editor.cambioEstado(-1, capa);
    
    
    
    
    //return draw; 
};

editor.inicializarCanvas = function()
{
    var draw = SVG(editor.idDiv).size(editor.ancho, editor.alto);
    editor.CANVAS = draw;
}


// Redimendion del canvas
editor.redimensionarCanvas = function(ev)
{
    // Se pillan las capas para coger los tamaños
    var capaIzq = document.getElementById("menu_izquierda");
    var capaCentro = document.getElementById("zona-central");

    // Se recoge el alto y ancho de las capas
    var alto = capaIzq.scrollHeight;     // Pillamos la capa izquierda, ya que tiene el mismo alto y ya esta inicializada previamente
    var ancho = capaCentro.scrollWidth;
    
    // Se actualiza el canvas con los nuevos tamaños
    editor.CANVAS.attr({
                        'height': alto,
                         'width': ancho 
                       })
    
    //console.log(alto+'   '+ancho);
    //console.log(capaCentro);
};



console.log("Inicializacion del editor completada");