
// Carga la imagen para el estado 7

editor.cargarImagen = function(event)
{
    //console.log(event);
    
    //Lectura de capas de las opciones
    var ficheroImagen = document.getElementById('imagen');

    // Si hay fichero cargado continua
    if(ficheroImagen.value)
        {
             file = ficheroImagen.files;

             // Comprobacion de si hay multiples ficheros
             if(file.length==1)
                 {
                     // Se selecciona el fichero y con FileReader se lee
                     file = file[0]; 

                      // Se comprueba que es una imagen
                      if (file.type.match('image.*')) 
                        {
                            // https://www.html5rocks.com/es/tutorials/file/dndfiles/

                            var reader = new FileReader();

                            reader.onload = function (e) 
                            {                 
                            // Imagen cargada correctamente
                               // console.log(e.target.result);
                               editor.imagenCargada = e.target.result;
                               console.log('Imagen cargada correctamente');
                                
                                // Mostrar mensaje en el pie
                                editor.mostrarMensajePie('Imagen cargada correctamente');

                            };
                            reader.readAsDataURL(file);
                        }
                      else
                        {
                            console.log("El archivo no es una imagen");                          
                            // Mostrar mensaje en el pie
                            editor.mostrarMensajePie('El archivo no es una imagen','#F00');
                        }                             
                 }
             else
                 {
                      console.log("Se han encontrado multiples ficheros");
                     // Mostrar mensaje en el pie
                     editor.mostrarMensajePie('Se han encontrado multiples archivos','#F00');          
                 }
        }
    else
        {
            console.log('No se ha encontrado ningun archivo');
            // Mostrar mensaje en el pie
            editor.mostrarMensajePie('No se ha encontrado ningun archivo','#F00'); 
        }
       
};


// Cambio de la imagen seleccionada 
editor.cambiarImagen = function(capa)
{
    // Se busca la imagen seleccionada
    figura = editor.seleccionado;

    // se realiza el cambio de la imagen solo, si hay una imagen cargada previamente
    if(editor.imagenCargada)
        {
            figura.attr('href',editor.imagenCargada);
            
             // Mostrar mensaje en el pie
             editor.mostrarMensajePie('Imagen cambiada correctamente'); 
        }
    else
        {
            // Mostrar mensaje en el pie
            editor.mostrarMensajePie('No se ha cargado ninguna imagen','#F00'); 
        }
    
};



console.log("Modulo Ficheros iniciado");



