document.addEventListener('DOMContentLoaded', () => {
    const cargarDocumentosBtn = document.getElementById('cargarDocumentosBtn');

    cargarDocumentosBtn.addEventListener('click', () => {
        window.location.href = 'documentos.html';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var historial = JSON.parse(localStorage.getItem("historialSolicitudes")) || [];

    document.getElementById("solicitudForm").addEventListener("submit", function(event) {
        event.preventDefault();

        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var email = document.getElementById("email").value;
        var mensaje = document.getElementById("mensaje").value;

        var solicitud = {
            id: Date.now(),
            fecha: new Date().toLocaleDateString(),
            estado: "En Revisión",
            nombre: nombre,
            apellido: apellido,
            email: email,
            mensaje: mensaje,
            comentarios: "En revisión"
        };

        historial.push(solicitud);
        localStorage.setItem("historialSolicitudes", JSON.stringify(historial));

        var mensajeExito = document.getElementById("mensajeExito");
        mensajeExito.classList.remove("hidden");
        setTimeout(function() {
            mensajeExito.classList.add("hidden");
        }, 3000);

        document.getElementById("solicitudForm").reset();
        actualizarTabla();
    });

    function actualizarTabla() {
        var historialTableBody = document.getElementById("historialTableBody");
        if (!historialTableBody) return;
        
        historialTableBody.innerHTML = "";
        historial.forEach(function(solicitud) {
            var row = document.createElement("tr");

            var idCell = document.createElement("td");
            idCell.textContent = solicitud.id;
            row.appendChild(idCell);

            var nombreCell = document.createElement("td");
            nombreCell.textContent = solicitud.nombre;
            row.appendChild(nombreCell);

            var apellidoCell = document.createElement("td");
            apellidoCell.textContent = solicitud.apellido;
            row.appendChild(apellidoCell);

            var emailCell = document.createElement("td");
            emailCell.textContent = solicitud.email;
            row.appendChild(emailCell);

            var mensajeCell = document.createElement("td");
            mensajeCell.textContent = solicitud.mensaje;
            row.appendChild(mensajeCell);

            var fechaCell = document.createElement("td");
            fechaCell.textContent = solicitud.fecha;
            row.appendChild(fechaCell);

            var estadoCell = document.createElement("td");
            estadoCell.textContent = solicitud.estado;
            estadoCell.className = solicitud.estado.toLowerCase().replace(' ', '-');
            row.appendChild(estadoCell);

            var comentariosCell = document.createElement("td");
            comentariosCell.textContent = solicitud.comentarios;
            row.appendChild(comentariosCell);

            historialTableBody.appendChild(row);
        });
    }

    actualizarTabla();
});

    // Función para actualizar la tabla con el historial de solicitudes
    function actualizarTabla() {
        var historialTableBody = document.getElementById("historialTableBody");
        historialTableBody.innerHTML = ""; // Limpiar contenido actual de la tabla

        // Recorrer el historial y agregar cada solicitud a la tabla
        historial.forEach(function(solicitud) {
            var row = document.createElement("tr");

            // Crear celdas para cada propiedad de la solicitud
            var idCell = document.createElement("td");
            idCell.textContent = solicitud.id;
            row.appendChild(idCell);

            var nombreCell = document.createElement("td");
            nombreCell.textContent = solicitud.nombre;
            row.appendChild(nombreCell);

            var apellidoCell = document.createElement("td");
            apellidoCell.textContent = solicitud.apellido;
            row.appendChild(apellidoCell);

            var emailCell = document.createElement("td");
            emailCell.textContent = solicitud.email;
            row.appendChild(emailCell);

            var mensajeCell = document.createElement("td");
            mensajeCell.textContent = solicitud.mensaje;
            row.appendChild(mensajeCell);

            var fechaCell = document.createElement("td");
            fechaCell.textContent = solicitud.fecha;
            row.appendChild(fechaCell);

            var estadoCell = document.createElement("td");
            estadoCell.textContent = solicitud.estado;
            estadoCell.className = solicitud.estado.toLowerCase().replace(' ', '-');
            row.appendChild(estadoCell);

            var comentariosCell = document.createElement("td");
            comentariosCell.textContent = solicitud.comentarios;
            row.appendChild(comentariosCell);

            // Agregar la fila a la tabla
            historialTableBody.appendChild(row);
        });
    }

    
    // Llamar a actualizarTabla para cargar el historial al cargar la página
    actualizarTabla();

