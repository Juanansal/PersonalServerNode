----------------------------------
-- SELECT ------------------------
----------------------------------
/*
   Los indices son filtrados de las tablas para hacer las consultas más rapidas
   Son invisibles para el ususario, solo para usar en consultas
*/

-- Consulta básica
SELECT * FROM personas;                 -- Todos los datos de la tabla personas
SELECT nombre, apellidos FROM personas; -- Columna nombre y apellidos de la tabla personas

-- Valores unicos
SELECT DISTINCT Ciudad FROM personas;
SELECT DISTINCT Nombre, Ciudad FROM personas;   -- En el caso de varias columnas, selecciona los valores unicos de la combinacion de las 2 columnas
SELECT COUNT(DISTINCT Ciudad) FROM personas     -- Contar valores unicos de una columna


---------------------------------------------
-- Filtros WHERE ----------------------------
---------------------------------------------
/*
   =	      Equal
   <>	      Not equal. Note: In some versions of SQL this operator may be written as !=
   >	      Greater than
   <	      Less than
   >=	      Greater than or equal
   <=	      Less than or equal
   BETWEEN	Between a certain range
   LIKE     Search for a pattern
   IN	      To specify multiple possible values for a column
*/
SELECT * FROM personas WHERE Ciudad = 1;        -- filtrar int
SELECT * FROM personas WHERE Nombre = 'ffff';   -- filtrar string completo (Para string parcial usar LIKE)




-- LIKE / NOT LIKE (Para comparar con patrones)
/* 
   _ (Un caracter)       % (Infinitos caracteres)
   Aqui patrones básicos, para complejos aqui: https://www.w3schools.com/sql/sql_wildcards.asp

   WHERE CustomerName LIKE 'a%'	   Finds any values that start with "a"
   WHERE CustomerName LIKE '%a'	   Finds any values that end with "a"
   WHERE CustomerName LIKE '%or%'	Finds any values that have "or" in any position
   WHERE CustomerName LIKE '_r%'	   Finds any values that have "r" in the second position
   WHERE CustomerName LIKE 'a_%_%'	Finds any values that start with "a" and are at least 3 characters in length
   WHERE ContactName LIKE 'a%o'	   Finds any values that start with "a" and ends with "o"
*/
SELECT * FROM personas WHERE Nombre = 'ffff';      -- Iguales (Pero si queremos comparar el string más a fondo solo funcionara LIKE)
SELECT * FROM personas WHERE Nombre LIKE 'ffff';   -- Iguales 

SELECT * FROM personas WHERE Nombre LIKE 'PE_';       -- Muestra los que empiezan por PE y tienen 3 caracteres
SELECT * FROM personas WHERE Nombre LIKE 'PE%';       -- Muestra los que empiezan por PE
SELECT * FROM personas WHERE Nombre NOT LIKE 'PE%';   -- Muestra los que NO empiezan por PE
SELECT * FROM personas WHERE Nombre LIKE '_EP_';      -- Muestra los que empiezan por cualquier letra, 2º y 3º letra son EP y 4º cualquiera letra



-- IN (IN es una simplicación de multiples OR).
SELECT * FROM personas WHERE ciudad IN (1,2);  -- Muestra datos si la ciudad es 1 o 2
SELECT * FROM personas WHERE ciudad IN (SELECT id FROM Ciudades);  -- Se puede usar el resultado de un select para realizar el IN



-- BETWEEN
-- Funciona tanto para numeros como Strings 
SELECT * FROM personas WHERE edad BETWEEN 10 AND 30;
SELECT * FROM personas WHERE nombre BETWEEN 'a' AND 'g';   -- Se pueden ponen valores completos, para un filtrado mejor (BETWEEN 'Carnarvon Tigers' AND 'Mozzarella di Giovanni')
SELECT * FROM personas WHERE (nombre NOT BETWEEN 'a' AND 'g') AND edad > 20 ORDER BY edad LIMIT 5;  -- Setencia algo más compleja que contiene BETWEEN



-- AND / OR / NOT
SELECT * FROM personas WHERE Ciudad = 1 AND Apellidos = 'ffff';                      -- AND
SELECT * FROM personas WHERE Ciudad = 1 OR Apellidos = 'ffff';                       -- OR
SELECT * FROM personas WHERE NOT(Ciudad = 1 OR Apellidos = 'ffff');                  -- NOT
SELECT * FROM personas WHERE (Ciudad = 1 AND Apellidos = 'ffff') OR Nombre='b';      -- AND, OR
SELECT * FROM personas WHERE NOT(NOT(Ciudad='f') AND (nombre='b' OR NOT(edad>30)));  -- AND, OR, NOT

-- IS NULL / IS NOT NULL
/* 
   It is not possible to test for NULL values with comparison operators, such as =, <, or <>.
   NULL es distinto a '' 
   Si hay un string vacio, IS NULL no lo seleccionara
*/
SELECT * FROM personas WHERE Direccion IS NULL;    
SELECT * FROM personas WHERE Direccion IS NOT NULL;              



-- ORDER BY
SELECT * FROM personas ORDER BY edad;                    -- Ascendente
SELECT * FROM personas WHERE Edad<20 ORDER BY edad;  

SELECT * FROM personas ORDER BY DESC edad;               -- Descendente
SELECT * FROM personas WHERE Edad<20 ORDER BY DESC edad;  



-- LIMIT
/*
   - Numero de filas maximo que debe mostrar en el select
   - Diferente en diferentes server, mirar: (Ejemplos para mySQL)
      https://www.w3schools.com/sql/sql_top.asp
*/
SELECT * FROM personas WHERE edad > 3 ORDER BY edad LIMIT 3; -- Solo mostrara 3 resultados



-- Alias AS
SELECT * FROM personas AS p WHERE p.edad > 20;                                            -- Alias a una tabla
SELECT Nombre, Apellidos, Edad AS 'Edades mayores de 20' FROM personas WHERE edad > 20;   -- Alias a una columna
SELECT CONCAT(Nombre,' ',Apellidos,': ',Edad) AS 'Todos los datos' FROM personas;         -- Alias a varias columnas en MySQL (Para otras mirar https://www.w3schools.com/sql/sql_alias.asp)

SELECT p.nombre, p.edad, c.nombre FROM ciudades c, personas p WHERE p.ciudad = c.id;      -- Alias usando varias tablas relacionadas entre ellas



--------------------------------------------
-- FUNCIONES -------------------------------
--------------------------------------------
/*
   MIN(), MAX(), COUNT(), AVG(), SUM()
   Estas funciones son muy utiles para usarlas como filtros en WHERE
   GROUP BY para agrupar resultados de las funciones
*/
-- Muestra el valor minimo unicamente
SELECT MIN(Edad) AS 'Edad Minima' FROM Personas;  

-- Muestro los datos(la fila) que contienen el valor minimo
SELECT * FROM Personas
WHERE edad = (SELECT MIN(Edad) AS 'Edad Minima' FROM personas); 

-- Cuenta el numero de usuarios por cada ciudad
SELECT COUNT(ciudad) AS 'Datos', ciudad FROM personas GROUP BY ciudad;

-- Cuenta el numero de usuarios por cada ciudad (con relaciones entre tablas)
SELECT COUNT(p.ciudad) AS 'Datos', c.ciudad FROM personas p
INNER JOIN ciudades AS c ON p.ciudad = c.id
GROUP BY p.ciudad
ORDER BY COUNT(p.ciudad) DESC;


--------------------------------------------
-- JOINS -----------------------------------
--------------------------------------------

-- INNER JOIN (Selecciona los datos que esten en las 2 tablas)
SELECT p.nombre, p.edad, ciudades.Ciudad FROM personas AS p 
INNER JOIN ciudades ON p.ciudad = ciudades.id; 

-- LEFT JOIN (Selecciona todos los datos de la primera tabla y los une con los que coincidan de la tabla 2)
SELECT p.nombre, p.edad, ciudades.Ciudad FROM personas AS p 
LEFT JOIN ciudades ON p.ciudad = ciudades.id;

-- RIGHT JOIN (Selecciona todos los datos de la segunda tabla y los une con los que coincidan de la tabla 1)
SELECT p.nombre, p.edad, ciudades.Ciudad FROM personas AS p 
RIGHT JOIN ciudades ON p.ciudad = ciudades.id; 

-- FULL OUTER JOIN (Selecciona todo de la relacion, coincidan o no)
SELECT p.nombre, p.edad, ciudades.Ciudad FROM personas AS p 
FULL OUTER JOIN ciudades ON p.ciudad = ciudades.id;        -- No funciona en MySQL

-- SELF JOIN (Union con valores de la misma tabla)
SELECT p1.nombre, p2.nombre, p1.ciudad FROM personas p1, personas p2
WHERE p1.id <> p2.id AND p1.ciudad = p2.ciudad;     -- Personas que son de la misma ciudad


--------------------------------------------
-- UNION -----------------------------------
--------------------------------------------
-- Une 2 sentencias SELECT
SELECT 'Mayor de 18' AS Edad, Nombre, Apellidos, edad FROM personas WHERE edad>=18
UNION
SELECT 'Menor de 18' AS Edad, Nombre, Apellidos, edad FROM personas WHERE edad<18;

-- une 2 sentencias SELECT, incluyendo duplicados
SELECT 'Mayor de 18' AS Edad, Nombre, Apellidos, edad FROM personas WHERE edad>=18
UNION ALL
SELECT 'Menor de 18' AS Edad, Nombre, Apellidos, edad FROM personas WHERE edad<18;




---------------------------------------------
-- Filtros HAVING ----------------------------
---------------------------------------------
-- Igual funcionamiento que where, pero HAVING permite el uso de funciones

-- En este caso se muestra las ciudades que tienen al menos 5 usuarios
SELECT c.ciudad, COUNT(p.Ciudad) AS 'Numero usuarios' FROM personas AS p 
INNER JOIN ciudades AS c ON p.ciudad = c.id
GROUP BY c.ciudad
HAVING COUNT(p.Ciudad) > 5;

-- En este caso se muestra las ciudades que tienen al menos 5 usuarios filtrando usuarios con where
SELECT c.ciudad, COUNT(p.Ciudad) AS 'Numero usuarios' FROM personas AS p 
INNER JOIN ciudades AS c ON p.ciudad = c.id
WHERE p.edad > 20
GROUP BY c.ciudad
HAVING COUNT(p.Ciudad) > 5;




