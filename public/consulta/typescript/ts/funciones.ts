


// Funcion básica con parametro y return
// Siempre se debe poner los tipos de parametro y el tipo del return
function general(texto:string = 'POR DEFECTO', ...resto:any[]):string {

    if(resto.length>0) {
        console.log(resto);
        resto.forEach(function(valor:any, i:number, array:any[]) {
            console.log(`${i}: ${valor}`);
        })
    }
    console.log(texto);
    return texto;
}





// Más ejemplos con funcion de flecha y normal
let suma = (num:number) => num+2 

function suma2(num:number) {
    return num+2
}





// Return void
// (No retorna nada)
function dimeHola():void {
    console.log('BUENOS DIAS');
}





// Return never (FUNCION COMODIN PARA ENVIAR ERRORES QUE PARAN LA APLICACION)
function error(mensaje:string):never {
    throw new Error(mensaje);
}





// Parametros opcionales (2 maneras)
// Poniendo un valor por defecto (Si no hay parametro cojera el valor por defecto)
function opcional1(texto:string = 'Soy el por defecto'):void {
    console.log(texto);
}

// Poniendo un ? al parametro
function opcional2(texto?:string):void {
    console.log(texto);
}





// Parametros opcionales REST (numero de parametro X en un array)
function datos(nombre:string, ...resto:any[]):void {
    console.log(nombre);
    console.log(resto);
}