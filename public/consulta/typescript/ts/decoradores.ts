
// Los decoradores son funciones que se ejecutan cuando es leido la funcion, clase etc que contiene el decorador 

// Decorador basico de clase (Reciben como parametro siempre el contructor de la clase)
function decorador1( constructor:Function):void {

    // Añado a la clase esta funcion (Cuando se le asigna el decorador)
    constructor.prototype.anuncio = function():void {
        console.log('BUENOS DIAS!!!!!!!!!!');
    }
    //console.log('Decorador1');
}


// Decorador factory de clase (recibe un parametro y devuelve algo)
function decorador2( opcion:boolean):Function {
    
    //console.log('Decorador2');
    if(opcion) {
        return decorador1;
    }
    else {
        return null
    }
}


// Para clases
@decorador1 @decorador2(true) class ClaseDecorador {
    nombre:string
    edad:number

    constructor(nombre:string, edad:number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}


let dec1:ClaseDecorador = new ClaseDecorador('Pepe', 40);
(<any>dec1).anuncio();

// Zona pruebas
console.log(dec1);