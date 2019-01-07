
<?php

// Ejecutar SQL con retorno de datos (util para SELECT)
function ejecutarSelectSQL($servername, $username, $password, $dbname, $sql) {
   $respuesta = '';

   try {
      // Realizar la conexion con la base de datos   
      $conexion = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

      // Poner el errorMode en excepcion
      $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      // Ejecucion del SQL multiple -- exec()no retorna resultados
      $stmt = $conexion->prepare($sql); 
      $stmt->execute();

      // Modo asociativo para facilitar su lectura
      $resultado = $stmt->setFetchMode(PDO::FETCH_ASSOC);

      // Datos en un array[][]
      $respuesta = $stmt->fetchAll();
      
      // Asi se deben de leer los datos
      // Se ha creado una funcion rellenarTabla para realizar esto con los datos devueltos del select
      /*
      foreach($stmt->fetchAll() as $valor) { 
         array_push($respuesta, $valor);

         foreach($valor as $dato) {
            echo $dato;
         }
         echo '<br>';
     }
     */
      
   }
   catch(PDOException $e) {
         //echo $sql . "<br>" . $e->getMessage();
         $respuesta = 'Error: '. $e->getMessage();
   }

   $conexion = null;
   return $respuesta;
}



function pintar_tabla($datos) {
   echo '<table>';
   foreach($datos as $fila) {
      echo '<tr>';
      foreach($fila as $dato) {
         echo '<td>'.$dato.'</td>';
      }
      echo '</tr>';
   }
   echo '</table>';
}


   // Parametros recibidos con GET
   $datos = $_GET['envio'];

   // Datos de la base de datos
   $servername = "localhost";
   $username = "juanansa_testeo";
   $password = "r-TpQ8[R1_Lf";
   $dbname = "juanansa_testeo";
   $sql = "SELECT id, firstname, lastname FROM MyGuests LIMIT ".$datos;


   // Ejecucion a la base de datos 
   $resultado = ejecutarSelectSQL($servername, $username, $password, $dbname, $sql);
   pintar_tabla($resultado);

?>