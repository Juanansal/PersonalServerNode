<?php

   // Respuesta para enviar de nuevo al formulario 
   // 0 - OK
   // 1 - ERROR X
   // 2 - ERROR Y
   $respuesta = 0;

   // Recogida de valores del formulario
   // Nombre
   if(isset($_POST['nombre'])) {
      $nombre = $_POST['nombre'];
   }

    // Apellidos
    if(isset($_POST['apellidos'])) {
      $apellidos = $_POST['apellidos'];
   }

    // Ciudad
    if(isset($_POST['ciudad'])) {
      $ciudad = $_POST['ciudad'];
   }


   

   header('Location: form.php?respuesta='.$respuesta);

?>