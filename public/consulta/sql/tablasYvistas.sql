--------------------------------------
-- TABLAS VS VISTAS ------------------
--------------------------------------
/* 
    TABLE -- Una tabla
    VIEW --- Una tabla virtual (perfecto para filtrado para consultas)
         --- Para crear una view normalmente se hace utilizando un select
*/

----------------------------------
-- CREAR/BORRAR VISTAS -----------
----------------------------------

-- Crear Vista
CREATE VIEW vista1 AS
SELECT Nombre, Apellidos FROM Personas;

-- Borrar vista
DROP VIEW vista1;



----------------------------------
-- CREAR TABLAS ------------------
----------------------------------

-- Tipos de datos (varchar, int etc...)
-- https://www.w3schools.com/sql/sql_datatypes.asp

-- Creación básica
CREATE TABLE Personas(
    Id int,
    Nombre varchar(255),
    Apellidos varchar(255),
    Direccion varchar(255),
    Ciudad varchar(255) 
);

-- Creación con una consulta
-- (Los valores de la tabla que salen en la consulta también los inserta)
CREATE TABLE Personas3 AS
   SELECT Nombre, Apellidos FROM Personas;


-- Creación avanzada con contrains y claves primarias/ajenas
/*
   NOT NULL - Ensures that a column cannot have a NULL value
   UNIQUE - Ensures that all values in a column are different
   PRIMARY KEY - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table
   FOREIGN KEY - Uniquely identifies a row/record in another table
   CHECK - Ensures that all values in a column satisfies a specific condition
   DEFAULT - Sets a default value for a column when no value is specified
   INDEX - Used to create and retrieve data from the database very quickly
*/
CREATE TABLE Personas10(
   Id int NOT NULL AUTO_INCREMENT, -- Auto Increment diferente en segun que plataforma
   Nombre varchar(255) , 
   Apellidos varchar(255),
   Direccion varchar(255),
   Edad int DEFAULT 18,
   Fecha date,
   Ciudad int NOT NULL,
   CONSTRAINT Cons_unico UNIQUE (Id,Nombre),
   CONSTRAINT key_primaria PRIMARY KEY (Id),
   CONSTRAINT key_ajena213 FOREIGN KEY (Ciudad) REFERENCES ciudades(Id)
);

----------------------------------
-- MODIFICAR TABLAS --------------
----------------------------------

-- Añadir propiedad
ALTER TABLE Personas
ADD Edad int;

-- Eliminar propiedad
ALTER TABLE Personas
DROP COLUMN Edad;

-- Modificar propiedad (MYSQL, ORACLE<V10)
ALTER TABLE Personas
MODIFY COLUMN Nombre varchar(200);

-- Añadir constraint
ALTER TABLE Personas
ADD CONSTRAINT xxx UNIQUE(Direccion);

ALTER TABLE Personas
DROP CONSTRAINT xxx;  -- DROP INDEX EN MYSQL


----------------------------------
-- BORRAR TABLAS -----------------
----------------------------------

-- Borrado básico
DROP TABLE Personas3;