document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar si las credenciales son correctas
    if (username === 'e1351293327' && password === '12345') {
        // Redireccionar a la página de revisión
        window.location.href = 'revision.html';
    } else {
        alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
});
