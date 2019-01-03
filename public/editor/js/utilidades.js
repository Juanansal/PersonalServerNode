
// Borra la capa y sus hijos con el id pasado por parametro
editor.borrarCapaPorId = function(id)
{
    var capa = document.getElementById(id);  
    if(capa)
        {
            capa.parentNode.removeChild(capa);
        }
};



// Se muestra el html del menu derecha contenido en data.js
editor.mostrarPropiedades = function(html)
{
    var padre = document.getElementById("menu_derecha");
    //console.log(figura);
    
    // Borrar capa de propiedades anterior (Si ya esta creada la capa la borra)  
    editor.borrarCapaPorId("datos_propiedades");
    
    // Crear Capa de propiedades
    var div = document.createElement("div");
    div.innerHTML = html;
    padre.appendChild(div);
    
};



// Se elimina el tag de un codigo html contenido en un string
editor.eliminarTagDeString = function(tag, string)
{
    var regex = new RegExp('<'+tag+'[^><]*>|<.'+tag+'[^><]*>','g')
    var res = string.replace(regex,'');
    return res;
};



// Desactiva la seleccion de todos los elemetos del editor
editor.eliminarSeleccionGlobal = function()
{
    
    // Casos especiales para deselecciones profunas
    if(editor.seleccionado != null)
        {
            if(editor.seleccionado.attr('tipo')=='polyline' && editor.seleccionado.attr('tipoSeleccion')==1)  // Caso para la polilinea
                {
                     editor.seleccionado.selectize(false, {deepSelect:true});
                     editor.seleccionado.attr('tipoSeleccion',0);
                }
        }
    
    editor.seleccionado = null;
    editor.CANVAS.each(function(i, children) 
        {
        
    // Eliminacion de la posibilidad de seleccion, condicion para el cuadro de seleccion que no debe tocarse   
        if(this.type != 'g')
           this.selectize(false);                                             
        });
};



// Elimina la propiedad de Drag de todos los elementos del editor
editor.eliminarDragGlobal = function()
{
    
    editor.CANVAS.each(function(i, children) {
                 this.draggable(false);                                         
             });
};



// Se modifica el mensaje del pie de pagina con el mensaje pasado por parametro
// 2º parametro opcional para el color
editor.mostrarMensajePie  = function(mensaje,color)
{
    capa = document.getElementById('texto-pie');
    
    // Insertar mensaje en la capa
    capa.innerHTML = mensaje;
    
    // Si hay color como parametro se modifica
    // Si no hay color se inserta un valor por defecto
    if(color)
        {
            capa.style.color = color;
        }
    else
        {
            capa.style.color = '#CCC';
        }
};




