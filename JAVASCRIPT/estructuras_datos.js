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
