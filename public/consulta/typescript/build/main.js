"use strict";
console.log('BUENOS TARDssES');
function general(texto = 'POR DEFECTOo', ...resto) {
    if (resto.length > 0) {
        console.log(resto);
        resto.forEach(function (valor, i, array) {
            console.log(`${i}: ${valor}`);
        });
    }
    console.log(texto);
    return texto;
}
let suma = (num) => num + 2;
function suma2(num) {
    return num + 2;
}
function dimeHola() {
    console.log('BUENOS DIAS');
}
function error(mensaje) {
    throw new Error(mensaje);
}
function opcional1(texto = 'Soy el por defecto') {
    console.log(texto);
}
function opcional2(texto) {
    console.log(texto);
}
function datos(nombre, ...resto) {
    console.log(nombre);
    console.log(resto);
}
let objeto1 = {};
let objeto2 = {
    nombre: 'Luis',
    telefonos: {
        fijo: '667858',
        movil: '3546341'
    },
    dameNombre() {
        return this.nombre;
    }
};
let esRico = true;
let esPobre = false;
let num1 = 50;
let num2 = 50.5;
let cadena1 = 'Buenos dias';
let cadena2 = "Buenos dias " + num1 + " Buenas tardes";
let cadena3 = `Buenos dias ${num1}`;
let algo1 = 'Buenas tardes';
let algo2 = 85;
algo1 = 600;
algo2 = 'Buenas noches';
let variado1 = 'pepe';
let variado2 = ['pepe', 'luis'];
let vector1 = [5, 6, 7];
let vector2 = [{ nombre: 'Luis', edad: 50 }, [50, 60, 89], 80, 60];
let vector3 = ['Marta', 'Juan', 'Pepe'];
let tupla1 = ['Pepe', 50];
var validar;
(function (validar) {
    validar[validar["Funciona"] = 0] = "Funciona";
    validar[validar["Fallo"] = -1] = "Fallo";
})(validar || (validar = {}));
let codigo1 = validar.Fallo;
let codigo2 = validar.Funciona;
let algo = '9898.9889876546545';
let res1 = algo.length;
let res2 = algo.toExponential;
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
let pepe = 'PEPE';
//# sourceMappingURL=main.js.map