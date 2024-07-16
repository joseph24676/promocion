//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

//FUNCIONES

function anchoPage(){
    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();

function iniciarSesion(){
    if (window.innerWidth > 850){
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    }else{
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

function register(){
    if (window.innerWidth > 850){
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    }else{
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}

// Validar nombre en tiempo real
document.getElementById('register_name').addEventListener('input', function() {
    const name = this.value;
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        document.getElementById('name_error').innerText = 'Solo se permiten letras';
        document.getElementById('name_error').style.display = 'block';
        this.classList.add('input_error');
    } else {
        document.getElementById('name_error').style.display = 'none';
        this.classList.remove('input_error');
    }
});

// Validar correo en tiempo real
document.getElementById('register_email').addEventListener('input', function() {
    const email = this.value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('email_error').innerText = 'Se necesita usar "@" y ".com"';
        document.getElementById('email_error').style.display = 'block';
        this.classList.add('input_error');
    } else {
        document.getElementById('email_error').style.display = 'none';
        this.classList.remove('input_error');
    }
});

// Validar cédula en tiempo real
document.getElementById('register_username').addEventListener('input', function() {
    const cedula = this.value;
    if (!/^\d+$/.test(cedula)) {
        document.getElementById('cedula_error').innerText = 'Solo se permiten números';
        document.getElementById('cedula_error').style.display = 'block';
        this.classList.add('input_error');
    } else {
        document.getElementById('cedula_error').style.display = 'none';
        this.classList.remove('input_error');
    }
});

// Verificar fortaleza de la contraseña en tiempo real
document.getElementById('register_password').addEventListener('input', function() {
    const password = this.value;
    const strengthContainer = document.getElementById('password_strength_container');
    const strengthBar = document.getElementById('password_strength');

    let strength = 0;
    if (password.length >= 10) {
        strength = 100;
        strengthBar.style.backgroundColor = 'green';
    } else if (password.length >= 6) {
        strength = 60;
        strengthBar.style.backgroundColor = 'yellow';
    } else if (password.length >= 4) {
        strength = 30;
        strengthBar.style.backgroundColor = 'red';
    } else {
        strength = 10;
        strengthBar.style.backgroundColor = 'red';
    }

    strengthBar.style.width = strength + '%';
});

// Validar confirmación de la contraseña en tiempo real
document.getElementById('confirm_password').addEventListener('input', function() {
    const password = document.getElementById('register_password').value;
    const confirmPassword = this.value;
    if (password !== confirmPassword) {
        document.getElementById('confirm_password_error').innerText = 'Las contraseñas no coinciden';
        document.getElementById('confirm_password_error').style.display = 'block';
        this.classList.add('input_error');
    } else {
        document.getElementById('confirm_password_error').style.display = 'none';
        this.classList.remove('input_error');
    }
});

// Función para registrar un usuario
function registerUser() {
    const name = document.getElementById('register_name').value;
    const email = document.getElementById('register_email').value;
    const cedula = document.getElementById('register_username').value;
    const password = document.getElementById('register_password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    let valid = true;

    // Validar nombre
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        document.getElementById('name_error').innerText = 'Solo se permiten letras';
        document.getElementById('name_error').style.display = 'block';
        document.getElementById('register_name').classList.add('input_error');
        valid = false;
    } else {
        document.getElementById('name_error').style.display = 'none';
        document.getElementById('register_name').classList.remove('input_error');
    }

    // Validar correo electrónico
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('email_error').innerText = 'Se necesita usar "@" y ".com"';
        document.getElementById('email_error').style.display = 'block';
        document.getElementById('register_email').classList.add('input_error');
        valid = false;
    } else {
        document.getElementById('email_error').style.display = 'none';
        document.getElementById('register_email').classList.remove('input_error');
    }

    // Validar cédula
    if (!/^\d+$/.test(cedula)) {
        document.getElementById('cedula_error').innerText = 'Solo se permiten números';
        document.getElementById('cedula_error').style.display = 'block';
        document.getElementById('register_username').classList.add('input_error');
        valid = false;
    } else {
        document.getElementById('cedula_error').style.display = 'none';
        document.getElementById('register_username').classList.remove('input_error');
    }

    // Validar contraseña
    const strengthBar = document.getElementById('password_strength');
    if (strengthBar.style.width === '10%' || strengthBar.style.width === '30%') {
        alert('Contraseña demasiado débil');
        valid = false;
    }

    // Validar confirmación de la contraseña
    if (password !== confirmPassword) {
        document.getElementById('confirm_password_error').innerText = 'Las contraseñas no coinciden';
        document.getElementById('confirm_password_error').style.display = 'block';
        document.getElementById('confirm_password').classList.add('input_error');
        valid = false;
    } else {
        document.getElementById('confirm_password_error').style.display = 'none';
        document.getElementById('confirm_password').classList.remove('input_error');
    }

    if (valid && name && email && cedula && password && confirmPassword) {
        localStorage.setItem('user', JSON.stringify({ name, email, cedula, password }));
        alert('Registro exitoso');
        iniciarSesion();
    } else if (!valid) {
        alert('Por favor, corrija los campos en rojo');
    } else {
        alert('Por favor, complete todos los campos');
    }
}

// Función para iniciar sesión
function login() {
    const email = document.getElementById('login_email').value;
    const password = document.getElementById('login_password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Inicio de sesión exitoso');
        window.location.href = 'tablero.html';
    } else {
        alert('Correo o contraseña incorrectos');
    }
}
