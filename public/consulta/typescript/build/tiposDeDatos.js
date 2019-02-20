"use strict";
// Boolean
let esRico = true;
let esPobre = false;
// Numeros
let num1 = 50;
let num2 = 50.5;
// Strings
let cadena1 = 'Buenos dias';
let cadena2 = "Buenos dias " + num1 + " Buenas tardes";
let cadena3 = `Buenos dias ${num1}`;
// Any
// (Puede ser cualquier tipo de dato)
let algo1 = 'Buenas tardes';
let algo2 = 85;
algo1 = 600; // Cambio de string a numero
algo2 = 'Buenas noches'; // Cambio de numero a string
// Varias posibilidades de tipo de datos
let variado1 = 'pepe';
let variado2 = ['pepe', 'luis'];
// Arrays
let vector1 = [5, 6, 7];
let vector2 = [{ nombre: 'Luis', edad: 50 }, [50, 60, 89], 80, 60];
let vector3 = ['Marta', 'Juan', 'Pepe'];
// Tuplas
// (Arrays pero donde definimos que tipo de datos hay en cada posicion)
let tupla1 = ['Pepe', 50];
// Tuplas con operador spread ...
//let tupla2:[string, number, ...boolean[]] = ['Pepe', 50, true, true, false]; 
// Enumeraciones
// (Uso general para dar a un string el valor de un numero (Aunque pueden ser otros valores))
var validar;
(function (validar) {
    validar[validar["Funciona"] = 0] = "Funciona";
    validar[validar["Fallo"] = -1] = "Fallo";
})(validar || (validar = {}));
let codigo1 = validar.Fallo; // Tendria el valor de -1
let codigo2 = validar.Funciona; // Tendria el valor de 0
// Decir a typescript que tipo de dato estoy trabajando
// Fuerza a utilizar esa variable con el tipo de dato que estoy utilizando
let algo = '9898.9889876546545';
let res1 = algo.length; // devuelve la longitud del string
let res2 = algo.toExponential; // Devuelve undefined ya que no es un numero (aunque al poner <number> lo ejecuta sin problemas)
// Funciones
// Estructura de una funcion 
let funcion;
funcion = function lul(nombre, ...opcional1) {
    console.log(nombre);
    console.log(opcional1);
};
let alicante = {
    nombre: 'Alicante',
    coordenadaX: 50,
    coordenadaY: 60,
};
let misNumeros = [505, 154, 65465, 64154, 65416, 6534138, 56468, 416854];
