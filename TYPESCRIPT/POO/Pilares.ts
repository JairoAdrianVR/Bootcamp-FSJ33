// 4 Pilares de la POO o OOP

/* 
Herencia = Obtener las caracteristicas y comportamientos de otra clase (Padre)
Polimorfismo = Cambiamos el funcionamiento de un metodo Heradedado, osea en el hijo se comporta diferente al padre

Encapsulamiento
Abstraccion

*/

class Persona{
    //Caracteristicas -> propiedades

    nombre:string;
    apellido:string;
    edad:number;

    constructor(nombreParam:string, apellidoParam:string, edadParam:number){
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.edad = edadParam;
    }

    dormir():string{        
        return "Estoy durmiendo placidamente, que feliz que soy jaja saludos";
    }
}

class Programador extends Persona{
    //Guardar los lenguajes en un array de STRINGS
    lenguajesProgra: string[] = ["Java","Javascript"];

    constructor(nombreParam:string, apellidoParam:string, 
        edadParam:number,lenguajesPrograParam: string[]){
        super(nombreParam,apellidoParam,edadParam);

        this.lenguajesProgra = lenguajesPrograParam;
    }

    pickarCodigo():string {
        return "Estoy solventando el bug de produccion, no molestes.";
    }

    dormir():string{        
        return "Estoy durmiendo no tan placidamente, porque el codigo no anda";
    }
}

let hector = new Persona('Hector','Vega',3);
//hector.pickarCodigo()
console.log(hector.dormir());

let iriam = new Programador('Iriam','Cordoba',21,["Java","Javascript","C++"]);
console.log(iriam.dormir());
iriam.pickarCodigo();


let sergio = new Programador('Sergio','Delgado',28,["Javascript","Typescript","Lenguaje de la vida","Python"]);
sergio.pickarCodigo();
console.log(sergio.dormir());