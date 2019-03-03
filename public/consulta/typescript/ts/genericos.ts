

// Funcion basica (Acepta cualquier tipo de dato)
function funcionGenerica1<T>( algo:T):T {
    return algo;
}

// Funcion con extends (Acepta lo que le digamos que acepte)
function funcionGenerica2<T extends string|number>( algo:T):T {
    return algo;
}


// Clase con genericos (Lo veo poco util)
class ClaseGenerica<T> {
    nombre:string = 'Sin asignar';
    edad:number = NaN;
    descripcion:T

    setDescripcion(valor:T):T {

        return this.descripcion;
    }

}


let res52:string = funcionGenerica1<string>('PEPE');
let res21:number = funcionGenerica1<number>(56);



// Zona de pruebas
/*
console.log(res52);
console.log(res21)
*/