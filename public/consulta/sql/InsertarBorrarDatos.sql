
---------------------------------------------
-- INSERT INTO ------------------------------
---------------------------------------------

-- Indicando Columnas y su valor a introducir
INSERT INTO Personas (Nombre, Apellidos, Ciudad, edad)
VALUES ('PEPE', 'Botella', 2, 17);

-- Sin indicar columnas (Deben ir los valores en orden a como esta construido en la base de datos)
INSERT INTO Personas
VALUES (NULL,'Pepa', 'Botellas','Clul', 24, 1); -- null indica el id(clave primaria) que se autogenera en la db

-- Insertado masivo
INSERT INTO `personas` (nombre, edad, ciudad)
VALUES
 ('Pablo Ramos', 22, 2),
 ('Cecilia Moyano', 22, 2),
 ('Benjamín Gómez', 33, 1),
 ('Pamela Díaz', 28, 2),
 ('Franco Campos', 34, 1),
 ('Patricia López', 29, 3),
 ('Nicolás Peralta', 19, 3),
 ('Sofía Ramírez', 26, 3),
 ('Isabella Hernández', 34, 1),
 ('Laura Sánchez', 35, 3);


---------------------------------------------
-- UPDATE -----------------------------------
---------------------------------------------
/*
   - Actualiza todas las coincidencias, no solo 1
   - Si no hay where actualizara todos los datos 
*/
-- Una columna
UPDATE personas
SET Direccion='C/Asaber'
WHERE id = 5;

-- Varias columnas
UPDATE personas
SET Direccion='c/Alfonso', edad = 50
WHERE id = 6;


---------------------------------------------
-- DELETE -----------------------------------
---------------------------------------------
/*
   - Borra todas las coincidencias, no solo 1
   - Si no hay where borrara todos los datos 
*/
 -- Borra TODO!!
DELETE FROM personas;               

-- Borra los datos que cumple la condicion
DELETE FROM personas 
WHERE id = 8;                       