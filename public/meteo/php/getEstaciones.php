<?php


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

$apikey = $_GET['apikey'];

// Realizar peticion 1
$resultado = peticionHTTPGET('https://opendata.aemet.es/opendata/api/valores/climatologicos/inventarioestaciones/todasestaciones/?api_key='.$apikey);

// Recuperar datos para peticion 2
$datos = json_decode($resultado);

// Realizar peticion 2 con los resultados finales y los codifica a utf8
$resultado = peticionHTTPGET($datos->datos);
$enviar = utf8_encode($resultado);

echo $enviar;


?>