
/*************************************************/
  /* EVENTOS DE TECLADO */
/*************************************************/

window.addEventListener("keyup", function (ev) 
    {
        switch(ev.keyCode)
        {
            // Suprimir    
            case 46:
                // Eliminación de una figura seleccionada
                if(editor.estado==1)
                    {
                       if(editor.seleccionado!=null)
                           {
                               editor.seleccionado.selectize(false);  // Se elimina la selección
                               editor.seleccionado.remove();  // Se elimina la figura
                               editor.seleccionado = null;   // Limpia la variable con la figura
                               console.log("Borrado realizado correctamente");
                           }                        
                    } 
                
                if(editor.estado==9)
                    {
                       if(editor.dibujando!=null)
                           {
                            
                               editor.figuraDibujando.remove();
                               editor.dibujando = false;
                               editor.figuraDibujando = null;
                               console.log("Borrado realizado correctamente");
                           }                        
                    }
                
                if(editor.estado==12)
                    {
                       if(editor.dibujando!=null)
                           {
                            
                               editor.figuraDibujando.remove();
                               editor.dibujando = false;
                               editor.figuraDibujando = null;
                               console.log("Borrado realizado correctamente");
                           }                        
                    } 
                break;
                
            // Intro   
            case 13:
                
                // Activacion evento de terminar el dibujado de la polilinea
                if(editor.estado==9)
                    {
                       if(editor.dibujando!=null)
                           {
                                editor.dibujadoPolyline_Final(ev);
                           }                        
                    }
                
                if(editor.estado==12)
                    {
                       if(editor.dibujando!=null)
                           {
                                editor.dibujadoPoligono_Final(ev);
                           }                        
                    } 
                break;
                
           // Espacio  
            case 32:
                
                // Eliminacion de una figura seleccionada
                if(editor.estado==9)
                    {
                       if(editor.dibujando!=null)
                           {
                                editor.dibujadoPolyline_Final(ev);
                           }                        
                    }  
                
                if(editor.estado==12)
                    {
                       if(editor.dibujando!=null)
                           {
                                editor.dibujadoPoligono_Final(ev);
                           }                        
                    } 
                break;
                
                // Esc   
            case 27:
                
                // Eliminacion de una figura seleccionada
                if(editor.estado==9)
                    {
                       if(editor.dibujando!=null)
                           {
                                editor.dibujadoPolyline_Final(ev);
                           }                        
                    } 
                
                if(editor.estado==12)
                    {
                       if(editor.dibujando!=null)
                           {
                                editor.dibujadoPoligono_Final(ev);
                           }                        
                    } 
                break;
        }
    });



/*************************************************/
  /* EVENTOS DE RATON */
/*************************************************/

//Elimina la selección de texto en la aplicación
/*
document.onselectstart = function() {return false;}
document.onmousedown = function() {return false;}
*/

// Pulsar el click izquierdo evento sobre el canvas
document.getElementById("zonadibujado").addEventListener ("mousedown", mousedownIzquierdoCanvas);
// Pulsar el click izquierdo evento
window.addEventListener("mousedown", mousedownIzquierdo);

// Al mover el raton evento sobre el canvas
document.getElementById("zonadibujado").addEventListener ("mousemove", mousemoveCanvas);
// Al mover el raton evento
window.addEventListener("mousemove", mousemove);

// Levantar el click izquierdo evento sobre el canvas
document.getElementById("zonadibujado").addEventListener ("mouseup", mouseupIzquierdoCanvas);
// Levantar el click izquierdo evento
window.addEventListener("mouseup", mouseupIzquierdo);



// Mover la rueda del raton
document.getElementById("zonadibujado").addEventListener ("wheel", mouseRueda);

// Resize de la pantalla
window.addEventListener("resize", resizePantalla);


// Pulsar el click izquierdo sobre el canvas
function mousedownIzquierdoCanvas(ev)
{
    // Estado 0 de mover vista
    if(editor.estado == 0)
        {
            editor.moverVista_Inicio(ev);
        }
    
    // Estado 2 de dibujado de circulos
    if(editor.estado == 2)
        {
            editor.dibujadoCirculo_Inicio(ev);
        }
    
    // Estado 3 de dibujado de rectangulos
    if(editor.estado == 3)
        {
            editor.dibujadoRectangulo_Inicio(ev);
        }
    
    // Estado 4 de dibujado de rectas
    if(editor.estado == 4)
        {
            editor.dibujadoLinea_Inicio(ev);
        }
    
    // Estado 5 de dibujado de la forma personalizada 1
    if(editor.estado == 5 || editor.estado == 6)
        {
            editor.dibujadoForma1_Inicio(ev);           
        }
    
    // Estado 7 de dibujado de imagenes
    if(editor.estado == 7)
        {           
            editor.dibujadoImagen_Inicio(ev);
        }
    
    // Estado 8 de dibujado de lápiz
    if(editor.estado == 8)
        {           
            editor.dibujadoLapiz_Inicio(ev);
        }
    
    if(editor.estado == 9)
        {           
            editor.dibujadoPolyline_Inicio(ev);
        } 
    
    if(editor.estado == 12)
        {           
            editor.dibujadoPoligono_Inicio(ev);
        } 
    
    if(editor.estado == 13)
        {           
            editor.dibujadoEstrella_Inicio(ev);
        } 
    
    
    
    
    
}//fin mousedownIzquierdoCanvas function




// Pulsar el click izquierdo
function mousedownIzquierdo(ev)
{  
    
}//fin mousedownIzquierdo function




//  Al mover el raton sobre el canvas
function mousemoveCanvas(ev)
{ 
    //console.log(ev.layerX+'  '+ev.layerY);
    if(editor.estado == 0)
        {
            editor.moverVista_Moviendo(ev);
        }
    
    if(editor.estado == 2)
        {
            editor.dibujadoCirculo_Dibujando(ev);
        }
           
      if(editor.estado == 3)
        {
            editor.dibujadoRectangulo_Dibujando(ev); 
        }
    
      if(editor.estado == 4)
        {                        
            editor.dibujadoLinea_Dibujando(ev);
        }
    
        if(editor.estado == 5 || editor.estado == 6)
        {
            editor.dibujadoForma1_Dibujando(ev);
        }
    
    if(editor.estado == 7)
        {
            editor.dibujadoImagen_Dibujando(ev);
        }
    
    if(editor.estado == 8)
        {
            editor.dibujadoLapiz_Dibujando(ev);
        }
    
    if(editor.estado == 13)
        {
            editor.dibujadoEstrella_Dibujando(ev);
        }
    
    
}//fin mousemove function



//  Al mover el raton
function mousemove(ev)
{ 
   
}






// Levantar el click izquierdo sobre el Canvas
function mouseupIzquierdoCanvas(ev)
{   
    //console.log('x: '+ev.offsetX+'    y: '+ev.offsetY);
    
    // Estado de dibujado de circulos
    if(editor.estado == 0)
        {
           editor.moverVista_Final(ev); 
        }
    
    // Estado de dibujado de circulos
    if(editor.estado == 2)
        {
           editor.dibujadoCirculo_Final(ev); 
        }
    
    // Estado de dibujado de circulos
    if(editor.estado == 3)
        {
            editor.dibujadoRectangulo_Final(ev);
        }
    
    // Estado de dibujado de rectas
    if(editor.estado == 4)
        {
            editor.dibujadoLinea_Final(ev);
        }
    
    // Estado de dibujado de rectas
    if(editor.estado == 5 || editor.estado == 6)
        {                      
            editor.dibujadoForma1_Final(ev);
        }
    
    // Estado de dibujado de imagenes
    if(editor.estado == 7)
        {           
            editor.dibujadoImagen_Final(ev);
        }
    
    // Estado de dibujado de imagenes
    if(editor.estado == 8)
        {           
            editor.dibujadoLapiz_Final(ev);
        }
    
    if(editor.estado == 9)
        {
            editor.dibujadoPolyline_Dibujando(ev);
        }
    
     if(editor.estado == 12)
        {
            editor.dibujadoPoligono_Dibujando(ev);
        }
    
    // Estado de dibujado de circulos
    if(editor.estado == 13)
        {
           editor.dibujadoEstrella_Final(ev); 
        }
    
    
}// fin mouseupIzquierdo function




// Levantar el click izquierdo en cualquier luegar de la pantalla
function mouseupIzquierdo(ev)
{    
    if(editor.estado == 1)
        {
           editor.comprobarCambiosSeleccion(ev);  // atras-adelante.js 
        }
}// fin mouseupIzquierdo function


function mouseRueda(ev)
{
     // Realizar zoom
     if(editor.estado == 0)
        { 
            if(ev.deltaY<0)
                {
                    editor.zoomMas()
                }
            if(ev.deltaY>0)
                {
                    editor.zoomMenos()
                }          
        }
    
    //console.log(ev.deltaY);
}


function resizePantalla(ev)
{
    editor.redimensionarCanvas(ev);
}


console.log("Modulo Eventos iniciado");