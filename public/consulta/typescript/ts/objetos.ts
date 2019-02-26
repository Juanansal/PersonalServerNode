
// Crear objetos
// Al crear los objetos con typescript se guarda su estructura al ser inicializados
// Es decir
// Si se crea vacio, más adelante se le podra sustituir por otro objeto con las propiedades que necesitemos,
// pero no se podran añadir propiedades directamente si no estan en la inicializacion

// Si se crea con propiedades, solo podra tener esa estructura de propiedades (que podran cambiar de valor)

// Objeto vacio (Se podra sustituir por otro objeto)


type Usuario = {
    nombre:string,
    edad ?:number,
    telefonos ?: {fijo:string, movil:string},
    dameNombre ?: () => string
};
 

let objeto1:{} = {}

// Objeto con propiedades, debe mantener esta estrucutra, siempre
let objeto2:Usuario= {
    nombre: 'Luis',
    telefonos: {
        fijo: '667858',
        movil: '3546341'
    },
    dameNombre() {
        return this.nombre
    }
};

