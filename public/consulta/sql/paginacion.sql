-- https://www.w3schools.com/php/php_mysql_select_limit.asp

-- 2 Opciones
-- SELECT * FROM Orders LIMIT PAGINA_INICIO, RESULTADOS;
SELECT * FROM Orders LIMIT 15, 10;

-- SELECT * FROM Orders LIMIT RESULTADOS OFFSET PAGINA_INICIO;
SELECT * FROM Orders LIMIT 10 OFFSET 15;