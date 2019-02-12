

// Boolean
let esRico:boolean = true;
let esPobre:boolean = false;




// Numeros
let num1:number = 50;
let num2:number = 50.5;




// Strings
let cadena1:string = 'Buenos dias';
let cadena2:string = "Buenos dias "+num1+" Buenas tardes"; 
let cadena3:string = `Buenos dias ${num1}`;




// Any
// (Puede ser cualquier tipo de dato)
let algo1:any = 'Buenas tardes';
let algo2:any = 85;

algo1 = 600;                // Cambio de string a numero
algo2 = 'Buenas noches';    // Cambio de numero a string




// Varias posibilidades de tipo de datos
let variado1:number|string = 'pepe';
let variado2:string[]|string = ['pepe','luis'];



// Arrays
let vector1:number[] = [5,6,7];
let vector2:any[] = [{nombre:'Luis', edad:50}, [50,60,89], 80, 60]
let vector3:string[] = ['Marta', 'Juan', 'Pepe'];




// Tuplas
// (Arrays pero donde definimos que tipo de datos hay en cada posicion)
let tupla1:[string, number] = ['Pepe', 50];




// Tuplas con operador spread ...
//let tupla2:[string, number, ...boolean[]] = ['Pepe', 50, true, true, false]; 




// Enumeraciones
// (Uso general para dar a un string el valor de un numero (Aunque pueden ser otros valores))
enum validar {
    'Funciona' = 0,
    'Fallo' = -1
}

let codigo1:number = validar.Fallo;      // Tendria el valor de -1
let codigo2:number = validar.Funciona;   // Tendria el valor de 0





// Decir a typescript que tipo de dato estoy trabajando
// Fuerza a utilizar esa variable con el tipo de dato que estoy utilizando
let algo:any = '9898.9889876546545';
let res1 = (<string>algo).length;           // devuelve la longitud del string
let res2 = (<number>algo).toExponential;    // Devuelve undefined ya que no es un numero (aunque al poner <number> lo ejecuta sin problemas)





// Para funciones
// -------------------
// void
// never



