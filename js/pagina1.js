// Función: guarda el nombre y cambia de página
function guardar() {
    const nombre = document.getElementById("nombre").value;
    const ciudad = document.getElementById("ciudad").value;
    sessionStorage.setItem("nombre", nombre);   // guarda en la bodega
    sessionStorage.setItem("ciudad", ciudad);   // guarda la ciudad
    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return; // Salir de la función si el nombre está vacío
    }
    if (ciudad === "") {
        alert("Por favor, ingresa una ciudad.");
        return; // Salir de la función si la ciudad está vacía
    }
    window.location.href = "pagina2.html";      // cambia de página
}
// Evento: al hacer clic en el botón, se ejecuta guardar
document.getElementById("btn-guardar").addEventListener("click", guardar);