document.addEventListener("DOMContentLoaded", function() {
    // Función para cargar el historial de solicitudes
    function cargarHistorial() {
        // Limpiar el cuerpo de la tabla
        document.getElementById('solicitudesBody').innerHTML = "";

        // Obtener las solicitudes desde el localStorage
        let solicitudes = JSON.parse(localStorage.getItem('historialSolicitudes')) || [];

        // Obtener el cuerpo de la tabla
        const solicitudesBody = document.getElementById('solicitudesBody');

        // Agregar cada solicitud a la tabla
        solicitudes.forEach(solicitud => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${solicitud.id}</td>
                <td>${solicitud.nombre}</td>
                <td>${solicitud.apellido}</td>
                <td>${solicitud.email}</td>
                <td>${solicitud.mensaje}</td>
                <td>${solicitud.fecha}</td>
                <td class="${solicitud.estado.toLowerCase().replace(' ', '-')}">${solicitud.estado}</td>
                <td>${solicitud.comentarios}</td>
            `;

            solicitudesBody.appendChild(row);
        });
    }

    // Llamar a la función cargarHistorial al cargar la página
    cargarHistorial();

    // Agregar evento al botón para eliminar el historial
    document.getElementById('eliminarHistorialBtn').addEventListener('click', function() {
        // Limpiar el historial de solicitudes en el localStorage
        localStorage.removeItem('historialSolicitudes');

        // Limpiar el cuerpo de la tabla en la página
        document.getElementById('solicitudesBody').innerHTML = "";
    });
});
