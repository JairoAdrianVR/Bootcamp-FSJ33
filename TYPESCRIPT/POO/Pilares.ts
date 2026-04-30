// 4 Pilares de la POO o OOP

/* 
Herencia = Obtener las caracteristicas y comportamientos de otra clase (Padre)

Polimorfismo = Cambiamos el funcionamiento de un metodo Heradedado, osea en el hijo se comporta diferente al padre

Encapsulamiento -> Es la forma que tenemos de limitar el acceso a algo de la clase a traves del uso de modificadores de acceso
-- modificadores de acceso --
Public -> Puedo acceder (leer y modificar) desde cualquier lado
Private -> Solo puedo acceder desde dentro de la clase que tiene ese propiedad/metodo
Protected -> Solo peudo acceder desde dentro de la misma clase y sus hijos
default -> NO PONGO NADA, es public


Abstraccion -> Generar los metodos para poder interactuar con las propiedades encapsuladas
Ocultar los procesos complejos que hace una clase dentro de un metodo

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



class Auto{
    private motor:string;
    private plazas:number;
    private chasis:string;
    private cantRuedas:number;
    private marca:string;
    private modelo:string;
    private tipo:string;
    private aceleracion:number;

    public getMotor(): string {
        return this.motor;
    }

    public getPlazas(): number {
        return this.plazas;
    }

    public setPlazas(plazas: number): void {
        this.plazas = plazas;
    }

    public getChasis(): string {
        return this.chasis;
    }

    public setChasis(chasis: string): void {
        this.chasis = chasis;
    }

    public getCantRuedas(): number {
        return this.cantRuedas;
    }

    public setCantRuedas(cantRuedas: number): void {
        this.cantRuedas = cantRuedas;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    public getAceleracion(): number {
        return this.aceleracion;
    }

    public setAceleracion(aceleracion: number): void {
        this.aceleracion = aceleracion;
    }


    constructor(ruedasParam:number, plazasParam:number,chasisParam:string, motorParam:string, marcaParam:string, modeloParam:string, tipoParam:string, aceleracionParam:number
    ){
        this.cantRuedas = ruedasParam;
        this.plazas = plazasParam;
        this.chasis = chasisParam;
        this.motor  = motorParam;
        this.marca = marcaParam;
        this.modelo = modeloParam;
        this.tipo = tipoParam;
        this.aceleracion = aceleracionParam;
    }

    protected acelerar():string{
        return `Soy un ${this.modelo} y acelero a una velocidad de ${this.aceleracion} km/h`
    }

    //Getters -> Metodos que nos permiten leer una propiedad
    getModelo():string{
        return this.modelo;
    }

    //Setters -> Metodos que nos permiten cambiar un valor o agregar valor a una propiedad
    setMotor(motorParam:string):string{
        this.motor = motorParam;
        return this.motor;
    }


    getAuto(){
        return this;
    }
}

let vocho = new Auto(4,4,"A09810MI98","Gasolina 1.6 acelera en años luz","Volkswagen","Beetle","Sedan",10);
//Accedo a la propiedad modelo y en este caso cambio el valor
console.log(vocho.getAuto());

//console.log(vocho.acelerar());

class AutoDeportivo extends Auto{
    //propiedad
    tipoAleron:string;

    constructor(ruedasParam:number, plazasParam:number,chasisParam:string, motorParam:string, marcaParam:string, modeloParam:string, tipoParam:string, aceleracionParam:number,aleronParam:string){
        super(ruedasParam, plazasParam,chasisParam, motorParam, marcaParam, modeloParam, tipoParam, aceleracionParam);
        this.tipoAleron = aleronParam;
    }
   
    acelerar(): string {
        return `${super.acelerar()} y como soy deportivo tengo un aleron de tipo ${this.tipoAleron}`
    }
}

let pagani = new AutoDeportivo(4,2,"F123J54670","V10 5.0 a nafta","Pagani","Huayra","Coupe",50,"Tiburon");
console.log(pagani.acelerar());


//La interface va a ser un contrato,

class Ave{
    alas:string;
    pico:boolean;
    tamaño:string;
    nombre:string;

    constructor(alasParam:string,picoParam:boolean,tamañoParam:string,nombreParam:string){
        this.alas = alasParam;
        this.pico = picoParam;
        this.tamaño = tamañoParam;
        this.nombre = nombreParam;
    }

    comer():string{
        return "Estoy comiendo y tomando te con Maria Antonieta y su hermanita";
    }

}

interface IAveVoladora {
    volar():string;
}

interface IAveNadadora{
    nadar():string;
}

let gallina = new Ave("Marron y blancas",true,"3kg","Gallina Turuleca");

class Pato extends Ave implements IAveVoladora,IAveNadadora{
    volar(){
        return "Estoy volando";
    };

    nadar() {
        return "Estoy nadando"
    };
}

class Pinguino extends Ave implements IAveNadadora{
        
    nadar() {
        return "Estoy nadando mejor que el pato"
    };
}

