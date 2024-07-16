document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('avatar');
    const avatarPreview = document.getElementById('avatar-preview');
    const errorMessage = document.getElementById('error-avatar');
    const successMessage = document.getElementById('success-message');
    const form = document.querySelector('form');
    
    // Función para guardar los datos del formulario en localStorage
    function saveFormData() {
        const formData = {
            name: document.getElementById('name').value,
            birthdate: document.getElementById('birthdate').value,
            gender: document.getElementById('gender').value,
            address: document.getElementById('address').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            idDocument: document.getElementById('id-document').value,
            nationality: document.getElementById('nationality').value
        };
        localStorage.setItem('formData', JSON.stringify(formData));
    }

    // Función para cargar los datos del formulario desde localStorage
    function loadFormData() {
        const savedFormData = JSON.parse(localStorage.getItem('formData'));
        if (savedFormData) {
            document.getElementById('name').value = savedFormData.name;
            document.getElementById('birthdate').value = savedFormData.birthdate;
            document.getElementById('gender').value = savedFormData.gender;
            document.getElementById('address').value = savedFormData.address;
            document.getElementById('phone').value = savedFormData.phone;
            document.getElementById('email').value = savedFormData.email;
            document.getElementById('id-document').value = savedFormData.idDocument;
            document.getElementById('nationality').value = savedFormData.nationality;
        }
    }

    // Función para guardar la imagen en localStorage
    function saveAvatarToLocalStorage(imageData) {
        localStorage.setItem('avatarImage', imageData);
    }

    // Función para cargar la imagen desde localStorage
    function loadAvatarFromLocalStorage() {
        const savedImage = localStorage.getItem('avatarImage');
        if (savedImage) {
            avatarPreview.src = savedImage;
            avatarPreview.classList.remove('hidden');
        }
    }

    // Cargar los datos guardados al cargar la página
    loadFormData();
    loadAvatarFromLocalStorage();

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Guardar los datos del formulario en localStorage
        saveFormData();

        // Guardar la imagen en localStorage
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                saveAvatarToLocalStorage(e.target.result);
            };
            reader.readAsDataURL(file);
        }

        // Mostrar el mensaje de éxito
        successMessage.classList.remove('hidden');

        // Ocultar el mensaje después de 3 segundos (3000 milisegundos)
        setTimeout(function() {
            successMessage.classList.add('hidden');
        }, 3000);
    });

    fileInput.addEventListener('change', function() {
        const file = fileInput.files[0];
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];

        if (file && allowedTypes.includes(file.type)) {
            const reader = new FileReader();
            reader.onload = function(e) {
                avatarPreview.src = e.target.result;
                avatarPreview.classList.remove('hidden');
                errorMessage.classList.add('hidden');
            };
            reader.readAsDataURL(file);
        } else {
            errorMessage.textContent = 'Solo se admiten archivos JPG o PNG.';
            fileInput.value = ''; // Limpiar el campo de carga
            avatarPreview.classList.add('hidden');
            errorMessage.classList.remove('hidden');
        }
    });
});
