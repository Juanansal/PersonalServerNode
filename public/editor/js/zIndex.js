
/*

 Modos:
 1 - Al frente
 2 - Al fondo 
 3 - Un paso al frente
 4 - Un paso al fondo
 
*/

editor.moverAlFrente_O_AlFondo = function(modo)
{
    // Solo realiza esto, si se tiene el estado de seleccion
    if(editor.estado == 1)
        {
            // Se comprueba si hay alguna figura seleccionada
            if(editor.seleccionado)
                {
                    var figura = editor.seleccionado;
                    
                    
                    
                    // Caso especial en este caso donde primero se tiene que deselecciar la figura, guardar el estado y volverla a seleccionar                    
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
                        
                    
                    // Se realiza el movimiento dependiendo del modo seleccionado y se guarda el estado(para el atras-adelante)
                    switch(modo)
                        {
                            case 1: figura.front(); 
                                    editor.mostrarMensajePie('Figura movida al frente correctamente');    
                                    editor.guardarEstado();                           
                                    break;
                                
                            case 2: figura.back(); 
                                    editor.mostrarMensajePie('Figura movida al fondo correctamente');     
                                    editor.guardarEstado();
                                    break;
                            
                            case 3: figura.forward(); 
                                    editor.mostrarMensajePie('Figura movida un paso frente correctamente');      
                                    editor.guardarEstado();
                                    break;
                                
                            case 4: figura.backward(); 
                                    editor.mostrarMensajePie('Figura movida un paso al fondo correctamente');    
                                    editor.guardarEstado();
                                    break;
                                
                            default: editor.mostrarMensajePie('Error al realizar la transformación','#F00'); 
                        }
                    
                    
                    // Se vuelve a seleccionar la figura
                        editor.seleccionado.selectize({rotationPoint: true,
                                        deepSelect: false});

                        editor.seleccionado.resize({snapToGrid: 1,    // numero de pixels que redimensiona
                                                    snapToAngle: 1});// tamaño del angulo por el que rota
                    
                    
                    
                }
            else
                {
                    editor.mostrarMensajePie('Ninguna figura seleccionada','#F00'); 
                }
        }
    else
        {
            editor.mostrarMensajePie('Ninguna figura seleccionada','#F00'); 
        }
};



console.log("Modulo zIndex iniciado");