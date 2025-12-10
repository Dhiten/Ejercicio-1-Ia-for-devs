1. Primer prompt (Modo consultor, chain of thought): 

#Rol Actúa como un senior developer, enfocado en JavaScript

#Objetivo 
Ayuda al planeamiento de un proyecto personal a un desarrollador Junior que se encuentra explorando herramientas de IA

#Reglas 
- No uses librerías
- La planeación es con HTML, Javascript y CSS
- Da explicaciones claras y técnicas
- Las respuestas van dirigidas a desarrollador junior, debes dar el mayor contexto posible y de la forma más sencilla
- Planea el paso a paso para la resolución de cada problema
- Haz preguntas en lo que consideres necesario y corrige la logica o el razonamiento si no hace sentido
- No empieces a generar el plan detallado hasta que recibas la idea del proyecto. 
#Formato de respuesta
Da una lista de paso a paso de lo que se necesite para realizar el proyecto que quiere realizar el junior. Debes incluir prompts que serán utilizados por el desarrollador para la implementación  del proyecto. 

2. Segundo prompt (Step by step, plan and solve, meta prompting, APE):
Nombre de Usuario:
Obligatorio.
Debe tener al menos 5 caracteres.
Email:
Obligatorio.
Debe tener un formato de email válido (utiliza una expresión regular sugerida por la IA).
Contraseña:
Obligatoria.
Debe tener al menos 8 caracteres.
Debe contener una letra mayúscula y un número.
Requerimientos de Código:
El código de validación debe insertarse y ejecutarse en el archivo script.js.
Asegúrate de mostrar un mensaje de error claro en color rojo en el div de error correspondiente a cada campo si la validación falla.
Si la validación es exitosa, el formulario debe mostrar un mensaje de éxito (#successMessage) y limpiarse.

3. Tercer prompt(Step by step, plan and solve, meta prompting, APE): 

El proyecto a realizar es el siguiente, debe realizarse en javascript y html, se debe correr desde el archivo script.js: 
```
Nombre de Usuario:
Obligatorio.
Debe tener al menos 5 caracteres.
Email:
Obligatorio.
Debe tener un formato de email válido (utiliza una expresión regular sugerida por la IA).
Contraseña:
Obligatoria.
Debe tener al menos 8 caracteres.
Debe contener una letra mayúscula y un número.
Requerimientos de Código:
El código de validación debe insertarse y ejecutarse en el archivo script.js.
Asegúrate de mostrar un mensaje de error claro en color rojo en el div de error correspondiente a cada campo si la validación falla.
Si la validación es exitosa, el formulario debe mostrar un mensaje de éxito (#successMessage) y limpiarse.

´´´
Hasta ahora este es el código que tengo: 

#index.html
````
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Registro</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input[type="text"], input[type="email"], input[type="password"] {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        .error { color: red; font-size: 0.9em; margin-top: 5px; }
    </style>
</head>
<body>
    <h1>Registro de Usuario</h1>
    <form id="registrationForm">
        <div class="form-group">
            <label for="username">Nombre de Usuario:</label>
            <input type="text" id="username" name="username">
            <div id="usernameError" class="error"></div>
        </div>

        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
            <div id="emailError" class="error"></div>
        </div>

        <div class="form-group">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password">
            <div id="passwordError" class="error"></div>
        </div>

        <button type="submit">Registrar</button>
        <div id="successMessage" class="error" style="color: green;"></div>
    </form>

    <script src="script.js"></script>
</body>
</html>
´´´
#script.js

```
// Este archivo debe contener la lógica JavaScript para validar el formulario.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene el envío por defecto del formulario
        
        // **AQUÍ VA LA LÓGICA DE VALIDACIÓN GENERADA POR IA**
        
        // Ejemplo de lógica (debe ser reemplazada):
        // const isFormValid = validateForm();
        
        // if (isFormValid) {
        //     document.getElementById('successMessage').textContent = '¡Registro exitoso!';
        //     form.reset();
        // } else {
        //     document.getElementById('successMessage').textContent = 'Por favor, corrige los errores en el formulario.';
        // }
    });
});

// Implementa aquí las funciones de validación.
// function validateForm() {
//    // ...
// }
´´´
4. Cuarto prompt(APE, consultor, plan and solve): 

Eres un desarrollador senior en JavaScript. Estoy creando un formulario de registro simple usando solo HTML, CSS y JavaScript puro (sin librerías).

Tengo el siguiente archivo `index.html` con un formulario:

- Formulario con id `registrationForm`.
- Campo de texto para nombre de usuario con id `username` y un `div` de error con id `usernameError`.
- Campo de texto para email con id `email` y un `div` de error con id `emailError`.
- Campo de contraseña con id `password` y un `div` de error con id `passwordError`.
- Un `div` para mensaje de éxito con id `successMessage`.
- El archivo `script.js` está enlazado al final del `<body>`.

Requerimientos de validación:

- **Nombre de Usuario**:
  - Obligatorio.
  - Debe tener al menos 5 caracteres.
- **Email**:
  - Obligatorio.
  - Debe tener un formato válido de email.
  - Usa una expresión regular sencilla para validarlo (no tiene que ser perfecta, solo razonable).
- **Contraseña**:
  - Obligatoria.
  - Debe tener al menos 8 caracteres.
  - Debe contener al menos una letra mayúscula y al menos un número.

Requerimientos de código:

- Todo el código de validación debe estar en el archivo `script.js`.
- Debes:
  - Escuchar el evento `submit` del formulario `registrationForm`.
  - Prevenir el comportamiento por defecto del formulario con `event.preventDefault()`.
  - Leer los valores de `username`, `email` y `password`.
  - Limpiar los mensajes de error y el mensaje de éxito antes de cada validación.
  - Mostrar mensajes de error claros en color rojo en los `div` de error correspondientes a cada campo cuando la validación falle.
  - Si todas las validaciones son correctas, mostrar un mensaje en `#successMessage` indicando que el registro fue exitoso y limpiar el formulario con `form.reset()`.

Instrucciones de salida:

- Devuélveme el contenido completo del archivo `script.js`.
- Usa solo JavaScript puro (sin librerías).
- Incluye comentarios en el código explicando cada bloque para que un desarrollador junior pueda entenderlo.
5. Quinto prompt (zero-shot): 
El codigo está perfecto, pero para validar el email no está rellenando el error en el div correspondiente, asegurate de que muestre el error correctamente