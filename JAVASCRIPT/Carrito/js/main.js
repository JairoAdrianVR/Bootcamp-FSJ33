//console.log("Holiwis");
const contenedorCarrito = document.getElementById('cuerpo-carrito');
let cursosCarrito = [];


function vaciarCarrito(evento){
    console.log("Soy el vaciar carrito");
    //Limpiar el html del carrito antes de mapear los datos
    contenedorCarrito.innerHTML = "";

    cursosCarrito = [];
}

function agregarCurso(evento){
    console.log("Soy el agregar curso");

    //La propiedad PARENTELEMENT nos deja preguntar o averiguar quien es el PADRE
    //console.log(evento.target.parentElement.parentElement);
    let cursito = leerDatosCurso(evento.target.parentElement.parentElement)

    //Chequear si el curso existia previamente 

    const existe = cursosCarrito.some( (cursoArray) => cursoArray.id === cursito.id )

    //console.log(`El curso existe o no? ${existe}`);
    
    if(existe){
        cursosCarrito.map( (curso) => {
            //Encontrar el curso que clickee dentro del array
            if(curso.id === cursito.id){
                curso.cantidad += 1;
                return curso;
            }
        })
    }else {
        //Agregamos el curso al array del carrito
            cursosCarrito.push(cursito)
    }

    console.log(cursosCarrito);
    //actualizamos la vista, recorriendo el array y pintando eso en el carrito html
    pintarCarritoHTML()
}

function leerDatosCurso(curso){
    //console.log(curso);
    
    //console.log(curso.querySelector("img").src);
    //console.log(curso.querySelector("h4").textContent);
    //console.log(curso.querySelector("h5").textContent);
    
    const infoCurso = {
        id:curso.querySelector("a").getAttribute('data-id'),
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
    contenedorCarrito.innerHTML = "";
    // Metodo map -> Recorre el array y RETORNA por cada posicion algo
    cursosCarrito.map( (curso) => {
        //crear fila de html
        let fila = document.createElement('tr');

        fila.innerHTML= `
        <td><img src="${curso.imagen}" ></td>
        <td>${curso.nombre}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        <td><a class="btn btn-danger" onclick="eliminarCurso(${curso.id})">Eliminar</a></td>
        `

        contenedorCarrito.appendChild(fila);
    })

}

function eliminarCurso(id){
console.log(id);
    //RETO -> PARA EL LUNES
}

function saludarUsuario(){
    alert('Holiwis')
}
