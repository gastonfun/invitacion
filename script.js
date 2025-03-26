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

// Lista de integrantes
const listaIntegrantes = [];

// Función para agregar integrante
function agregarIntegrante() {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const restriccion = document.getElementById("restriccion").value;
    
    if (nombre && edad) {
        const integrante = {
            nombre: nombre,
            edad: edad,
            restriccion: restriccion
        };
        
        // Agregar a la lista
        listaIntegrantes.push(integrante);
        mostrarIntegrantes();
        
        // Limpiar los campos
        document.getElementById("nombre").value = '';
        document.getElementById("edad").value = '';
        document.getElementById("restriccion").value = 'ninguna';
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

// Función para mostrar integrantes
function mostrarIntegrantes() {
    const lista = document.getElementById("listaIntegrantes");
    lista.innerHTML = ''; // Limpiar la lista

    listaIntegrantes.forEach((integrante, index) => {
        const item = document.createElement("li");
        item.innerText = ${integrante.nombre} (Edad: ${integrante.edad}, Restricción: ${integrante.restriccion});
        lista.appendChild(item);
    });
}

// Función para enviar confirmación
function enviarConfirmacion() {
    if (listaIntegrantes.length > 0) {
        alert("Gracias por confirmar la asistencia de los siguientes integrantes:\n" +
              listaIntegrantes.map(ing => ${ing.nombre} (Edad: ${ing.edad}, Restricción: ${ing.restriccion})).join("\n"));
    } else {
        alert("No hay integrantes confirmados.");
    }
}
```
