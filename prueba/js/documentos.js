document.addEventListener('DOMContentLoaded', function() {
    const sections = [
        { dropZoneId: 'drop-zone-experiencia', inputId: 'experienciaProfesional', label: 'Documentación de Experiencia Profesional' },
        { dropZoneId: 'drop-zone-eventos', inputId: 'eventosAcademicos', label: 'Participación en Eventos Académicos' },
        { dropZoneId: 'drop-zone-otros', inputId: 'otrosDocumentos', label: 'Otros Documentos Relevantes' },
        { dropZoneId: 'drop-zone-titulos', inputId: 'titulosAcademicos', label: 'Títulos Académicos' },
        { dropZoneId: 'drop-zone-capacitacion', inputId: 'certificadosCapacitacion', label: 'Certificados de Capacitación y Actualización' },
        { dropZoneId: 'drop-zone-cv-docente', inputId: 'cvExperienciaDocente', label: 'Currículum Vitae - Experiencia Docente' },
        { dropZoneId: 'drop-zone-cv-profesional', inputId: 'cvExperienciaProfesional', label: 'Currículum Vitae - Experiencia Profesional' },
        { dropZoneId: 'drop-zone-cv-publicaciones', inputId: 'cvPublicaciones', label: 'Currículum Vitae - Publicaciones y Trabajos de Investigación' },
        { dropZoneId: 'drop-zone-cv-congresos', inputId: 'cvCongresos', label: 'Currículum Vitae - Participación en Congresos y Seminarios' }
    ];

    const cargarDocumentoBtn = document.getElementById('cargarDocumentoBtn');
    const mensajeExito = document.getElementById('mensajeExito');
    const mensajeError = document.getElementById('mensajeError');

    const maxFileSize = 5 * 1024 * 1024; // 5MB en bytes

    sections.forEach(section => {
        const dropZone = document.getElementById(section.dropZoneId);
        const fileInput = document.getElementById(section.inputId);

        dropZone.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', () => handleFiles(fileInput.files, dropZone));
        
        dropZone.addEventListener('dragover', (event) => {
            event.preventDefault();
            dropZone.classList.add('drop-zone--over');
        });

        dropZone.addEventListener('dragleave', (event) => {
            event.preventDefault();
            dropZone.classList.remove('drop-zone--over');
        });

        dropZone.addEventListener('drop', (event) => {
            event.preventDefault();
            dropZone.classList.remove('drop-zone--over');
            const files = event.dataTransfer.files;
            fileInput.files = files;
            handleFiles(files, dropZone);
        });
    });

    cargarDocumentoBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Evitar el envío del formulario si se usa un form
        let valid = true;
        let missingFiles = [];
        
        sections.forEach(section => {
            const fileInput = document.getElementById(section.inputId);
            if (fileInput.files.length === 0 || !validarArchivos(fileInput.files)) {
                valid = false;
                if (fileInput.files.length === 0) {
                    missingFiles.push(section.label);
                }
            }
        });

        if (!valid) {
            if (missingFiles.length > 0) {
                mensajeError.textContent = `Documentos cargados, pero te hicieron falta subir los siguientes documentos: ${missingFiles.join(', ')}`;
            }
            mensajeError.classList.remove('hidden');
            setTimeout(() => {
                mensajeError.classList.add('hidden');
            }, 3000);
            return;
        }

        mensajeExito.classList.remove('hidden');
        setTimeout(() => {
            mensajeExito.classList.add('hidden');
        }, 3000);
    });

    function handleFiles(files, dropZone) {
        const fileList = [...files]; // Convertir la colección de archivos a un array
        const fileNames = fileList.map(file => file.name).join(', '); // Obtener los nombres de los archivos

        if (fileList.length > 0) {
            dropZone.querySelector('p').textContent = fileNames; // Mostrar los nombres de los archivos
        } else {
            dropZone.querySelector('p').textContent = 'Arrastra y suelta tus archivos aquí o haz clic para seleccionarlos.';
        }
    }

    function validarArchivos(files) {
        const formatosPermitidos = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        for (const file of files) {
            if (!formatosPermitidos.includes(file.type)) {
                mensajeError.textContent = `El archivo ${file.name} no tiene un formato permitido. Por favor, selecciona archivos PDF o Word.`;
                mensajeError.classList.remove('hidden');
                setTimeout(() => {
                    mensajeError.classList.add('hidden');
                }, 3000);
                return false;
            }
            if (file.size > maxFileSize) {
                mensajeError.textContent = `El archivo ${file.name} supera el tamaño máximo permitido de 5MB.`;
                mensajeError.classList.remove('hidden');
                setTimeout(() => {
                    mensajeError.classList.add('hidden');
                }, 3000);
                return false;
            }
        }
        return true;
    }
});
