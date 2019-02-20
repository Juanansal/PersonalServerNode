"use strict";
// Crear objetos
// Al crear los objetos con typescript se guarda su estructura al ser inicializados
// Es decir
// Si se crea vacio, más adelante se le podra sustituir por otro objeto con las propiedades que necesitemos,
// pero no se podran añadir propiedades directamente si no estan en la inicializacion
let objeto1 = {};
// Objeto con propiedades, debe mantener esta estrucutra, siempre
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
