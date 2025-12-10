// script.js

// Esperamos a que todo el contenido del DOM esté cargado
// (En este caso el script está al final del body, pero esto asegura
// que el código se ejecute cuando los elementos ya existen)
document.addEventListener('DOMContentLoaded', function () {
    // Referencias a los elementos del formulario y mensajes
    const form = document.getElementById('registrationForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('successMessage');

    /**
     * Limpia todos los mensajes de error y el mensaje de éxito.
     * Esto se hace al inicio de cada intento de envío del formulario
     * para no mezclar errores antiguos con los nuevos.
     */
    function clearMessages() {
        usernameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        successMessage.textContent = '';
    }

    /**
     * Muestra un mensaje de error en el div correspondiente
     * y se asegura de que el texto se vea en color rojo.
     * @param {HTMLElement} element - El div donde se mostrará el error.
     * @param {string} message - El mensaje de error a mostrar.
     */
    function showError(element, message) {
        element.textContent = message;
        element.style.color = 'red';
    }

    /**
     * Muestra el mensaje de éxito cuando todas las validaciones pasan.
     * @param {string} message - El mensaje de éxito a mostrar.
     */
    function showSuccess(message) {
        successMessage.textContent = message;
        successMessage.style.color = 'green';
    }

    /**
     * Función de validación del email usando una expresión regular sencilla.
     * No es perfecta, pero es suficiente para una validación básica.
     * @param {string} email
     * @returns {boolean} true si el email tiene un formato válido, false si no.
     */
    function isValidEmail(email) {
        // Expresión regular básica: algo@algo.algo
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    /**
     * Función para validar la contraseña con los requerimientos:
     * - Al menos 8 caracteres
     * - Al menos una letra mayúscula
     * - Al menos un número
     * @param {string} password
     * @returns {object} { isValid: boolean, error: string | null }
     */
    function validatePassword(password) {
        if (password.length < 8) {
            return {
                isValid: false,
                error: 'La contraseña debe tener al menos 8 caracteres.',
            };
        }

        // Al menos una mayúscula
        const hasUppercase = /[A-Z]/.test(password);

        // Al menos un número
        const hasNumber = /[0-9]/.test(password);

        if (!hasUppercase) {
            return {
                isValid: false,
                error: 'La contraseña debe contener al menos una letra mayúscula.',
            };
        }

        if (!hasNumber) {
            return {
                isValid: false,
                error: 'La contraseña debe contener al menos un número.',
            };
        }

        return { isValid: true, error: null };
    }

    // Agregamos el listener al evento submit del formulario
    form.addEventListener('submit', function (event) {
        // Prevenimos que el formulario recargue la página
        event.preventDefault();

        // Limpiamos mensajes anteriores
        clearMessages();

        // Obtenemos los valores actuales de los campos
        const usernameValue = usernameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value; // No usamos trim en contraseña por si el espacio fuera intencional

        // Variable bandera para saber si todo es válido
        let isFormValid = true;

        // --- Validación de nombre de usuario ---
        if (!usernameValue) {
            showError(usernameError, 'El nombre de usuario es obligatorio.');
            isFormValid = false;
        } else if (usernameValue.length < 5) {
            showError(
                usernameError,
                'El nombre de usuario debe tener al menos 5 caracteres.'
            );
            isFormValid = false;
        }

        // --- Validación de email ---
        if (!emailValue) {
            showError(emailError, 'El email es obligatorio.');
            isFormValid = false;
        } else if (!isValidEmail(emailValue)) {
            showError(emailError, 'Introduce un email con un formato válido.');
            isFormValid = false;
        }

        // --- Validación de contraseña ---
        if (!passwordValue) {
            showError(passwordError, 'La contraseña es obligatoria.');
            isFormValid = false;
        } else {
            const passwordCheck = validatePassword(passwordValue);
            if (!passwordCheck.isValid) {
                showError(passwordError, passwordCheck.error);
                isFormValid = false;
            }
        }

        // Si todo es válido, mostramos el mensaje de éxito y reseteamos el formulario
        if (isFormValid) {
            showSuccess('Registro exitoso. ¡Bienvenido!');
            form.reset();
        }
    });
});
