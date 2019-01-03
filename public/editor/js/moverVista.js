

editor.moverVista = function(movX,movY)
{
    // Recoge los valores del zoom 
    var aux = editor.CANVAS.viewbox();  
    
    
    var x = aux.x;
    var y = aux.y;
    var ancho = aux.width;
    var alto = aux.height;
    
    // Se mueve z e y segun los parametros recibidos
    editor.CANVAS.viewbox(x+movX, y+movY, ancho, alto);
    
    
};

// Al pulsar click del raton
editor.moverVista_Inicio = function(ev)
{
    editor.moviendo = true;
    console.log('Empezando a mover vista');
};


// Al mover la vista
editor.moverVista_Moviendo = function(ev)
{
    if(editor.moviendo == true)
        {
            //console.log(ev.movementX+'  '+ev.movementY);          
            editor.moverVista(ev.movementX*-1,ev.movementY*-1);
            
        }  
};


// Al levantar el click del raton
editor.moverVista_Final = function(ev)
{
     editor.moviendo = false;
    console.log('Terminado mover vista');
};




console.log('Modulo MoverVista iniciado');