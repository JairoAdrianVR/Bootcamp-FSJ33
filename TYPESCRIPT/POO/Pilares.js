// 4 Pilares de la POO o OOP
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
Herencia = Obtener las caracteristicas y comportamientos de otra clase (Padre)
Polimorfismo = Cambiamos el funcionamiento de un metodo Heradedado, osea en el hijo se comporta diferente al padre

Encapsulamiento -> Es la forma que tenemos de limitar el acceso a algo de la clase a traves del uso de modificadores de acceso
-- modificadores de acceso --
Public -> Puedo acceder (leer y modificar) desde cualquier lado
Private -> Solo puedo acceder desde dentro de la clase que tiene ese propiedad/metodo
Protected -> Solo peudo acceder desde dentro de la misma clase y sus hijos
default -> NO PONGO NADA, es public


Abstraccion

*/
var Persona = /** @class */ (function () {
    function Persona(nombreParam, apellidoParam, edadParam) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.edad = edadParam;
    }
    Persona.prototype.dormir = function () {
        return "Estoy durmiendo placidamente, que feliz que soy jaja saludos";
    };
    return Persona;
}());
var Programador = /** @class */ (function (_super) {
    __extends(Programador, _super);
    function Programador(nombreParam, apellidoParam, edadParam, lenguajesPrograParam) {
        var _this = _super.call(this, nombreParam, apellidoParam, edadParam) || this;
        //Guardar los lenguajes en un array de STRINGS
        _this.lenguajesProgra = ["Java", "Javascript"];
        _this.lenguajesProgra = lenguajesPrograParam;
        return _this;
    }
    Programador.prototype.pickarCodigo = function () {
        return "Estoy solventando el bug de produccion, no molestes.";
    };
    Programador.prototype.dormir = function () {
        return "Estoy durmiendo no tan placidamente, porque el codigo no anda";
    };
    return Programador;
}(Persona));
var hector = new Persona('Hector', 'Vega', 3);
//hector.pickarCodigo()
console.log(hector.dormir());
var iriam = new Programador('Iriam', 'Cordoba', 21, ["Java", "Javascript", "C++"]);
console.log(iriam.dormir());
iriam.pickarCodigo();
var sergio = new Programador('Sergio', 'Delgado', 28, ["Javascript", "Typescript", "Lenguaje de la vida", "Python"]);
sergio.pickarCodigo();
console.log(sergio.dormir());
var Auto = /** @class */ (function () {
    function Auto(ruedasParam, plazasParam, chasisParam, motorParam, marcaParam, modeloParam, tipoParam, aceleracionParam) {
        this.cantRuedas = ruedasParam;
        this.plazas = plazasParam;
        this.chasis = chasisParam;
        this.motor = motorParam;
        this.marca = marcaParam;
        this.modelo = modeloParam;
        this.tipo = tipoParam;
        this.aceleracion = aceleracionParam;
    }
    Auto.prototype.acelerar = function () {
        return "Soy un ".concat(this.modelo, " y acelero a una velocidad de ").concat(this.aceleracion, " km/h");
    };
    return Auto;
}());
var vocho = new Auto(4, 4, "A09810MI98", "Gasolina 1.6 acelera en años luz", "Volkswagen", "Beetle", "Sedan", 10);
//Accedo a la propiedad modelo y en este caso cambio el valor
//console.log(vocho.acelerar());
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo(ruedasParam, plazasParam, chasisParam, motorParam, marcaParam, modeloParam, tipoParam, aceleracionParam, aleronParam) {
        var _this = _super.call(this, ruedasParam, plazasParam, chasisParam, motorParam, marcaParam, modeloParam, tipoParam, aceleracionParam) || this;
        _this.tipoAleron = aleronParam;
        return _this;
    }
    AutoDeportivo.prototype.acelerar = function () {
        return "".concat(_super.prototype.acelerar.call(this), " y como soy deportivo tengo un aleron de tipo ").concat(this.tipoAleron);
    };
    return AutoDeportivo;
}(Auto));
var pagani = new AutoDeportivo(4, 2, "F123J54670", "V10 5.0 a nafta", "Pagani", "Huayra", "Coupe", 50, "Tiburon");
console.log(pagani.acelerar());
