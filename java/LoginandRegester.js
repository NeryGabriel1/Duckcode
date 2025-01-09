const signInBtn = document.getElementById('sign-in');
const signUpBtn = document.getElementById('sign-up');
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');

// Control de visibilidad de formularios
signInBtn.addEventListener('click', () => {
    registerForm.classList.add('hide');
    registerForm.classList.remove('show');
    loginForm.classList.add('show');
    loginForm.classList.remove('hide');
});

signUpBtn.addEventListener('click', () => {
    loginForm.classList.add('hide');
    loginForm.classList.remove('show');
    registerForm.classList.add('show');
    registerForm.classList.remove('hide');
});

// Validación e Inicio de Sesión
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userEmail = loginForm.querySelector('input[name="userEmail"]').value;
    const userPassword = loginForm.querySelector('input[name="userPassword"]').value;

    if (userEmail.trim() === "" || userPassword.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    alert("Inicio de sesión exitoso");
    window.location.href = "Home.html"; // Redirección al home
});

// Validación y Registro con redirección al Login
registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userName = registerForm.querySelector('input[name="userName"]').value;
    const userEmail = registerForm.querySelector('input[name="userEmail"]').value;
    const userPassword = registerForm.querySelector('input[name="userPassword"]').value;

    if (userName.trim() === "" || userEmail.trim() === "" || userPassword.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    
    // Redirige automáticamente al formulario de inicio de sesión
    registerForm.classList.add('hide');
    registerForm.classList.remove('show');
    loginForm.classList.add('show');
    loginForm.classList.remove('hide');
});
