//En TS tenemos que declarar el tipo de dato de los valores que queremos manejar(guardar)

//JS
let nombre = "Jairo";

// en TS con TIPADO DURO
// TS tiene un MANEJO DE ERRORES de forma natural
let nombrecito:string = "";

// Poder guardar dos tipos de datos en una misma variable
let suma : number | string = 1 + "1";
console.log(suma);
