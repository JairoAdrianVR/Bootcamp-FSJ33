// La accion de agarrar se hace con 2 metodos

let textos = document.getElementsByTagName("h1");
let textoPrincipal = document.getElementById("textoPrincipal");

let textoPrincipalGetQuery = document.querySelector("#textoPrincipal")

console.log(textos);
console.log(textoPrincipal);
console.log(textoPrincipalGetQuery);

//innexText es una propiedad de elementos de HTML para acceder a su valor de texto
let texto = textoPrincipal.innerText;
console.log(texto);

textoPrincipal.innerText = "Ya no saludo, me levante de mal humor";

let etiquetaCambio = document.getElementById("cambiarEtiqueta");
console.log(etiquetaCambio);

etiquetaCambio.innerHTML = "<h2 id='textoJS'>Esto fue agregado con JS</h2>"
console.log(etiquetaCambio.innerHTML);

let textitoJS = document.getElementById("textoJS")
console.log(textitoJS);

console.log("SEPARADOR DEL QUILOMBO ---------FORMULARIO------ ");


let container = document.getElementById("container");
console.log(container);
// COMO CAMBIAR EL CSS = container.style.backgroundColor = "blue";

container.innerHTML = `
        <form id="form-user">
            <label class="form-label">Nombre</label>
            <input type="text" class="form-control" placeholder="Ingrese su nombre" id="input_nombre">
            <br/>
            <label class="form-label">Edad</label>
            <input type="text" class="form-control" placeholder="Ingrese su edad">
            <button class="mt-2 btn btn-primary" type="submit" >MAGIA</button>
        </form>`

let formulario = document.getElementById('form-user');
console.log(formulario);

let inputNombre = document.getElementById('input_nombre');
console.log(inputNombre);


formulario.addEventListener('submit',(event) => {
    // preventDefault-> frena el comportamiento por defecto de los form
    // el evento submit en los formularios REFRESCA LA PAGINA
    event.preventDefault();
    //ACCEDO A EL VALOR DE UN INPUT, CON nombre.VALUE
    console.log(inputNombre.value);

    alert(`Hola ${inputNombre.value}, como estas?`)
})
