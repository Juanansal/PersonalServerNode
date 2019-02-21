"use strict";
// Funcion básica con parametro y return
// Siempre se debe poner los tipos de parametro y el tipo del return
function general(texto = 'POR DEFECTO', ...resto) {
    if (resto.length > 0) {
        console.log(resto);
        resto.forEach(function (valor, i, array) {
            console.log(`${i}: ${valor}`);
        });
    }
    console.log(texto);
    return texto;
}
// Más ejemplos con funcion de flecha y normal
let suma = (num) => num + 2;
function suma2(num) {
    return num + 2;
}
// Return void
// (No retorna nada)
function dimeHola() {
    console.log('BUENOS DIAS');
}
// Return never (FUNCION COMODIN PARA ENVIAR ERRORES QUE PARAN LA APLICACION)
function error(mensaje) {
    throw new Error(mensaje);
}
// Parametros opcionales (2 maneras)
// Poniendo un valor por defecto (Si no hay parametro cojera el valor por defecto)
function opcional1(texto = 'Soy el por defecto') {
    console.log(texto);
}
// Poniendo un ? al parametro
function opcional2(texto) {
    console.log(texto);
}
// Parametros opcionales REST (numero de parametro X en un array)
function datos(nombre, ...resto) {
    console.log(nombre);
    console.log(resto);
}
//# sourceMappingURL=funciones.js.map