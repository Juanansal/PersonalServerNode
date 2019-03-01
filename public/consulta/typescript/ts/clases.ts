
/*
    public --> Accesible en cualquier lugar
    protected --> Accesible dentro de la clase o herencias
    private --> Accesible dentro de la clase
    static --> Mismo valor para todos los vatiable de ese tipo de clase. Se llama Clase.variableEstatica

    * Estas propiedades solo seran utilizables en typescript (En el javascript generado, todo sera visible)
*/ 

///////////////////////////////////////////
// Creacion de una clase
///////////////////////////////////////////

// abstract indica que esa clase no puede ser creada con new.
// Se pondria   abstract class Miclase {}
// Se utiliza para crear plantillas que pueden heredar otras clases.


class ClaseUsuario {

    public nombre:string;
    public edad:number;
    private admin:boolean = false;
    private secreto:string = undefined;   
    static creados:number = 0;


    constructor(nombre:string, edad:number, admin?:boolean) {
        this.nombre = nombre; 
        this.edad = edad;
        if(admin) { this.admin = admin; }

        // Contador para ver elementos creados
        ClaseUsuario.creados++;
    }

    public setAdmin(valor:boolean):void {
        this.admin = valor;
    }

    protected sumaEdad(num:number):number {
        this.edad = this.edad + num;
        return this.edad;
    }

    set setSecreto(texto:string) {
        this.secreto = texto;
    }

    get getSecreto():string {
        return this.secreto;
    }

}



class ClaseProfesores extends ClaseUsuario{
    public asignatura:string = undefined;
    public colegio:string = undefined;
    static creados:number = 0;

    constructor(nombre:string, edad:number, admin?:boolean, asignatura?:string, colegio?:string) {
        super(nombre, edad, admin);
        if(asignatura) { this.asignatura = asignatura; }
        if(colegio) { this.colegio = colegio; }

        // Contador para profesores creados
        ClaseProfesores.creados++;
    }
}



// Crear una clase que solo dispone de una unica instancia de esa clase
class ClaseJefeUnico extends ClaseUsuario {

    static jefe:ClaseJefeUnico;

    private constructor(nombre:string, edad:number, admin:boolean) {

        super(nombre, edad, admin);
    }

    public static actualizarJefe(nombre:string,edad:number):ClaseJefeUnico {
        if(!ClaseJefeUnico.jefe) {
            ClaseJefeUnico.jefe = new ClaseJefeUnico(nombre,edad,true);
        }
        else {
            ClaseJefeUnico.jefe.nombre = nombre;
            ClaseJefeUnico.jefe.edad = edad;
        }
        return ClaseJefeUnico.jefe;
    }

    public static get getJefe():ClaseJefeUnico {
        return ClaseJefeUnico.jefe;
    }

}




///////////////////////////////////////////////////
// Creacion y lectura de las variables creadas
///////////////////////////////////////////////////

let clase1:ClaseUsuario = new ClaseUsuario('Pepe', 50);
let clase2:ClaseUsuario = new ClaseUsuario('Luis', 30, true);
let herencia1:ClaseProfesores = new ClaseProfesores('Paco', 50, null, null,'A saber');

ClaseJefeUnico.actualizarJefe('LUISITO',96);
ClaseJefeUnico.actualizarJefe('PEDRITO',32);






// PRUEBAS
/*
console.log(ClaseJefeUnico.jefe);
console.log(clase1);
console.log(clase2);
console.log(herencia1);
*/





