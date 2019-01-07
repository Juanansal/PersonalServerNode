<!DOCTYPE html>
<html>
<head>
   <title> String PHP </title>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">

   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
   <link rel="stylesheet" href="../css/php.css">
   <script src="../lib/jquery.js"></script>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


   <style>   
      main {
         margin: 5px;
         padding: 15px;
         background-color: aqua;
         font-weight: bold;
         width: 90%;
         margin: 0 auto;
      }
   </style>

</head>
<body>

  

   <main>
      <?php
         // Ejemplos de funciones básicas para string
         // Para demás funciones usar la referencia:
         // https://www.w3schools.com/php/php_ref_string.asp
         $cadena = 'Buenos dias pepe';

         // Longitud de la cadena
         $longitud = strlen($cadena);

         // Contador de palabras
         $palabras = str_word_count($cadena);

         // Dar la vuelta al string
         $vuelta = strrev($cadena);

         // Busqueda de texto
         $busqueda = strpos($cadena,'pepe');  // Busca la posición inicial de la primera coincidencia

         // Reemplazar texto
         $reemplazo = str_replace('pepe', 'marco', $cadena);

      ?>
      
      <h3> <a href="https://www.w3schools.com/php/php_ref_string.asp">Libreria referencia String PHP5 </a></h3>

      <?php
      // Volcado de la info sacada en el HTML
         echo 'Cadena: '.$cadena.'<br>';
         echo 'Longitud: '.$longitud.'<br>';
         echo 'Palabras: '.$palabras.'<br>';
         echo 'Vuelta: '.$vuelta.'<br>';
         echo 'Busqueda: '.$busqueda.'<br>';
         echo 'Reemplazo: '.$reemplazo.'<br>';
      ?>
   <main>

   <script>

   </script>

</body>

</html>