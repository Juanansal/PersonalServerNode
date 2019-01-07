<!DOCTYPE html>
<html>
<head>
   <title> Arrays PHP </title>
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

         // Referencia para tratar arrays
         // https://www.w3schools.com/php/php_ref_array.asp


         /////////////////////////////////////////////////////
         // Crear Arrays

         // Arrays basicos
         $cadena1 = array(4,3,2);
         $cadena2 = array('macarrones','paella','turron');
         $cadena3 = array('nombre'=>'luis','apellido'=>'gonzalez');

         // Arrays con nombre y valor (como los objetos de javascript)
         $cadena4 = array(
            'nombre'=>'luis',
            'apellido'=>'gonzalez',
            'notas' => array('lunes' => 5, 'martes' => 6, 'jueves' => 3),
            'ciudad' => 'Alicante'
            );


         // Introducir valores
         array_push($cadena1,'vinagre');  // Introduce en la ultima posicion   

         // Lectura de arrays
         echo $cadena1[3].'<br>';   // Lectura básica
         echo $cadena2[1].'<br>';   // Lectura básica
         echo $cadena4['nombre'].'<br>';  // Lectura nombre/valor
         echo $cadena4['notas']['lunes'].'<br>';   // Lectura nombre/valor multiarray(matrices)


         /////////////////////////////////////////////////////
         // Funciones básicas

         // Tamaño
         $res = count($cadena2);


         // Recorrer Array
         // Array básico
         foreach($cadena2 as $valor) {
            echo $valor;
         }
         // Array nombre/valor
         foreach($cadena3 as $nombre=>$valor) {
            echo($nombre.' ---> '.$valor.'<br>');
         }
         // Para recorrer arrays tipo matrices v[][] usar el for con el sistema general de recorrido de matrices


         // Ordenar arrays
         /*
            sort() - sort arrays in ascending order
            rsort() - sort arrays in descending order
            asort() - sort associative arrays in ascending order, according to the value
            ksort() - sort associative arrays in ascending order, according to the key
            arsort() - sort associative arrays in descending order, according to the value
            krsort() - sort associative arrays in descending order, according to the key
         */
         $sort = sort($cadena1);
         $rsort = rsort($cadena1);


         echo($sort);

      ?>
   <main>

   <script>

   </script>

</body>

</html>