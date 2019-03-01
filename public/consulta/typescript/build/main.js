class ClaseUsuario {
    constructor(nombre, edad, admin) {
        this.admin = false;
        this.secreto = undefined;
        this.nombre = nombre;
        this.edad = edad;
        if (admin) {
            this.admin = admin;
        }
        ClaseUsuario.creados++;
    }
    setAdmin(valor) {
        this.admin = valor;
    }
    sumaEdad(num) {
        this.edad = this.edad + num;
        return this.edad;
    }
    set setSecreto(texto) {
        this.secreto = texto;
    }
    get getSecreto() {
        return this.secreto;
    }
}
ClaseUsuario.creados = 0;
class ClaseProfesores extends ClaseUsuario {
    constructor(nombre, edad, admin, asignatura, colegio) {
        super(nombre, edad, admin);
        this.asignatura = undefined;
        this.colegio = undefined;
        if (asignatura) {
            this.asignatura = asignatura;
        }
        if (colegio) {
            this.colegio = colegio;
        }
        ClaseProfesores.creados++;
    }
}
ClaseProfesores.creados = 0;
class ClaseJefeUnico extends ClaseUsuario {
    constructor(nombre, edad, admin) {
        super(nombre, edad, admin);
    }
    static actualizarJefe(nombre, edad) {
        if (!ClaseJefeUnico.jefe) {
            ClaseJefeUnico.jefe = new ClaseJefeUnico(nombre, edad, true);
        }
        else {
            ClaseJefeUnico.jefe.nombre = nombre;
            ClaseJefeUnico.jefe.edad = edad;
        }
        return ClaseJefeUnico.jefe;
    }
    static get getJefe() {
        return ClaseJefeUnico.jefe;
    }
}
let clase1 = new ClaseUsuario('Pepe', 50);
let clase2 = new ClaseUsuario('Luis', 30, true);
let herencia1 = new ClaseProfesores('Paco', 50, null, null, 'A saber');
ClaseJefeUnico.actualizarJefe('LUISITO', 96);
ClaseJefeUnico.actualizarJefe('PEDRITO', 32);
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
let alicante = {
    nombre: 'Alicante',
    coordenadaX: 50,
    coordenadaY: 60,
};
let misNumeros = [505, 154, 65465, 64154, 65416, 6534138, 56468, 416854];
;
;
let pepe = {
    nombre: 'Luis',
    edad: 50,
    suma(num) {
        return this.edad + num;
    }
};
let pepe2 = {
    nombre: 'Pepe',
    edad: 20,
    ciudad: 'Alicante'
};
class Usuario54 {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    suma(num) {
        return this.edad + num;
    }
}
function escribeCosas(objeto) {
    console.log(`Funcion escribeCosas dice: ${objeto.nombre} con edad ${objeto.edad}`);
}
define("modulos2", ["require", "exports", "modulos1"], function (require, exports, modulos1_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let objeto555 = new modulos1_1.Pepe('luis');
    console.log(objeto555);
    console.log('BUENOS DIAS');
});
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
//# sourceMappingURL=main.js.map