editor.guardarEstado = function()
{
    
    var tam = editor.pilaDelEditor.length;
    var posicion = editor.posicionPila;
    
   
    
    // si la posicion es menor que el tamaño, significa que hay que borrar los elementos 
    // siguientes antes de actualizar el estado
    if(tam-1>posicion)
        {
            for(var i=posicion; i<tam-1; i++)
                {
                    editor.pilaDelEditor.pop();      
                }
        }
    
    
    var meter = editor.CANVAS.svg();
    var res = editor.eliminarTagDeString('svg',meter); 
    editor.pilaDelEditor.push(res);  
    
    // Suma 1 la posicion de la pila
    editor.posicionPila = editor.posicionPila + 1;
    
    console.log('Estado Guardado');
    
    
};

editor.deshacer = function(numero)
{
    
    // Eliminar las propiedades de drag y seleccion a todos los elementos del editor
    editor.eliminarSeleccionGlobal();
    editor.eliminarDragGlobal()

    // Si solo hay un estado en la pila (la inicial), no se hace nada
    if(editor.posicionPila>0)
    {    
        // Borra el contenido del canvas
        editor.CANVAS.clear();

        var svg = editor.pilaDelEditor[editor.posicionPila-1];

       // Se realiza el deshacer
        editor.CANVAS.svg(svg);

        // Se cambia al estado 1     
        editor.cambioEstado(1);

        editor.posicionPila = editor.posicionPila - 1;
    }
};

editor.rehacer = function()
{
    // Eliminar las propiedades de drag y seleccion a todos los elementos del editor
    editor.eliminarSeleccionGlobal();
    editor.eliminarDragGlobal()

     

    // Si solo hay un estado en la pila (la inicial), no se hace nada
    if(editor.pilaDelEditor.length > editor.posicionPila+1)
    {    
        // Borra el contenido del canvas
        editor.CANVAS.clear();

        var svg = editor.pilaDelEditor[editor.posicionPila+1];

       // Se realiza el deshacer
        editor.CANVAS.svg(svg);

        // Se cambia al estado 1     
        editor.cambioEstado(1);

        editor.posicionPila = editor.posicionPila + 1;
        
        //console.log(editor.pilaDelEditor.length+' < '+editor.posicionPila);
    }
};

// Se activa al pulsar click izquierdo en la pantalla con el estado 1 de seleccion
 editor.comprobarCambiosSeleccion = function(ev)
 {
     
     //console.log(editor.seleccionado)
     
     // Se comprueba que el objeto este seleccionado
     if(editor.estado==1 && editor.seleccionado != null)
         {
             // Se recogen los valores guardados para ser comparados
             var temp = editor.seleccionado.svg();
             var string1 = editor.seleccionadoString;
             var string2 = editor.eliminarTagDeString('svg',temp); 

             //console.log(string1);
             //console.log(string2);

             // Si son iguales, no se hace nada, sin son diferentes se guarda el cambio
             if(string1.localeCompare(string2) == 0)
                    {
                        //console.log('SIN CAMBIOS');           
                        
                    }
                else
                    {
                        //console.log('CON CAMBIOS');
                        
                        // Se deselecciona primero para que no guarde el recuadro de la seleccion
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
                        
                        // SE guarda el estado una vez comprobado todo
                        editor.guardarEstado();
                        
                        // Se vuelve a seleccionar
                        editor.seleccionado.selectize({rotationPoint: true,
                                        deepSelect: false});

                        editor.seleccionado.resize({snapToGrid: 1,    // numero de pixels que redimensiona
                                                    snapToAngle: 1});// tamaño del angulo por el que rota
                    }


             editor.seleccionadoString = string2; 
             
            //console.log(string1);
            //console.log(string2);

         }
     
 };

editor.pulsarFigura = function(figura)
{
    if(editor.estado == 1)
        {    
            
             // Se introduce en una variable el string de la figura seleccionada
             var temp = figura.svg();
             editor.seleccionadoString = editor.eliminarTagDeString('svg',temp); 
        }
};

console.log('Modulo atras-adelante cargado');