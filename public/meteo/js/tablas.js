
///////////////////////////////////////////////////////
// Modo de busqueda anual
///////////////////////////////////////////////////////
function pintarTablaModo2(datos) {
   var cantidad = Object.keys(datos).length;
   // Objeto que contiene boleando para evitar duplicados a la hora de dibujar las cabeceras de las columnas
   var test = {fecha: false, tm_mes: false, p_mes: false, w_med: false };

   // vacia la tabla antes de pintar
   $('#tabla_datos').empty();

   // Bucle rellenando la tabla
   /////////////////////////////////
   // Se rellena la cabecera
   $('#tabla_datos').append('<thead>');
   $('#tabla_datos thead').append('<tr></tr>');
   for(var i=0; i<cantidad; i++) {

      
      // Fecha (mes)
      if(datos[i].fecha && !test.fecha) {
         $('#tabla_datos thead tr').append('<th> Mes </th>');
         test.fecha = true;
      }

      // Temperatura media
      if(datos[i].tm_mes && !test.tm_mes) {
         $('#tabla_datos thead tr').append('<th> Temperatura </th>');
         test.tm_mes = true;
      }

      // Precipitacion media
      if(datos[i].p_mes && !test.p_mes) {
         $('#tabla_datos thead tr').append('<th> Precipitacion </th>');
         test.p_mes = true;
      }

      // Viento medio
      if(datos[i].w_med && !test.w_med) {
         $('#tabla_datos thead tr').append('<th> Viento </th>');
         test.w_med = true;
      }
   }


   
   $('#tabla_datos').append('<tbody>');
   for(var i=0; i<cantidad-1; i++) {
      var capa = $('#tabla_datos').append('<tr>');
      var posicionTR = i+1;

      // Fecha (mes)
      if(datos[i].fecha) {
         $('#tabla_datos tbody tr:nth-of-type('+posicionTR+')').append('<td>'+dimeMesTexto(i+1)+'</td>');
      }
      else {
         $('#tabla_datos tbody tr:nth-of-type('+posicionTR+')').append('<td>---</td>');
      }

      // Temperatura media
      if(datos[i].tm_mes) {
         $('#tabla_datos tbody tr:nth-of-type('+posicionTR+')').append('<td>'+datos[i].tm_mes+'</td>');
      }
      else {
         $('#tabla_datos tbody tr:nth-of-type('+posicionTR+')').append('<td>---</td>');
      }

      // Precipitacion media
      if(datos[i].p_mes) {
         $('#tabla_datos tbody tr:nth-of-type('+posicionTR+')').append('<td>'+datos[i].p_mes+'mm</td>');
      }
      else {
         $('#tabla_datos tbody tr:nth-of-type('+posicionTR+')').append('<td>---</td>');
      }

      // Viento medio
      if(datos[i].w_med) {
         $('#tabla_datos tbody tr:nth-of-type('+posicionTR+')').append('<td>'+datos[i].w_med+'</td>');
      }
      else {
         $('#tabla_datos tbody tr:nth-of-type('+posicionTR+')').append('<td>---</td>');
      }
      
   }
}




///////////////////////////////////////////////////////////////
// Modo de busqueda mensual
///////////////////////////////////////////////////////////////
function pintarTablaModo1(datos) {
   var cantidad = Object.keys(datos).length;
   // Objeto que contiene boleando para evitar duplicados a la hora de dibujar las cabeceras de las columnas
   var test = {fecha: false, tmed: false, tmax: false, prec: false, velmedia: false };

   // vacia la tabla antes de pintar
   $('#tabla_datos').empty();
   
   // Bucle rellenando la tabla
   /////////////////////////////////
   // Se rellena la cabecera
   $('#tabla_datos').append('<thead>');
   $('#tabla_datos thead').append('<tr></tr>');

   for(var i=0; i<cantidad; i++) {

      // Fecha (mes)
      if(datos[i].fecha && !test.fecha) {
         var date = new Date(datos[i].fecha);
         $('#tabla_datos thead tr').append('<th>'+dimeMesTexto(date.getMonth()+1)+' </th>');
         test.fecha = true;
      }

      // Temperatura media
      if(datos[i].tmed && !test.tmed) {
         $('#tabla_datos thead tr').append('<th> Temp Med </th>');
         test.tmed = true;
      }

      // Picos de temperatura (min max y hora)
      if(datos[i].tmax && datos[i].tmin && !test.tmax) {
         $('#tabla_datos thead tr').append('<th> Temp extremos </th>');
         test.tmax = true;
      }

      // Precipitacion 
      if(datos[i].prec && !test.prec) {
         $('#tabla_datos thead tr').append('<th> Precipitación </th>');
         test.prec = true;
      }

      // Viento medio
      if(datos[i].velmedia && !test.velmedia) {
         $('#tabla_datos thead tr').append('<th> Viento </th>');
         test.velmedia = true;
      }
   }


   // Se rellena los datos
   $('#tabla_datos').append('<tbody>');

   for(var i=0; i<cantidad; i++) {
      var capa = $('#tabla_datos').append('<tr>');
      var posicionTR = i+1;

      // Fecha (dia)
      if(datos[i].fecha) {
         var date = new Date(datos[i].fecha);
         $('#tabla_datos tbody tr:nth-of-type('+posicionTR+')').append('<td>'+date.getDate()+'</td>');
      }
      else {
         $('#tabla_datos tbody tr:nth-of-type('+posicionTR+')').append('<td>---</td>');
      }

      // Temperatura media
      if(datos[i].tmed) {
         $('#tabla_datos tbody tr:nth-of-type('+posicionTR+')').append('<td>'+datos[i].tmed+'</td>');
      }
      else {
         $('#tabla_datos tbody tr:nth-of-type('+posicionTR+')').append('<td>---</td>');
      }

      // Temperatura media
      if(datos[i].tmax && datos[i].tmin) {
         $('#tabla_datos tbody tr:nth-of-type('+posicionTR+')').append('<td><strong>max:</strong> '+datos[i].tmax+' ('+datos[i].horatmax+') /// <strong>min:</strong> '+datos[i].tmin+' ('+datos[i].horatmin+')</td>');
      }
      else {
         $('#tabla_datos tbody tr:nth-of-type('+posicionTR+')').append('<td>---</td>');
      }

      // Precipitacion
      if(datos[i].prec) {
         $('#tabla_datos tbody tr:nth-of-type('+posicionTR+')').append('<td>'+datos[i].prec+'mm</td>');
      }
      else {
         $('#tabla_datos tbody tr:nth-of-type('+posicionTR+')').append('<td>---</td>');
      }

      // Viento medio
      if(datos[i].velmedia) {
         $('#tabla_datos tbody tr:nth-of-type('+posicionTR+')').append('<td>'+datos[i].velmedia+'</td>');
      }
      else {
         $('#tabla_datos tbody tr:nth-of-type('+posicionTR+')').append('<td>---</td>');
      }
      
   }
}

///////////////////////////////////////////////////////////////
// Funciones de apoyo para el dibujado de las tablas
///////////////////////////////////////////////////////////////

// Funcion de apoyo para el rellenado de tabla que danod el numero del mes devuelve el mes en texto
function dimeMesTexto(num) {
   retorno = '';
   switch(num) {
      case 1: retorno = 'Enero'; break;
      case 2: retorno = 'Febrero'; break;
      case 3: retorno = 'Marzo'; break;
      case 4: retorno = 'Abril'; break;
      case 5: retorno = 'Mato'; break;
      case 6: retorno = 'Junio'; break;
      case 7: retorno = 'Julio'; break;
      case 8: retorno = 'Agosto'; break;
      case 9: retorno = 'Septiembre'; break;
      case 10: retorno = 'Octubre'; break;
      case 11: retorno = 'Noviembre'; break;
      case 12: retorno = 'Diciembre'; break;
   }
   return retorno;
}