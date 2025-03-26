// Función para mostrar/ocultar el menú hamburguesa
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('oculto');
}

// Contador regresivo
const fechaBoda = new Date("2025-05-31T21:30:00").getTime();

const cuentaRegresiva = setInterval(() => {
    const ahora = new Date().getTime();
    const distancia = fechaBoda - ahora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;

    if (distancia < 0) {
        clearInterval(cuentaRegresiva);
        document.getElementById("contador").innerText = "¡La boda ha comenzado!";
    }
}, 1000);

// Confirmación de asistencia
function agregarIntegrante() {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const restriccion = document.getElementById("restriccion").value;
    
    if (nombre && edad) {
        const lista = document.getElementById("listaIntegrantes");
        const item = document.createElement("li");
        item.innerText = `${nombre} (Edad: ${edad}, Restricción: ${restriccion})`;
        lista.appendChild(item);

        document.getElementById("nombre").value = '';
        document.getElementById("edad").value = '';
        document.getElementById("restriccion").value = 'ninguna';
    } else {
        alert("Por favor, completa todos los campos.");
    }
}