
editor.exportar = function()
{
    // Eliminar las propiedades de drag y seleccion a todos los elementos del editor
    editor.eliminarSeleccionGlobal();
    editor.eliminarDragGlobal()
    
    
    //Lectura de capas de las opciones
    var nombreFichero = document.getElementById('nombrefichero').value;
    var formatoFichero = document.getElementById('formatofichero').value;
    
    // Dependiendo del formato se ejecuta funciones especificas para cada formato para exportar
    if(formatoFichero == 'svg')
    {    
        editor.exportar_a_SVG(nombreFichero);   
    }
    
    if(formatoFichero == 'img')
    {    
        editor.exportar_a_IMG(nombreFichero);   
    }
};





// Realizar una exportacion del canvas a svg
editor.exportar_a_SVG = function(nombre)
{
    
    // Pasar a el contenido svg a un formato para escribir
    
    var html = editor.CANVAS.svg(); // Lectura de todo el svg del editor  
    var html2 = [html]; //Se convierte a array para poder ser tratado como blob
    
    
    escribir = new Blob(html2, {
        type: 'text/html'
    });
    
    // Descarga del fichero
    var reader = new FileReader();
    reader.onload = function (event) 
    {
        var save = document.createElement('a');
        save.href = event.target.result;
        save.target = '_blank';
        save.download = nombre+'.svg';
        var clicEvent = new MouseEvent('click', {
            'view': window,
                'bubbles': true,
                'cancelable': true
        });
        save.dispatchEvent(clicEvent);
        (window.URL || window.webkitURL).revokeObjectURL(save.href);
    };
    reader.readAsDataURL(escribir);
    
    
};



editor.exportar_a_IMG = function()
{
     // Pasar a el contenido svg a un formato para escribir
    var html = editor.CANVAS.svg(); // Lectura de todo el svg del editor
    
    // Se recoge el nombre del fichero
    var nombreFichero = document.getElementById('nombrefichero').value;
    
    // Se pasa el string svg a un elemento svg del DOM
    var wrapper= document.createElement('svg');
    wrapper.innerHTML= html;
    var meter = wrapper.firstChild;
    
    // Se realiza la conversion y se descarga un fichero
    saveSvgAsPng(meter, nombreFichero, {backgroundColor: '#FFFFFF'});
};


function drawInlineSVG(ctx, rawSVG, callback) {

    var svg = new Blob([rawSVG], {type:"image/svg+xml;charset=utf-8"}),
        domURL = self.URL || self.webkitURL || self,
        url = domURL.createObjectURL(svg),
        img = new Image;
    
    img.onload = function () {
        ctx.drawImage(this, 0, 0);     
        domURL.revokeObjectURL(url);
        callback(this);
    };
    
    img.src = url;
}
    
    

console.log('Modulo exportar iniciado');

