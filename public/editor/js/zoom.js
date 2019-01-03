
editor.zoomMas = function()
{
    
    var anterior = editor.CANVAS.viewbox();  // Recoge los valores del zoom  
    
    var x = anterior.x;
    var y = anterior.y;
    var ancho = anterior.width;
    var alto = anterior.height;
    var zoom = anterior.zoom;

    editor.CANVAS.viewbox(x, y, ancho*0.95, alto*0.95); // Crea el zoom
    
    //var nuevo = editor.CANVAS.viewbox();  // Recoge los valores del zoom  
    console.log(editor.CANVAS.viewbox());
    
    // Mostrar mensaje en el pie
    editor.mostrarMensajePie('Zoom +');
};

editor.zoomMenos = function()
{
    
    var anterior = editor.CANVAS.viewbox();  // Recoge los valores del zoom  
    
    var x = anterior.x;
    var y = anterior.y;
    var ancho = anterior.width;
    var alto = anterior.height;
    var zoom = anterior.zoom;
    
    editor.CANVAS.viewbox(x, y, ancho/0.95, alto/0.95); // Crea el zoom
    
    //var nuevo = editor.CANVAS.viewbox();  // Recoge los valores del zoom  
    console.log(editor.CANVAS.viewbox());
    
    // Mostrar mensaje en el pie
    editor.mostrarMensajePie('Zoom -');
    
};

editor.zoomDefault = function()
{
    
    var anterior = editor.CANVAS.viewbox();  // Recoge los valores del zoom  
    
    var x = anterior.x;
    var y = anterior.y;
    var ancho = anterior.width;
    var alto = anterior.height;
    var zoom = anterior.zoom;

    editor.CANVAS.viewbox(0, 0, editor.anchoInit, editor.altoInit); // Crea el zoom
    
    var nuevo = editor.CANVAS.viewbox();  // Recoge los valores del zoom    
    
    // Mostrar mensaje en el pie
    editor.mostrarMensajePie('Zoom restablecido');
};

/*
editor.zoomFigura = function()
{  
    // Se comprueba se hay una figura seleccionada
    if(editor.seleccionado!=null)
        {
            // Se recoge la figura seleccionada
            var figura = editor.seleccionado;
            
            // Se inicializan los valores anteriores de zoom
            var anterior = editor.CANVAS.viewbox();  // Recoge los valores del zoom  
  
            var x = anterior.x;
            var y = anterior.y;
            var ancho = anterior.width;
            var alto = anterior.height;
            var zoom = anterior.zoom;
            
            // filtro por tipo de figuras
            if(figura.type == 'ellipse')
            {         
               console.log(figura.attr());    
                var xFigura = figura.attr('cx');
                var yFigura = figura.attr('cy');
                var rxFigura = figura.attr('rx');
                var ryFigura = figura.attr('ry');
                console.log(editor.CANVAS.viewbox());
                
               if(ryFigura < rxFigura/editor.ratio)
                   {
                       
                   }
                   
                
                
               // editor.CANVAS.viewbox((xFigura-rxFigura)-10, (yFigura-ryFigura)-10, ((ryFigura*2)+20)*editor.ratio, (ryFigura*2)+20); // caso alto grande
                
                editor.CANVAS.viewbox((xFigura-rxFigura)-10, (yFigura-ryFigura), (rxFigura*2)+20, ((rxFigura*2)+20)/editor.ratio);               
        
               // editor.CANVAS.viewbox((xFigura-rxFigura)-10, nuevoY-(nuevoAlto/()), (rxFigura*2)+20, ((rxFigura*2)+20)/editor.ratio);
               
                
                console.log(editor.CANVAS.viewbox());
            }
        }
};

*/

console.log("Modulo Zoom iniciado");
