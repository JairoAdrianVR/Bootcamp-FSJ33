//alert("Holiwis");
let variablecita = 'soy un string, cadena de texto para los amigos';
 variablecita = "holiwis soy variablecita"

let variblezota = "soy una variable grande" 

let numerito = 1;
// Se puede declarar varias variables con un solo let separandolas con la ,
let string = "holiwis soy un string",  numerazo = 1235.345;

// Imprimir
console.log("Holiwis desde la consola");
console.log(variablecita);
console.log(variblezota);

const pi = 3.1416;

let variableNula = null;
console.log(variableNula);

let variableSinValor; 
console.log(variableSinValor);

// Operadores
// Matematicos -> + - / * % 

let divisionModulo = 11 % 2;
console.log(divisionModulo);
 
//Determinar si la cantidad de caracteres de la palabra es par o impar
let auxiliar = "Holis";
//Averiguamos el largo de un string
console.log(auxiliar.length);
let paroimpar = auxiliar.length % 2;
console.log(paroimpar);

// Operadores de Comparacion -> NO DAN UNA RESPUESTA EN NUMBER O STRING, RESPONDEN EN BOOLEAN
// Mayor que  > 
let mayorcito = 5 > 3;
console.log(mayorcito);
// Menor que < 
let menorcito = 3 < 10;
console.log(menorcito);
// Diferente (desigual)
let diferente = 6 != 6;
console.log(diferente);
//Desigualdad estricta
let diferenteEstricto = "6" !== 6;
console.log(diferenteEstricto);
// Igual ==
let igualdad = "Jairo" == "Jairo";
console.log(igualdad);
//Igualdad estricta
let igualdadEstricta = "3" === 3;
console.log(igualdadEstricta);

//Caso curioso
let benjaminButton = "3" + 3;
console.log(benjaminButton);

// Operador de concatenacion
let parteTexto = "como andis?";
let stringContatenado = "Holiwis "+ parteTexto;
console.log(stringContatenado);

//Reemplazo a la concatenacion para mostrar valores en un string
// TEMPLATE STRING
let edad = 75;
let mensaje = `Jairo tu edad es ${edad}`;
console.log(mensaje);

//Estructuras de control
// SI -> IF

if(3>3){
    console.log("Si es mayor");
}else{
    console.log("No es mayor");
}

// switch
let opcion = 0;
switch(opcion){
        case 1 : console.log("Te comunicaste con el area tecnica")
        break;

        case 2: console.log("Te comunicaste con el area administrativa")
        break;

        default: console.log("Por favor, coloca una opcion correcta 1 o 2")
        break;
}

//Bucles
//For(VARIABLE ; CONDICION DE CORTE ; INCREMENTO/DECREMENTO)
for(let contadorcito = 1; contadorcito > 0 && contadorcito < 10; contadorcito++ ){
    console.log(contadorcito);
    
}

//While -> NO SE VA A EJECUTAR, a menos que se cumpla la condicion
let contador = 0;
while(contador > 0 && contador < 10){
    console.log(`El contador es menor que 10, su valor es ${contador}`);
    contador++;
}

//Do While -> Si o si se va a ejecutar al menos 1 vez
do{
    console.log(`El contador es menor que 10, su valor es ${contador}`);
    contador++;
}while(contador > 0 && contador < 10)