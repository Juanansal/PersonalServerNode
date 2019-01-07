<!DOCTYPE html>
<html>
<head>
   <title> Formularios PHP </title>
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

         // Para ver bien su funcionamiento, mirar en ejemplos/formulario
         // Donde hay un ejemplo completo

         /////////////////////////////////////////////////////
         // GET VS POST
         /*
            $_GET is an array of variables passed to the current script via the URL parameters. (Visible para todos)
            $_POST is an array of variables passed to the current script via the HTTP POST method. (Invisible para otros)

                Ejemplo:
                $datos = $_GET['envio'];  // Recoje el valor enviado asi: /scripts/ajax1.php?envio="datos_a_enviar

         */


         /////////////////////////////////////////////////////////
         ////////////////////////////////////////////////////////
         // SE RECOMIENDA VALIDAR EL FORMULARIO CON JAVASCRIPT Y DESPUES SI FUERA NECESARIO TAMBIEN CON PHP EN
         // SU FICHERO PHP DE EJECUCION, SE PUEDE ENVIAR UNA RESPUESTA CON $_GET PARA RECIBIR UNA RESPUESTA DE SI
         // SIDO EXITO O NO
      ?>

       

        <!--/////////////////////////////////////////////
        // Formulario enviado con post a un php externo -->

        <form action="../scripts/1-test.php" method="post">
           Name: <input type="text" name="name"><br>
           E-mail: <input type="text" name="email"><br>
           <input type="submit" value="Enviar Form 1">
        </form>



         <!--/////////////////////////////////////////////
        // Formulario enviado con get a un php externo -->

        <form action="../scripts/2-test.php" method="get">
           Name: <input type="text" name="name"><br>
           E-mail: <input type="text" name="email"><br>
           <input type="submit" value="Enviar Form 2">
        </form>



         <!--/////////////////////////////////////////////
        // Formulario enviado con post a un php externo donde ejecuta el codigo dentro del mismo php
        // Los datos del formulario se deben tratar con $_GET o $_POST dentro de este mismo script php 
        NO RECOMENDADO -->

        <form action="<?php echo $_SERVER["PHP_SELF"];?>" method="get">
           Name: <input type="text" name="name"><br>
           E-mail: <input type="text" name="email"><br>
           <input type="submit" value="Enviar Form 3">
        </form>



         <!--/////////////////////////////////////////////
         // Formulario enviado con get a un php externo y retorna (Si se quiere respuesta se pueden enviar con GET)  -->
     
         <form action="../scripts/3-test.php" method="get">
            Name: <input type="text" name="name"><br>
            E-mail: <input type="text" name="email"><br>
            <input type="submit" value="Enviar Form 4">
         </form>

         <?php    
            $respuesta = '';   // Inicializacion

            if(!empty($_GET['ok'])) {
               $respuesta = $_GET['ok'];   // Si hay respuesta del get, lo introduce
            }
            else {
               echo 'No hay respuesta'; 
            }
            
            echo $respuesta;
         ?>   
               
   

      
   <main>

   <script>

   </script>

</body>

</html>