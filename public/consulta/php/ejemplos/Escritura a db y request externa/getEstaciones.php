
<?php

/*
{
	"unidad_generadora": "Servicio de Observación",
	"periodicidad": "continuamente",
	"formato": "application/json",
	"copyright": "© AEMET. Autorizado el uso de la información y su reproducción citando a AEMET como autora de la misma.",
	"notaLegal": "http://www.aemet.es/es/nota_legal",
	"campos": [{
			"id": "idema",
			"descripcion": "Indicativo climatógico de la estación meteorológia automática",
			"tipo_datos": "string",
			"requerido": true
		},
		{
			"id": "lon",
			"descripcion": "Longitud de la estación meteorológica (grados)",
			"tipo_datos": "float",
			"requerido": true
		},
		{
			"id": "lat",
			"descripcion": "Latitud de la estación meteorológica (grados)",
			"tipo_datos": "float",
			"requerido": true
		},
		{
			"id": "alt",
			"descripcion": "Altitud de la estación en metros",
			"tipo_datos": "float",
			"requerido": true
		},
		{
			"id": "ubi",
			"descripcion": "Ubicación de la estación. Nombre de la estación",
			"tipo_datos": "string",
			"requerido": true
		},
		{
			"id": "fint",
			"descripcion": "Fecha hora final del período de observación, se trata de datos del periodo de la hora anterior a la indicada por este campo (hora UTC)",
			"tipo_datos": "string (AAAA-MM-DDTHH:MM:SS)",
			"requerido": false
		},
		{
			"id": "prec",
			"descripcion": "Precipitación acumulada, medida por el pluviómetro, durante los 60 minutos anteriores a la hora indicada por el período de observación 'fint' (mm, equivalente a l/m2)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "pacutp",
			"descripcion": "Precipitación acumulada, medida por el disdrómetro, durante los 60 minutos anteriores a la hora indicada por el período de observación 'fint' (mm, equivalente a l/m2)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "pliqtp",
			"descripcion": "Precipitación líquida acumulada durante los 60 minutos anteriores a la hora indicada por el período de observación 'fint' (mm, equivalente a l/m2)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "psolt",
			"descripcion": "Precipitación sólida acumulada durante los 60 minutos anteriores a la hora indicada por el período de observación 'fint' (mm, equivalente a l/m2)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "vmax",
			"descripcion": "Velocidad máxima del viento, valor máximo del viento mantenido 3 segundos y registrado en los 60 minutos anteriores a la hora indicada por el período de observación 'fint' (m/s)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "vv",
			"descripcion": "Velocidad media del viento, media escalar de las muestras adquiridas cada 0,25 ó 1 segundo en el período de 10 minutos anterior al indicado por 'fint' (m/s)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "vmaxu",
			"descripcion": "Velocidad máxima del viento (sensor ultrasónico), valor máximo del viento mantenido 3 segundos y registrado en los 60 minutos anteriores a la hora indicada por el período de observación 'fint' (m/s)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "vvu",
			"descripcion": "Velocidad media del viento (sensor ultrasónico), media escalar en el periódo de 10 minutos anterior al indicado por 'fint' de las muestras adquiridas cada 0,25 ó 1 segundo (m/s)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "dv",
			"descripcion": "Dirección media del viento, en el período de 10 minutos anteriores a la fecha indicada por 'fint' (grados)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "dvu",
			"descripcion": "Dirección media del viento (sensor ultrasónico), en el período de 10 minutos anteriores a la fecha indicada por 'fint' (grados)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "dmax",
			"descripcion": "Dirección del viento máximo registrado en los 60 minutos anteriores a la hora indicada por 'fint' (grados)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "dmaxu",
			"descripcion": "Dirección del viento máximo registrado en los 60 minutos anteriores a la hora indicada por 'fint' por el sensor ultrasónico (grados)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "stdvv",
			"descripcion": "Desviación estándar de las muestras adquiridas de velocidad del viento durante los 10 minutos anteriores a la fecha dada por 'fint' (m/s)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "stddv",
			"descripcion": "Desviación estándar de las muestras adquiridas de la dirección del viento durante los 10 minutos anteriores a la fecha dada por 'fint' (grados)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "stdvvu",
			"descripcion": "Desviación estándar de las muestras adquiridas de velocidad del viento durante los 10 minutos anteriores a la fecha dada por 'fint' obtenido del sensor ultrasónico de viento instalado junto al convencional (m/s)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "stddvu",
			"descripcion": "Desviación estándar de las muestras adquiridas de la dirección del viento durante los 10 minutos anteriores a la fecha dada por 'fint' obtenido del sensor ultrasónico de viento instalado junto al convencional (grados)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "hr",
			"descripcion": "Humedad relativa instantánea del aire correspondiente a la fecha dada por 'fint' (%)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "inso",
			"descripcion": "Duración de la insolación durante los 60 minutos anteriores a la hora indicada por el período de observación 'fint' (horas)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "pres",
			"descripcion": "Presión instantánea al nivel en el que se encuentra instalado el barómetro y correspondiente a la fecha dada por 'fint' (hPa)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "pres_nmar",
			"descripcion": "Valor de la presión reducido al nivel del mar para aquellas estaciones cuya altitud es igual o menor a 750 metros y correspondiente a la fecha indicada por 'fint' (hPa)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "ts",
			"descripcion": "Temperatura suelo, temperatura instantánea junto al suelo y correspondiente a los 10 minutos anteriores a la fecha dada por 'fint' (grados Celsius)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "tss20cm",
			"descripcion": "Temperatura subsuelo 20 cm, temperatura del subsuelo a una profundidad de 20 cm y correspondiente a los 10 minutos anteriores a la fecha dada por 'fint' (grados Celsius)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "tss5cm",
			"descripcion": "Temperatura subsuelo 5 cm, temperatura del subsuelo a una profundidad de 5 cm y correspondiente a los 10 minutos anteriores a la fecha dada por 'fint' (grados Celsius)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "ta",
			"descripcion": "Temperatura instantánea del aire correspondiente a la fecha dada por 'fint' (grados Celsius)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "tpr",
			"descripcion": "Temperatura del punto de rocío calculado correspondiente a la fecha 'fint' (grados Celsius)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "tamin",
			"descripcion": "Temperatura mínima del aire, valor mínimo de los 60 valores instantáneos de 'ta' medidos en el período de 60 minutos anteriores a la hora indicada por el período de observación 'fint' (grados Celsius)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "tamax",
			"descripcion": "Temperatura máxima del aire, valor máximo de los 60 valores instantáneos de 'ta' medidos en el período de 60 minutos anteriores a la hora indicada por el período de observación 'fint' (grados Celsius)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "vis",
			"descripcion": "Visibilidad, promedio de la medida de la visibilidad correspondiente a los 10 minutos anteriores a la fecha dada por 'fint' (Km)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "geo700",
			"descripcion": "Altura del nivel de la superficie de referencia barométrica de 700 hPa calculado para las estaciones con altitud mayor de 2300 metros y correspondiente a la fecha indicada por 'fint' (m geopotenciales)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "geo850",
			"descripcion": "Altura del nivel de la superficie de referencia barométrica de 850 hPa calculado para las estaciones con altitud mayor de 1000 metros y menor o igual a 2300 metros y correspondiente a la fecha indicada por 'fint' (m geopotenciales)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "geo925",
			"descripcion": "Altura del nivel de la superficie barométrica de 925 hPa calculado para las estaciones con altitud mayor de 750 metros y y menor o igual a 1000 metros correspondiente a la fecha indicada por 'fint' (m geopotenciales)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "rviento",
			"descripcion": "Recorrido del viento durante los 60 minutos anteriores a la fecha indicada por 'fint' (Hm)",
			"tipo_datos": "float",
			"requerido": false
		},
		{
			"id": "nieve",
			"descripcion": "Espesor de la capa de nieve medid en los 10 minutos anteriores a la a la fecha indicada por 'fint' (cm)",
			"tipo_datos": "float",
			"requerido": false
		}
	]
}

// 2 estaciones a almacenar
{
  "idema" : "8019",
  "lon" : -0.57083,
  "fint" : "2018-11-09T04:00:00",
  "prec" : 0.0,
  "alt" : 43.0,
  "vmax" : 8.2,
  "vv" : 4.8,
  "dv" : 250.0,
  "lat" : 38.28278,
  "dmax" : 260.0,
  "ubi" : "ALICANTE-ELCHE/AEROPUERTO",
  "pres" : 1011.9,
  "hr" : 57.0,
  "stdvv" : 1.0,
  "ts" : 11.4,
  "pres_nmar" : 1015.6,
  "tamin" : 13.6,
  "ta" : 13.8,
  "tamax" : 14.0,
  "tpr" : 5.5,
  "stddv" : 6.0,
  "inso" : 0.0
}, {
  "idema" : "8025",
  "lon" : -0.494167,
  "fint" : "2018-11-09T04:00:00",
  "prec" : 0.0,
  "alt" : 81.0,
  "vmax" : 7.3,
  "vv" : 3.2,
  "dv" : 261.0,
  "lat" : 38.3725,
  "dmax" : 275.0,
  "ubi" : "ALICANTE",
  "pres" : 1005.9,
  "hr" : 58.0,
  "stdvv" : 1.1,
  "ts" : 12.8,
  "pres_nmar" : 1015.7,
  "tamin" : 13.5,
  "ta" : 13.5,
  "tamax" : 14.0,
  "tpr" : 5.5,
  "vis" : 20.0,
  "stddv" : 27.0,
  "inso" : 0.0,
  "tss5cm" : 15.1,
  "pacutp" : 0.01,
  "tss20cm" : 15.6
}





*/


// Funcion para realizar la peticion http para recuperar los datos
function  peticionHTTPGET($url) {
   $curl = curl_init();

   curl_setopt_array($curl, array(
   CURLOPT_URL => $url,
   CURLOPT_RETURNTRANSFER => true,
   CURLOPT_ENCODING => "",
   CURLOPT_MAXREDIRS => 10,
   CURLOPT_TIMEOUT => 30,
   CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
   CURLOPT_CUSTOMREQUEST => "GET",
   CURLOPT_HTTPHEADER => array(
      "cache-control: no-cache"
   ),
   ));

   $response = curl_exec($curl);
   $err = curl_error($curl);

   curl_close($curl);

   if ($err) {
      return "Error #:" . $err;
   } else {
      return $response;
   }

}

function recuperarDatosEstacion($idEstacion) {
	// Peticion GET para recuperar los datos de peticion correcta (Alicante)
	$respuesta = peticionHTTPGET('https://opendata.aemet.es/opendata/api/observacion/convencional/datos/estacion/'.$idEstacion.'?api_key='.AEMET_APIKEY);

	// Se pasa el json a cadena php
	$datos = json_decode($respuesta);

	// Se recupera los datos que necesitamos
	$rutaConLosDatos = $datos->datos;
	$rutaConLosMetadatos = $datos->metadatos;

	// Se realiza los peticion de todas las estacion con la url que nos proporciona la peticion anterior
	$respuesta2 = peticionHTTPGET($datos->datos);
	$retorno = json_decode($respuesta2);

	return $retorno;
}

function cargarEnDB($datos) {

	// Recorrido cogiendo los datos que interesan
	foreach($datos as $dato) {

		// Se recojen todos los datos
		// Fecha
		if(isset($dato->fint)) { 
			$fecha = $dato->fint; 
		}
		else {
			$fecha = 0;
		}
	
		// Precipitacion
		if(isset($dato->prec)) { 
			$precipitacion = $dato->prec; 
		}
		else {
			$precipitacion = 0;
		}

		// Viento maxima del viento durante esa hora
		if(isset($dato->vmax)) { 
			$vientoMax = $dato->vmax; 
		}
		else {
			$vientoMax = 0;
		}

		// Velocidad media del viento
		if(isset($dato->vv)) { 
			$vientoMedio = $dato->vv; 
		}
		else {
			$vientoMedio = 0;
		}

		$humedad = $dato->hr; // Humedad
		
		// Presion
		if(isset($dato->pres)) { 
			$presion = $dato->pres; 
		}
		else {
			$presion = 0;
		}

		// Temperatura media
		if(isset($dato->ta)) { 
			$temperatura = $dato->ta; 
		}
		else {
			$temperatura = 0;
		}

		// Temperatura minima
		if(isset($dato->tamin)) { 
			$temperaturaMin = $dato->tamin; 
		}
		else {
			$temperaturaMin = 0;
		}

		// Temperatura maxima
		if(isset($dato->tamax)) { 
			$temperaturaMax = $dato->tamax; 
		}
		else {
			$temperaturaMax = 0;
		}

		// Insolacion
		if(isset($dato->inso)) { 
			$insolacion = $dato->inso; 
		}
		else {
			$insolacion = 0;
		}

		// Temperatura de formacion del rocio
		if(isset($dato->tpr)) { 
			$rocio = $dato->tpr; 
		}
		else {
			$rocio = 0;
		}

		// Visibilidad
		if(isset($dato->vis)) { 
			$visibilidad = $dato->vis; 
		}
		else {
			$visibilidad = 0;
		}

		// Asignacion de la tabla de la estacion a actuar dependiendo del id de estacion recojido
		if($dato->idema == '8025') { $tabla='alicante'; }
		if($dato->idema == '8019') { $tabla='aeropuerto'; }

		// Ejecion del SQL a la base de datos
		$sql = "INSERT INTO `".$tabla."` (id, fecha, precipitacion, vientomax, vientomedio, humedad, presion, temperatura, temperaturamax, temperaturamin, insolacion, rocio, visibilidad) 
		VALUES (NULL, '".$fecha."', '".$precipitacion."', '".$vientoMax."', '".$vientoMedio."', '".$humedad."', '".$presion."', '".$temperatura."', '".$temperaturaMax."', '".$temperaturaMin."', '".$insolacion."', '".$rocio."','".$visibilidad."')";
		$respuesta = ejecutarSQL(SERVER_NAME, SERVER_USERNAME, SERVER_USERPASS, 'juanansa_meteo', $sql);
		echo $respuesta.'<br>';

	} // fin foreach
	echo '<br><br><br>';
}

// Carga del fichero init
include('init.php');
include('libSQL.php');


// Recuperar los datos de alicante
$datosAlicante = recuperarDatosEstacion('8019');
// Introducir los datos en la bases de datos
$resultado = cargarEnDB($datosAlicante);

//Recuperar los datos de aeropuerto
$datosAeropuerto = recuperarDatosEstacion('8025');
cargarEnDB($datosAeropuerto);










?>