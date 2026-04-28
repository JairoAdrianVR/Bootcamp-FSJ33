//TSC -> Typescript Compiler -> TRADUCE el codigo de TS a JS

console.log("Holiwis desde la consola pero en TS");


//POO -> Utilizando una forma de programar

// PARA QUE QUIERO UNA CLASE? Para poder reutilizar y crear varios objetos con las mismas caracteristicas
// Clase -> Representacion de algo que nosotros podamos saber su comportamiento y caracteristicas
// Metodos -> Van a ser funciones que describen el comportamiento de un 'objeto'
// Atributos o propiedades -> Caracteristicas de ese 'objeto'

class Curso{
    //Atributos o propiedades
    nombre:string;

    constructor(name:string ){
        this.nombre = name;
    }

    grabarClase():string {
        return "Estoy grabando la clase, su grabacion estara disponible luego. JAJA saludos";
    }
}

//Crear o instanciar un objeto
let cursito = new Curso("FSJ33");
console.log(cursito);
console.log(cursito.grabarClase());

let holiwis = "holiwis";

const chauchis = "chauchis";



