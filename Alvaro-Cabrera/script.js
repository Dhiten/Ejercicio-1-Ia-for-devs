// script.js
// Lógica de validación del formulario

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que el formulario se envíe y recargue la página

        // 1. Limpiar mensajes previos
        usernameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        successMessage.textContent = '';

        // 2. Obtener valores actuales de los campos
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        let isValid = true;

        // 3. Validación de Nombre de Usuario
        if (username.length === 0) {
            usernameError.textContent = 'El nombre de usuario es obligatorio.';
            isValid = false;
        } else if (username.length < 5) {
            usernameError.textContent = 'El nombre de usuario debe tener al menos 5 caracteres.';
            isValid = false;
        }

        // 4. Validación de Email
        // Expresión regular sugerida por la IA para validar formato de email básico.
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.length === 0) {
            emailError.textContent = 'El email es obligatorio.';
            isValid = false;
        } else if (!emailPattern.test(email)) {
            emailError.textContent = 'El formato de email no es válido.';
            isValid = false;
        }

        // 5. Validación de Contraseña
        if (password.length === 0) {
            passwordError.textContent = 'La contraseña es obligatoria.';
            isValid = false;
        } else if (password.length < 8) {
            passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres.';
            isValid = false;
        } else {
            const hasUppercase = /[A-Z]/.test(password);
            const hasNumber = /[0-9]/.test(password);

            if (!hasUppercase || !hasNumber) {
                passwordError.textContent = 'La contraseña debe contener al menos una letra mayúscula y un número.';
                isValid = false;
            }
        }

        // 6. Si todo es válido, mostrar éxito y limpiar formulario
        if (isValid) {
            successMessage.textContent = '¡Registro exitoso! El formulario se ha enviado correctamente.';
            form.reset();
        }
    });
});
