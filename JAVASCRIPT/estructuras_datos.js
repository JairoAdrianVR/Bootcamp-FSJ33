// QUE CORNO ES UNA ESTRUCTURA DE DATOS?
// Es la forma de guardar mas de un dato en una misma cajita(ref en memoria)
let nombreDeIntegrantesFSJ33 = "Jairito,Abraham, Iriam, Valerie y Sergio";


//Declarar un array
let cajitaArray = [];


// Array indexado -> Se ordena a traves de referencias a sus celdas por numeros
// desde el 0 en adelante
let integrantesFSJ33 = ["Sergio","Iriam","Abraham","Valerie","Jairo","Kenia","Diego"];
//console.log(integrantesFSJ33.length); 7


//Imprime el integrante numero 4
//console.log(integrantesFSJ33[3]);

ejercicioEstudiantes(integrantesFSJ33);
//Imprime 1 por 1, los integrantes del FSJ33 utilizando el bucle FOR
function ejercicioEstudiantes(arrayEstudiantes){
    for(let cont = 0; cont < arrayEstudiantes.length; cont++){
        console.log(arrayEstudiantes[cont]);
    }

}

//Imprime el segundo huesped del hotel
let hotelcito = ["Sergio","Iriam","Abraham","Valerie","Jairo"];
console.log(hotelcito[1]);


//Objetos

//Objetos literales

let personita = {
    "primerPosicion" : "Sergio",
    1 : "Iriam"
}

//Es una de las maneras de ACCEDER A UNA CLAVE DE UN OBJETO
console.log(personita["primerPosicion"]);

// Dado un objeto de tipo estudiantes, accede a sus Claves e imprime el "primerEstudiante"
// Dado un objeto de tipo Persona, accede a sus Claves e imprime el apellido

let persona = {
    "nombre" : "Jairo",
    "apellido": "Vega"
}
console.log(persona);

let estudiantes = {
    "primerEstudiante" : "Valerie",
    "segundoEstudiante" : "Iriam"
}

console.log(persona["apellido"]);
console.log(estudiantes["primerEstudiante"]);


// Declaracion de una clase -> instancia de un objeto
class Usuario {
    //Metodo -> Es una funcion propia de una clase

    // constructor -> METODO RESERVADO -> METODOS DEL LENGUAJE QUE NOS PERMITEN HACER COSAS
    // AYUDARNOS A GENERAR OBJETOS CON X VALORES
    constructor(name,age){
        //Nosotros vamos a declarar sus atributos(propiedades) -> caracteristicas
        //this -> Una representacion para apuntar o avisarle al lenguaje que ESTO es de esta clase
        this.nombre = name;
        this.edad = age;
    }

}

// Instanciar de un objeto -> Crear un objeto a traves de una clase
// new -> AVISA AL LENGUAJE QUE VAMOS A ACTIVAR UN CONSTRUCTOR
let usuario = new Usuario("Jairo",75);
let usuario3 = new Usuario("Sergio",21);
let usuario5 = new Usuario("Sergio",21);

console.log(usuario);
console.log(usuario3);


let usuario1 = {
    "nombre": "Jairo",
    "edad":75
}

let usuario2 = {
    "nombre": "Abraham",
    "edad":22,
    "apodo": "Mr.Pesca"
}
//Maneras de acceder a una propiedad o clave(keys)
console.log(usuario1.nombre);
console.log(usuario2["nombre"]);

let keys = Object.keys(usuario1)
console.log(keys);


// Crea una funcion que recorra el array de personajes y nos imprima su nombre y su edad si tenemos esa informacion, sino, solo su nombre

let personajes = [ 
    {name: "Fito", age: 62 },
    {name: "Canelo"},
    {name:"Jose",age:30},
    {name:"Chispas",age:5},
    {name:"Pipo"},
    {name:"Pepito Fuentes"},
    {name:"Momy",age:18}
];

//Metodo reservado de arrays -> forEach -> Recorre cada posicion y por cada posicion ejecuta una logica (funcion)
function imprimirPersonajesForeach(array){
    // console.log vs return
        array.forEach( (pj) => {
            //Si en pj.age no tenemos valor hay que imprimir el nombre
            if(pj.age === undefined) {
                console.log(`Nombre: ${pj.name} y no tenemos datos de su edad.`);
            }else{
                console.log(`Nombre: ${pj.name} y su edad es: ${pj.age}.`);   
            }
        })
}

//Llamar (ejecutar) funcion
imprimirPersonajesForeach(personajes);


function imprimirPersonajesFor(array){
    for(let i = 0; i < array.length; i++){
        let pj = array[i];

        if(pj.age === undefined) {
            console.log(`Nombre: ${pj.name} y no tenemos datos de su edad.`);
        }else{
            console.log(`Nombre: ${pj.name} y su edad es: ${pj.age}.`);   
        }
    }
}
imprimirPersonajesFor(personajes)