
// Borrar cache: control + F5 en el navegador
// https://datosclima.es

function dimeDias(mes, anyo) {
    return new Date(anyo, mes, 0).getDate();
}


/////////////////////////////////
// Seleccion de provincia
/////////////////////////////

// Pintar el select con la estacion correspondiente
function pintarSelectEstaciones(datos, provincia) {

    // Bucle recorriendo los objetos con las estaciones
    var stop = false;
    var retorno;
    cantidad = Object.keys(datos).length;
    //console.log(cantidad);

    var correctas = [];
    // Filtrado de las estaciones a pintar
    for(var i=0; i<cantidad; i++) {

        if(datos[i].provincia === provincia) {
            correctas.push(datos[i]);
        }
    }   

    // Se realiza el dibujado del select
    // Borrando el select anterior si lo hubiera
    if(correctas.length > 0) {
        retorno = true;
        // Si existe lo vacia, si no existe lo crea
        if($('#estaciones').length) {
            $("#estaciones").empty();
            $('#estaciones').append('<option value="0">Seleccione una estación</option>');
        }
        else {
            $('#capa_estaciones').append('<select class="form-control" name="estaciones" id="estaciones">');
            $('#estaciones').append('<option value="0">Seleccione una estacion</option>');
        }

        for(var i=0; i<correctas.length; i++) {
            //console.log(correctas);
            $('#estaciones').append('<option value="'+correctas[i].indicativo+'">'+correctas[i].nombre+'</option>');
        }
    }
    else {
        retorno = false;
    }  
    return retorno;
}

// Pinta los select de los meses y de los años una vez seleccionada una ciudad
function pintarSelectDias() {


    var hoy = new Date();
    var anyo = hoy.getFullYear();
    var mes = hoy.getMonth()+1;

    // Rellenar los meses y se marca como seleccionado el mes actual
    var stringMeses = '<option value="1" class="mes1">Enero</option><option value="2" class="mes2">Febrero</option><option value="3" class="mes3">Marzo</option><option value="4" class="mes4">Abril</option><option value="5" class="mes5">Mayo</option><option value="6" class="mes6">Junio</option><option value="7" class="mes7">Julio</option><option value="8" class="mes8">Agosto</option> <option value="9" class="mes9">Septiembre</option><option value="10" class="mes10">Octubre</option><option value="11" class="mes11">Noviembre</option><option value="12" class="mes12">Diciembre</option>';


    // Rellenar años
    var stringAnyos = '';
    // Se recorre para rellenar desde el año 1980 hasta el actual 
    for(var i=1980; i<=anyo; i++) {
        if(i==anyo) {
            stringAnyos = stringAnyos.concat('<option selected value="'+i+'">'+i+'</option>');
        }
        else {
            stringAnyos = stringAnyos.concat('<option value="'+i+'">'+i+'</option>');
        }  
    }

    // Muestra las capas si estaban aun ocultas
    $('#capa_mensual').show(100);  
    $('#capa_anual').show(100);

    // Vaciado de las capas para volver a pintar y
    // Se rellenan los 3 select con sus datos
    $('#consultaMensual_mes').empty().append(stringMeses);
    $('#consultaAnual').empty().append(stringAnyos);
    $('#consultaMensual_anyo').empty().append(stringAnyos);

    // Se ponen los select dibujados con los meses actuales por defecto
    // Se pone el mes actual por defecto
    for(var i=1; i<=12; i++) {
        if(mes == i) {
            $('.mes'+i).attr('selected','');
        } 
    }
}


// Busca las estaciones por ciudad usando php
function encontrarEstaciones(capa) {


    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "/api/meteo/test2",
        "method": "GET",
        "headers": {
          "cache-control": "no-cache"
        }
      }

    //var consulta = $.get('php/getEstaciones.php?apikey='+meteo.apiKey, function(data, status) {
    var consulta = $.ajax(settings).done(function (data) {

        // Se recojen los datos para crear el nuevo selec
        //console.log(data);
        console.log(data);
        // var datos = JSON.parse(data);
        var provincia = capa.value;
        meteo.estaciones = data;

        // Se crea el select en esta funcion
        retorno = pintarSelectEstaciones(data, provincia);

        // Si se encontraron estaciones, pinta las opciones para las consultas
        if(retorno) {
            pintarSelectDias();
        }
    });
}


/////////////////////////////////
// Busqueda de los datos
/////////////////////////////////



// Busca las estaciones por ciudad usando php
// Modo 1 --> Busqueda mensual
// Modo 2 Busqueda anual
function encontrarDatos(modo) {

    // Se recojen los valores de las capas de fecha y el id de la estacion seleccionada
    var numEstacion = $('#estaciones').val();
    var mesMensual = $('#consultaMensual_mes').val();
    var anyoMensual = $('#consultaMensual_anyo').val();
    var anyoAnual = $('#consultaAnual').val();

    var ejecutar = true;

    console.log('Num estacion: '+numEstacion);
    console.log('Mes mensual: '+mesMensual);
    console.log('Año mensual: '+anyoMensual);
    console.log('Año anual: '+anyoAnual);
    console.log('---------------------\n');

    // Si no hay estaccion seleccionada no se ejecuta la petición
    if(numEstacion == 0) {
        ejecutar = false;
    }

    if(ejecutar) {
        var peticion = '';

        if(modo == 1) {
            // Se obtiene los dias del mes para colocar el ultimo dia del mes en los parametros
            var dias = dimeDias(mesMensual, anyoMensual);
            peticion = 'https://opendata.aemet.es/opendata/api/valores/climatologicos/diarios/datos/fechaini/'+anyoMensual+'-'+mesMensual+'-1T00%3A00%3A00UTC/fechafin/'+anyoMensual+'-'+mesMensual+'-'+dias+'T23%3A59%3A59UTC/estacion/'+numEstacion+'?api_key='+meteo.apiKey; 
        }

        if(modo == 2) {
            peticion = 'https://opendata.aemet.es/opendata/api/valores/climatologicos/mensualesanuales/datos/anioini/'+anyoAnual+'/aniofin/'+anyoAnual+'/estacion/'+numEstacion+'?api_key='+meteo.apiKey;
        }  
        console.log(peticion);   

        // Se realiza la busqueda de los datos en el php
        var consulta =  $.get('php/getDatos.php?peticion='+peticion, function(data, status) {       

            // Se recojen los datos para crear el nuevo selec
            if(status == 'success') {
                var datos = JSON.parse(data);
                console.log(datos);

                if(!Number.isInteger(datos.estado)) {
                    
                    var cantidad = Object.keys(datos).length;
                    meteo.datosAmostrar = datos;

                    // Se pinta la tabla con los datos recogidos

                    switch(modo) {
                    case 1: inicializarGrafica1(datos);
                            break;
                    case 2: inicializarGrafica2(datos); 
                            break;
                    }     

                    console.log(cantidad);
                    
                }
                else {
                    console.log('Error '+datos.estado+': '+datos.descripcion);       
                }              
            }  
            else {
                console.log('Error en la peticion');
            }
            
        });
        

    }
}