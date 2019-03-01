
//////////
// Type
///////////

// Creacion de tipos personalizados (Se puede crear para todo tipo de datos)
// Generalmente es util para obtetos 

// Para un objeto
type Ciudad = {
    nombre:string,
    coordenadaX ?: number,
    coordenadaY ?: number,
    dameNombre ?: ()=>string
};
let alicante:Ciudad = {
    nombre: 'Alicante',
    coordenadaX: 50,
    coordenadaY: 60,
};


// Para una cadena
type Telefonos = number[]
let misNumeros:Telefonos = [505,154,65465,64154,65416,6534138,56468,416854];





/////////////
// Interface
/////////////


// Creacion de interfaces
// Muy parecido a type, pero con posibilidad de herencia y combinacion de datos de 2 interfaces con el mismo nombre
// Mas completo que el type

// Interfaz
interface Interfaz1 {
    nombre:string;
    edad:number;
    suma?(num:number):number        // Funcion opcional por el ?
};

// Interfaz con herencia y propiedades opcionales
interface Interfaz2 extends Interfaz1 {
    ciudad?:string
};







// Objeto que usa la interfaz1
let pepe:Interfaz1 = {
    nombre: 'Luis',
    edad: 50,
    suma(num:number) {
        return this.edad + num;
    }
};

// Objeto que usa la interfaz2
let pepe2:Interfaz2 = {
    nombre: 'Pepe',
    edad: 20,
    ciudad: 'Alicante'
};

// Clase que usa la interfaz1 (Se puede añadir nuevas cosas, pero debe cumplir obligatoriamente lo que tenga la interfaz)
class Usuario54 implements Interfaz1 {
    public nombre:string;
    public edad:number;

    constructor(nombre:string, edad:number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public suma(num:number) {
        return this.edad + num;
    }
}



// Funcion que necesita una interfaz por parametro
function escribeCosas(objeto:Interfaz1|Interfaz2):void {
    console.log(`Funcion escribeCosas dice: ${objeto.nombre} con edad ${objeto.edad}`);
}










// Zona pruebas
/*
escribeCosas(pepe);
escribeCosas(pepe2);

let clase4 = new Usuario54('Marco', 60);
console.log(clase4);

*/