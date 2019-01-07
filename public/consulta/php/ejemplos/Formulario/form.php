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

   <?php 
      // Comprobación de la respuesta del servidor cuando se envia el formulario
      $respuesta = '';
      if(isset($_GET['respuesta'])) {
         switch($_GET['respuesta']) {
            case 0: $respuesta = 'Mensaje recibido'; break;
            default: $respuesta = 'Error'; break;
         }
      }
   ?>


</head>
<body>

  

   <main>
      <form action="analisis.php" method="post">
         Nombre: <input name="nombre" type="text"> <br>
         Apellidos: <input name="apellidos" type="text"> <br>
         Ciudad: <input type="text" name="ciudad"> <br>
         <input type="submit" value="Enviar"> <br>
      </form> 

        

      <?php 
         echo $respuesta;
      ?>

      
   <main>

   <script>
   </script>

</body>

</html>