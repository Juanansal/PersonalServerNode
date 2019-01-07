<!DOCTYPE html>
<html>
<head>
   <title> Inicio/Base PHP </title>
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
         // Etiquetas para introducir texto plano (incluido etiquetas html)
         // Practicamente iguales las dos para uso general
         echo("<h3>h3 introducido con echo</h3>");  
         print('<h3>h3 introducido con print</h3>');


         ////////////////////////////////////////////////////////////////
         // Variables (globlales y estaticas)
         $num1 = 80;
         $num2 = 40.5;
         $pepe = 50;
         global $pepe;  // Accesible siempre desde cualquier lugar. ($GLOBALS[index] para acceder a todas ellas) (tiene que ser creada primero)
         static $statico = 1;   // Ideal para colocarlo en una funcion, ya que esta no es borrada cuando se ejecuta la función 
         define('BUENAS','Buenos dias, que tal?'); // Constantes (Siempre permanecen iguales) Se llaman sin el $
         $res = $num1 + $num2;
         echo(BUENAS.'<br>');


         // Concatenar variables en echo
         echo ($num1." + ".$num2." = ".$res);


         ////////////////////////////////////////////////////////////////
         // Tipos de datos
         /*
            String
            Integer
            Float (floating point numbers - also called double)
            Boolean
            Array
            Object
            NULL
            Resource
         */
         $string = "cadena";
         $int = -50;
         $float = 80.6;
         $bool = true;
         $array = array(5,6,7);
         var_dump($int); // PAra ver el tipo de variable y su contenido



         ////////////////////////////////////////////////////////////////
         // Condiciones if elseif
         $num = 50;

         if($num<60) {
            echo('<br>if: ES CORRECTO<br>');
         }
         else {
            echo('<br>if: ES INCORRECTO<br>');
         }



         ////////////////////////////////////////////////////////////////
         // Switch
         $texto = 'pepe';

         switch($pepe) {
            case 'pepa': echo('Switch: pepa<br>'); break;
            case 'pepe': echo('Switch: pepe<br>'); break;
            default: echo('Switch: default<br>'); break;
         }



         ///////////////////////////////////////////////////////////////
         // Funciones
         function suma($num1, $num2) {
            $res = $num1+$num2;
            echo('Suma: '.$num1.' + '.$num2.' = '.$res);
            return $res;
         }
         suma(5,7);



         /////////////////////////////////////////////////////////////////
         // Include
         /*
            // Perfecto para cabeceras, pies de pagina, secciones de la web
            // O para ficheros init con variables globales para toda la web

            require --> will produce a fatal error (E_COMPILE_ERROR) and stop the script
            include --> will only produce a warning (E_WARNING) and the script will continue
         */
        include('../scripts/include1.php');
        echo $variableX;  // Variable encontrada en el include
         
         

         

      ?> 
   <main>

   <script>

   </script>

</body>

</html>