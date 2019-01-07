<!DOCTYPE html>
<html>
<head>
   <title> Bucles PHP </title>
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
         ////////////////////////////////////////////////////////////////
         // while
         $cont = 1;

         while($cont<10) {
            echo('Cuenta while: '.$cont.'<br>');
            $cont++;
         }
         echo('<br>');


         ////////////////////////////////////////////////////////////////
         // do while
         $cont = 1;
         do {
            echo('Cuenta do while: '.$cont.'<br>');
            $cont++;
         }
         while($cont<10);
         

         ////////////////////////////////////////////////////////////////
         // for
         $rellenar = array();
         echo('<br>');

         for($cont=0; $cont<10;$cont++) {
            $rellenar[$cont] = 'pepe '.$cont;
            echo('Rellenado de array con for: '.$rellenar[$cont].'<br>');
         }


         ////////////////////////////////////////////////////////////////
         // foreach (Para recorrer arrays)
         echo('<br>');
         $cadena = ['pepe', 'luis','gonzalo','marco'];

         foreach($cadena as $valor) {
            echo('con foreach: '.$valor.'<br> ');
         }

         echo('<br>');
         for($cont=0;$cont<count($cadena);$cont++) {
            echo('con for: '.$cadena[$cont].'<br> ');
         }
         

      ?> 
   <main>

   <script>

   </script>

</body>

</html>