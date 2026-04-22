//console.log("Holiwis");
const contenedorCarrito = document.getElementById('cuerpo-carrito');
let cursosCarrito = [];


function vaciarCarrito(evento){
    console.log("Soy el vaciar carrito");
    console.log("Soy el vaciar carrito");
    console.log("Soy el vaciar carrito");
    console.log("Soy el vaciar carrito");
}

function agregarCurso(evento){
    console.log("Soy el agregar curso");

    //La propiedad PARENTELEMENT nos deja preguntar o averiguar quien es el PADRE
    //console.log(evento.target.parentElement.parentElement);
    let cursito = leerDatosCurso(evento.target.parentElement.parentElement)

    //Agregamos el curso al array del carrito
    cursosCarrito.push(cursito)
    console.log(cursosCarrito);
    //actualizamos la vista, recorriendo el array y pintando eso en el carrito html
    pintarCarritoHTML()
}

function leerDatosCurso(curso){
    console.log(curso);
    
    console.log(curso.querySelector("img").src);
    console.log(curso.querySelector("h4").textContent);
    console.log(curso.querySelector("h5").textContent);
    
    const infoCurso = {
        nombre : curso.querySelector("h4").textContent,
        imagen : curso.querySelector("img").src,
        precio : curso.querySelector("h5").textContent,
        cantidad : 1
    }
    console.log(infoCurso);
    return infoCurso;
}

function pintarCarritoHTML(){
    //Limpiar el html del carrito antes de mapear los datos

    cursosCarrito.map( (curso) => {
        //crear fila de html
        let fila = document.createElement('tr');

        fila.innerHTML= `
        <td><img src="${curso.imagen}" ></td>
        <td>${curso.nombre}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        `

        contenedorCarrito.appendChild(fila);
    })

}

function eliminarCurso(id){
console.log(id);

}

function saludarUsuario(){
    alert('Holiwis')
}
