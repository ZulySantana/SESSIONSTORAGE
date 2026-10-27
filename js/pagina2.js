// Función: lee el nombre y lo muestra
function mostrarNombre() {
    const nombre = sessionStorage.getItem("nombre");   // lee de la bodega
    const ciudad = sessionStorage.getItem("ciudad");   // lee la ciudad
    

    if (nombre === null || ciudad === null) {
        document.getElementById("saludo").textContent = "No hay ningún nombre ni ciudad guardada.";
    } else {
        document.getElementById("saludo").textContent = "Hola, " + nombre + " de " + ciudad;
    }
}

// Función: borra el nombre y vuelve a mostrar el resultado
function borrar() {
    sessionStorage.removeItem("nombre");   // borra de la bodega
    sessionStorage.removeItem("ciudad");   // borra la ciudad
    mostrarNombre();                       // actualiza el mensaje
}
function borrarTodo() {
    sessionStorage.clear();   // borra todo de la bodega
    mostrarNombre();          // actualiza el mensaje
}

// Función: borra el nombre y vuelve a mostrar el resultado

// Eventos
document.addEventListener("DOMContentLoaded", mostrarNombre);            // al cargar la página
document.getElementById("btn-borrar").addEventListener("click", borrar); // al hacer clic
document.getElementById("btn-borrar-todo").addEventListener("click", borrarTodo); // al hacer clic