document.addEventListener('DOMContentLoaded', function() {
    const documentsList = document.getElementById('documents');
    const detailsDiv = document.getElementById('details');
    let selectedDocument = null;

    // Obtener solicitudes desde el localStorage
    const solicitudes = JSON.parse(localStorage.getItem("historialSolicitudes")) || [];

    solicitudes.forEach(doc => {
        const li = document.createElement('li');
        li.textContent = `${doc.nombre} ${doc.apellido} - Subido por: ${doc.email} el ${doc.fecha}`;
        li.addEventListener('click', () => showDetails(doc));
        documentsList.appendChild(li);
    });

    function showDetails(doc) {
        selectedDocument = doc;
        detailsDiv.innerHTML = `
            <p><strong>Nombre:</strong> ${doc.nombre} ${doc.apellido}</p>
            <p><strong>Correo electrónico:</strong> ${doc.email}</p>
            <p><strong>Fecha de subida:</strong> ${doc.fecha}</p>
            <p><strong>Mensaje adicional:</strong> ${doc.mensaje}</p>
        `;
    }

    window.approveDocument = function() {
        if (!selectedDocument) {
            alert('Por favor, seleccione un documento primero.');
            return;
        }
        const comments = document.getElementById('comments').value;
        alert(`Documento de ${selectedDocument.nombre} aprobado con comentarios: "${comments}"`);
        // Aquí puedes agregar la lógica para manejar la aprobación del documento
    };

    window.rejectDocument = function() {
        if (!selectedDocument) {
            alert('Por favor, seleccione un documento primero.');
            return;
        }
        const comments = document.getElementById('comments').value;
        selectedDocument.estado = 'Rechazado';
        selectedDocument.comentarios = comments;

        // Guardar el historial actualizado en localStorage
        localStorage.setItem("historialSolicitudes", JSON.stringify(solicitudes));

        alert(`Documento de ${selectedDocument.nombre} rechazado con comentarios: "${comments}"`);
    };
});
