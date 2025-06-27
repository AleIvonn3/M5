Objetivos
Con este proyecto esperamos que puedas:

1. Practicar el uso de Zod para validar datos de un formulario.
2. Implementar validación en tiempo real para mejorar la experiencia del usuario.
3. Comprender cómo manejar errores de validación y mostrar mensajes amigables.
   Validación de un Formulario de Registro con Zod
   Crearás un formulario de registro que solicite al usuario su **nombre**, **correo electrónico**, y **contraseña**. Los datos ingresados deben validarse utilizando la biblioteca **Zod** antes de enviarlos al servidor. El formulario debe mostrar mensajes de error claros si los datos no son válidos.

Instrucciones para resolver el problema: 0. Te proporcionamos un código base para poder resolver este proyecto. Lo puedes consultar en el siguiente enlace: https://gist.github.com/heladio-devf-mx/d346481f3833ae89d9c1628832438578.

1. Con base en el código que te proporcionamos, crea un archivo HTML con un formulario simple que contenga los campos: Nombre (texto), Correo electrónico, Contraseña, Un botón para enviar el formulario.
2. Implementa un archivo JavaScript con base en el código proporcionado donde: - Definas un esquema de validación con Zod. - Valides los datos ingresados al enviar el formulario. - Muestres mensajes de error claros si la validación falla.
3. Completa las partes de código que contienen pistas para la solución del problema.
4. Experimenta con distintos escenarios y asegúrate de que funcione como se solicita.

Se proporciona un código base para poder resolver este proyecto.

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Validación con Zod</title>
  <script src="https://cdn.jsdelivr.net/npm/zod@3.21.4/lib/index.umd.min.js"></script>
</head>
<body>
  <h1>Registro de Usuario</h1>
  <form id="registerForm">
    <label for="name">Nombre:</label>
    <input type="text" id="name" placeholder="Tu nombre" required /><br />

    <label for="email">Correo Electrónico:</label>
    <input type="email" id="email" placeholder="Tu correo" required /><br />

    <label for="password">Contraseña:</label>
    <input type="password" id="password" placeholder="Contraseña" required /><br />

    <button type="submit">Registrar</button>

  </form>

  <p id="errors" style="color: red;"></p>

  <script>
    // Importamos Zod
    const { z } = window.Zod;

    // Esquema para validar los datos del formulario
    const registerSchema = z.object({
      // PISTA: Define que el nombre debe ser una cadena no vacía.

      // PISTA: Valida que el correo tenga el formato correcto.

      // PISTA: La contraseña debe tener al menos 6 caracteres.

    });

    document.getElementById("registerForm").addEventListener("submit", (event) => {
      event.preventDefault();
      
      // Capturamos los valores ingresados
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      };

      try {
        // PISTA: Usa el método correcto de Zod para validar el esquema.
        //registerSchema.___?___(formData);
        alert("¡Registro exitoso!");
      } catch (error) {
        // PISTA: Muestra los mensajes de error en la página.
        document.getElementById("errors").textContent = error.errors.map(e => e.message).join(", ");
      }
    });
  </script>
</body>
</html>
