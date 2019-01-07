
<?php

define('AEMET_APIKEY','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqdWFuYW5zYWxAZ21haWwuY29tIiwianRpIjoiZmEzZDA4ZjEtNzk5ZC00YWZhLWE1ZTMtMmRjZjVkYjFhYzQ1IiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE1MzMzMzUwNTYsInVzZXJJZCI6ImZhM2QwOGYxLTc5OWQtNGFmYS1hNWUzLTJkY2Y1ZGIxYWM0NSIsInJvbGUiOiIifQ.CRv5ZCxZPYAFpLGPY5t8p7kPGi_AxhGBfoIV_TVOdls');

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

$respuesta = peticionHTTPGET('https://opendata.aemet.es/opendata/api/observacion/convencional/datos/estacion/8025?api_key='.AEMET_APIKEY);

echo $respuesta;

?>