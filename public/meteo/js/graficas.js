// https://codepen.io/flopreynat/pen/BfLkA
// https://developers.google.com/chart/interactive/docs/gallery/areachart
/*

Para añadir nuevas graficas hay que añadir el la opcion en los switch de:
 - seleccionar grafica
 - dibujar grafica del tipo correspondiente
 - crear la funcion de datos a introducir en la grafica con los datos y opciones
 - Crear el boton para el cambio de la gráfica 

Opciones de pintado de la gráfica
   0 - Nada (Por defecto)
   ----------------------------
  Modo 1 (Busqueda mensual)
   10 - Temperatura
   11 - Precipitacion
   12 - Viento

   Modo 2 (Busqueda anual)
   1 - Temperatura
   2 - Precipitación
*/

function seleccionarGrafica(datos,modo, opcion) {
   google.charts.load('current', {'packages':['line', 'corechart']});
   //console.log(modo+'    '+opcion);

   // Si no hay opción (Primer dibujado de la gráfica), se selecciona una opcion por defecto
   if(opcion == null) {
      switch(modo) {
         case 1: opcion = 10; break;
         case 2: opcion = 1; break;
      }
   }

   switch(opcion) {
      case 1: meteo.graficaAmostrar = 1; 
               google.charts.setOnLoadCallback(dibujarGraficaLineas); 
               break;

      case 2: meteo.graficaAmostrar = 2; 
               google.charts.setOnLoadCallback(dibujarGraficaBarras); 
               break;

      case 10: meteo.graficaAmostrar = 10; 
               google.charts.setOnLoadCallback(dibujarGraficaLineas); 
               break;

      case 11: meteo.graficaAmostrar = 11; 
               google.charts.setOnLoadCallback(dibujarGraficaBarras); 
               break;

      case 12: meteo.graficaAmostrar = 12; 
               google.charts.setOnLoadCallback(dibujarGraficaLineas); 
               break;
   }

   // Una vez dibujada la grafica, se dibujan los botones
   dibujarBotones(modo);  
}



function dibujarGraficaLineas() {

   
   var datos = meteo.datosAmostrar;
   var cantidad = Object.keys(datos).length;

   var chartDiv = document.getElementById('grafica');
   var data;

   // Seleccciona los datos a mostrar en la gráfica dependiendo de la opcion seleccionada
   switch(meteo.graficaAmostrar) {
      case 1: data = datosOpcion1(datos); break;
      case 10: data = datosOpcion10(datos); break;
      case 12: data = datosOpcion12(datos); break;
   }
   
      var materialOptions = {
         backgroundColor: '#FFE',
         chart: { title: 'Datos solicitados'},
         hAxis: [1,2,3,4,5,6,7,8,9,10,11,12,13]
         
      };

      function drawMaterialChart() {
         var materialChart = new google.visualization.AreaChart(chartDiv);
         materialChart.draw(data.data, materialOptions);
      }
      
      drawMaterialChart();
}

// Busqueda anual, temperatura
function datosOpcion1(datos) {
   var cantidad = Object.keys(datos).length;
   var retorno = {};
   retorno.data = new google.visualization.DataTable();

   retorno.data.addColumn('number', 'Mes');
   retorno.data.addColumn('number', "Temperatura máxima");
   retorno.data.addColumn('number', "Temperatura media");
   retorno.data.addColumn('number', "Temperatura minima");

   // Se introducen los valores en la grafica
   retorno.data.addRows(cantidad)
   for(var i=0; i<cantidad-1; i++) {
      retorno.data.setCell(i, 0, i+1);
      console.log('BUENOS DIAS: '+typeof(datos[i].tm_max));
      retorno.data.setCell(i, 1, datos[i].tm_max);
      retorno.data.setCell(i, 2, datos[i].tm_mes);
      retorno.data.setCell(i, 3, datos[i].tm_min);
   }
   return retorno;
}


function dibujarGraficaBarras() {

   
   var datos = meteo.datosAmostrar;
   var cantidad = Object.keys(datos).length;

   var chartDiv = document.getElementById('grafica');
   var data;

   // Seleccciona los datos a mostrar en la gráfica dependiendo de la opcion seleccionada
   switch(meteo.graficaAmostrar) {
      case 2: data = datosOpcion2(datos); break;
      case 11: data = datosOpcion11(datos); break;
   }
   
      var materialOptions = {
         backgroundColor: '#FFE'
      };

      function drawMaterialChart() {
         var materialChart = new google.visualization.ColumnChart(chartDiv);
         materialChart.draw(data.data, materialOptions);
      }
      
      drawMaterialChart();
}

// Busqueda anual, temperatura
function datosOpcion1(datos) {
   var cantidad = Object.keys(datos).length;
   var retorno = {};
   retorno.data = new google.visualization.DataTable();

   retorno.data.addColumn('number', 'Mes');
   retorno.data.addColumn('number', "Temperatura máxima");
   retorno.data.addColumn('number', "Temperatura media");
   retorno.data.addColumn('number', "Temperatura minima");

   // Se introducen los valores en la grafica
   retorno.data.addRows(cantidad)
   for(var i=0; i<cantidad-1; i++) {
      retorno.data.setCell(i, 0, i+1);
      console.log('BUENOS DIAS: '+typeof(datos[i].tm_max));
      retorno.data.setCell(i, 1, datos[i].tm_max);
      retorno.data.setCell(i, 2, datos[i].tm_mes);
      retorno.data.setCell(i, 3, datos[i].tm_min);
   }
   return retorno;
}







// Busqueda anual, precipitacion
function datosOpcion2(datos) {
   var cantidad = Object.keys(datos).length;
   var retorno = {};
   retorno.data = new google.visualization.DataTable();

   retorno.data.addColumn('number', 'Mes');
   retorno.data.addColumn('number', "Precipitación");


   // Se introducen los valores en la grafica
   retorno.data.addRows(cantidad)
   for(var i=0; i<cantidad-1; i++) {
      retorno.data.setCell(i, 0, i+1);
      retorno.data.setCell(i, 1, datos[i].p_mes);
   }
   return retorno;
}



// Busqueda mensual, precipitacion
function datosOpcion2(datos) {

   var cantidad = Object.keys(datos).length;
   var retorno = {};

    // Valores de cabecera
    var meter = [];
    var aux = ['Mes','Precipitación', { role: "style" }]
    meter.push(aux);

    // Valores del api (Precipitacion)
   for(var i=0; i<cantidad-1; i++) {

      // Se recojen los valores
      var prec = datos[i].p_mes;
      prec = parseFloat(prec);
      mes = i+1;

      // Se introduce los valores del api
      aux = [mes, prec, "blue"];
      meter.push(aux);
   }
  
   // Se mete el array generado para ser colocada en la grafica correctamente
   retorno.data = google.visualization.arrayToDataTable(meter);
   console.log(retorno.data);
   return retorno;
}




// Busqueda mensual, temperatura
function datosOpcion10(datos) {
   var cantidad = Object.keys(datos).length;
   var retorno = {};
   retorno.data = new google.visualization.DataTable();

   retorno.data.addColumn('number', 'Mes');
   retorno.data.addColumn('number', "Temperatura maxima");
   retorno.data.addColumn('number', "Temperatura media");
   retorno.data.addColumn('number', "Temperatura minima");

   // Se introducen los valores en la grafica
   retorno.data.addRows(cantidad)
   for(var i=0; i<cantidad-1; i++) {

      // Reemplazo de las comas que nos da el api
      var tmax = datos[i].tmax.replace(",", ".");
      var tmed = datos[i].tmed.replace(",", ".");
      var tmin = datos[i].tmin.replace(",", ".");

      retorno.data.setCell(i, 0, i+1);
      retorno.data.setCell(i, 1, tmax);
      retorno.data.setCell(i, 2, tmed);
      retorno.data.setCell(i, 3, tmin);
   }
   return retorno;
}





// Busqueda mensual, precipitacion
function datosOpcion11(datos) {
   var cantidad = Object.keys(datos).length;
   var retorno = {};

    // Valores de cabecera
    var meter = [];
    var aux = ['Dia','Precipitación', { role: "style" }]
    meter.push(aux);

    // Valores del api (Precipitacion)
   for(var i=0; i<cantidad-1; i++) {

      // Reemplazo de las comas que nos da el api
      var prec = datos[i].prec.replace(",", ".");
      prec = parseFloat(prec);
      var dia = parseFloat(i+1)

      // Corrección del valor de error que ha veces devuelve el api
      if(prec =='Ip') { prec = '0.0'; }

      aux = [dia, prec, "blue"];
      meter.push(aux);
   }
  
   // Se mete el array generado para ser colocada en la grafica correctamente
   retorno.data = google.visualization.arrayToDataTable(meter);
   console.log(retorno.data);
   return retorno;
}



// Busqueda mensual, viento
function datosOpcion12(datos) {
   var cantidad = Object.keys(datos).length;
   var retorno = {};
   retorno.data = new google.visualization.DataTable();

   retorno.data.addColumn('number', 'Mes');
   retorno.data.addColumn('number', 'Racha maxima');
   retorno.data.addColumn('number', "Velocidad media");

   // Se introducen los valores en la grafica
   retorno.data.addRows(cantidad)
   for(var i=0; i<cantidad-1; i++) {

      // Reemplazo de las comas que nos da el api
      var racha = datos[i].racha.replace(",", ".");
      var velmedia = datos[i].velmedia.replace(",", ".");

      retorno.data.setCell(i, 0, i+1);
      retorno.data.setCell(i, 1, racha);
      retorno.data.setCell(i, 2, velmedia);
   }
   return retorno;
}


      

function dibujarBotones(modo) {

   // Antes de dibujar los botones se vacia
   $('#botonesGrafica').empty();

   if(modo==1){
      $('#botonesGrafica').append('<button onclick="cambiarOpcionGrafica(1, 10)" class="botonGrafica">Temperatura</button>');
      $('#botonesGrafica').append('<button onclick="cambiarOpcionGrafica(1, 11)" class="botonGrafica">Precipitación</button>');
      $('#botonesGrafica').append('<button onclick="cambiarOpcionGrafica(1, 12)" class="botonGrafica">Viento</button>');
   }

   if(modo==2) {
      $('#botonesGrafica').append('<button onclick="cambiarOpcionGrafica(2, 1)" class="botonGrafica">Temperatura</button>');
      $('#botonesGrafica').append('<button onclick="cambiarOpcionGrafica(2, 2)" class="botonGrafica">Precipitación</button>');
   }
}
   
// Funcion que cambia la gráfica que se encuentra en los botones dibujados que acompaña la grafica   
function cambiarOpcionGrafica(modo, opcion) {
   seleccionarGrafica(meteo.datosAmostrar, modo, opcion);
}
