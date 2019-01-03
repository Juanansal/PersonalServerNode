
editor.importar = function()
{
    // Eliminar las propiedades de drag y seleccion a todos los elementos del editor
    editor.eliminarSeleccionGlobal();
    editor.eliminarDragGlobal()
    
    
    //Lectura de capas de las opciones
    var fichero = document.getElementById('fichero');
    
    // Si hay fichero cargado continua
    if(fichero.value)
        {
             file = fichero.files;
            
             // Comprobacion de si hay multiples ficheros
             if(file.length==1)
                 {
                     // Se selecciona el fichero y con FileReader se lee
                     file = file[0];                
                     var reader = new FileReader();
                     
                        reader.onload = function (e) 
                        {                    
                            
                            // Se inicializa el canvas
                            editor.CANVAS.clear();
                            
                            // Se elimina el tag svg del string antes de pasarlo al editor (Para evitar svg duplicados)
                            var res = editor.eliminarTagDeString('svg',e.target.result);                           
                            
                           // Se pasa al editor la lectura del fichero editada
                           editor.CANVAS.svg(res);
                            
                            // Se guarda el estado nuevo
                            editor.guardarEstado();
                            
                           // Se cambia al estado 1     
                           editor.cambioEstado(1);
                        };
                        reader.readAsText(file);
                     
                     console.log(reader);
                     
                 }
             else
                 {
                     console.log("Se han encontrado multiples ficheros");
                 }
        }
    else
        {
            console.log('No se ha encontrado ningun fichero');
        }
    
    
    
};



editor.cargarFicheroSVG = function()
{
     console.log('PASA POR AQUI');  
};



console.log('Modulo importar iniciado');