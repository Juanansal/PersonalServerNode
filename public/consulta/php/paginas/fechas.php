<!DOCTYPE html>
<html>
<head>
   <title> Fechas </title>
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

         // REFERENCIA PARA FECHAS     https://www.w3schools.com/php/php_ref_date.asp
         echo('<h3><a href="https://www.w3schools.com/php/php_ref_date.asp">Referencia para fechas PHP</a></h3>');

         /////////////////////////////////////////////////////
         // Crear Fechas (letras posibles) 
         // (Se pueden colocar en el orden que se desee):
         /*
            d - Dia (01 to 31)
            m - Mes (01 to 12)
            Y - Año (in four digits)
            l - Dia de la semana (Ingles) - Represents the day of the week

            h - Hora (01 to 12)
            i - Minuto (00 to 59)
            s - Segundos (00 to 59)
            a - am o pm

            sa - Zona horaria (Formato 'Pais/Ciudad')
         */

         // Fecha de hoy/ahora
         $hoy = date("d/m/Y --- l");
         $hoy = date("h:m:s");
         $hoy = date('d-m-Y - h:i:s  a');
         echo 'Ahora: '. $hoy;

         // Añadir una fecha X
         // Forma 1
         $aux1 = mktime(11, 14, 54, 8, 12, 2014);  // mktime(hour,minute,second,month,day,year)
         $fecha1 = date('d-m-Y - h:i:s  a', $aux1);
         echo '<br>Definida por mi: '.$fecha1;

         // Forma 2
         $aux2 = strtotime("10:30pm April 15 2014"); // strtotime acepta valores como strtotime("tomorrow") / strtotime("next Saturday") / strtotime("+3 Months") / strtotime("July 04")
         $fecha2 = date("Y-m-d h:i:sa", $aux2);
         echo '<br>Definida por mi: '.$fecha2;
         


      ?>
   <main>

   <script>

   </script>

</body>

</html>