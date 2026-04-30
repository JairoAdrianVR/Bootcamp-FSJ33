//En TS tenemos que declarar el tipo de dato de los valores que queremos manejar(guardar)

//JS
let nombre = "Jairo";

// en TS con TIPADO DURO
// TS tiene un MANEJO DE ERRORES de forma natural
let nombrecito:string = "";

// Poder guardar dos tipos de datos en una misma variable
let suma : number | string = 1 + "1";
console.log(suma);


// Types 

type User = {
    name:string,
    email:string,
    password:string,
    photoUrl:string
}

let User1:User = {
    name: "Jairo",
    email: "jairo@kpo.com",
    password: "12345678",
    photoUrl : "fotofacherita.com/1"
};

let User2 :User = {
    name: "Abraham",
    email: "abraham@kpo.com",
    password: "123456",
    photoUrl : "fotofacherita.com/1"
}

let User3 :User = {
    name: "Jairo",
    email: "jairo@kpo.com",
    photoUrl : "fotofacherita.com/3"
};

function saludarUsuario(user:User) : string {
    return (`Hola, como estas ${user.photoUrl}`);
}