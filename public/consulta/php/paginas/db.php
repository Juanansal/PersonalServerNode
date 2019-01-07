<!DOCTYPE html>
<html>
<head>
   <title>Bases de datos PHP </title>
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

      td, th {
         border: 1px solid black;
         padding: 4px;
         font-size: 16px;
      }
   </style>

</head>
<body>

  

   <main>

      
      <?php
         // Funciones utiles para manejar bases de datos




         // Ejecutar SQL sin retorno de valores (Insertar datos)
         // Si devuelve 0, el SQL se realizo correctamente
         function ejecutarSQL($servername, $username, $password, $dbname, $sql) {
            $respuesta = 0;

            try {
               // Realizar la conexion con la base de datos    
               $conexion = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

               // Poner el errorMode en excepcion
               $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

               // Ejecucion del SQL -- exec()no retorna resultados
               $conexion->exec($sql); 

               // Escribe el ultimo id escrito (El ejecutado en este caso)
               $last_id = $conexion->lastInsertId();
               //echo $last_id;

            }
            catch(PDOException $e) {
               //echo $sql . "<br>" . $e->getMessage();
               $respuesta = 'Error: '. $e->getMessage();
            }
         $conexion = null;
         return $respuesta;
         }




         // Ejecutar de multiples SQL sin retorno de valores (Insertar datos)
         // sql es un array con llamadas sql
         // Si devuelve 0, el SQL se realizo correctamente
         function ejecutarMultipleSQL($servername, $username, $password, $dbname, $sql) {
            $respuesta = 0;

            try {
               // Realizar la conexion con la base de datos    
               $conexion = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

               // Poner el errorMode en excepcion
               $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

               // Ejecucion del SQL multiple -- exec()no retorna resultados
               foreach($sql as $valor) {
                  $conexion->exec($valor); 
               }

               // Escribe el ultimo id escrito (El ejecutado en este caso)
               $last_id = $conexion->lastInsertId();
               //echo $last_id;

            }
            catch(PDOException $e) {
               //echo $sql . "<br>" . $e->getMessage();
               $respuesta = 'Error: '. $e->getMessage();
            }
         $conexion = null;
         return $respuesta;
         }




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



         // Funcion para rellenar una tabla con datos extraidos de la base de datos
         function rellenarTabla($datos) {
            foreach($datos as $fila) { 
               echo '<tr>';
               foreach($fila as $dato) {
                  echo '<td>'.$dato.'</td>';
               }
               echo '</tr>';
            }
         }


      ?>





      <?php
         /*
            db: juanansa_testeo
            usu: juanansa_testeo
            pass: // r-TpQ8[R1_Lf
         */

         // Conexion con la base de datos
         $servername = "localhost";
         $username = "juanansa_testeo";
         $password = "r-TpQ8[R1_Lf";
         $dbname = "juanansa_testeo";

         // ejecutar un SQL (Se relaiza la conexion, ejecuta el SQL y cierra la conexion)
         $sql1 = "INSERT INTO myguests (firstname, lastname, email) VALUES ('PEPE CRON', 'Doe', 'john@example.com')";
         $resultado = ejecutarSQL($servername, $username, $password, $dbname, $sql1);
         echo 'ejecutarSQL: '.$resultado.'<br>';

         // Ejecutar un SQL multiple
         $sql2 = array("INSERT INTO myguests (firstname, lastname, email) VALUES ('PEPE CRON 1', 'Doe', 'john@example.com')");
         array_push($sql2, "INSERT INTO myguests (firstname, lastname, email) VALUES ('PEPE CRON 2', 'Doe', 'john@example.com')");
         array_push($sql2, "INSERT INTO myguests (firstname, lastname, email) VALUES ('PEPE CRON 3', 'Doe', 'john@example.com')"); 
         $resultado = ejecutarMultipleSQL($servername, $username, $password, $dbname, $sql2);
         echo 'ejecutarMultipleSQL: '.$resultado.'<br>';

         // Ejecutar un Update con la llamada de SQL basica
         $sql3 = "UPDATE MyGuests SET lastname='MANCOS' WHERE id=5";
         $resultado = ejecutarSQL($servername, $username, $password, $dbname, $sql3);

         // Select de datos, despúes del select se llama a rellenarTabla para pintar los datos en el html
         $sql4 = "SELECT id, firstname, lastname FROM MyGuests LIMIT 50";
         $resultado = ejecutarSelectSQL($servername, $username, $password, $dbname, $sql4);
      ?> 

      <table>
         <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellidos</th>
         </tr>
         <?php rellenarTabla($resultado) ?>
      </table>  
               
   

      
   <main>

   <script>

   </script>

</body>

</html>