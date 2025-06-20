document.getElementById('registroEvento').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío automático del formulario

  // Variables
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const intereses = document.querySelectorAll('input[name="intereses"]:checked');
  const horario = document.querySelector('input[name="horario"]:checked');
  const fecha = document.getElementById('fecha') ? document.getElementById('fecha').value : '';
  const hora = document.getElementById('hora') ? document.getElementById('hora').value : '';

  // Limpia mensajes previos
  if (mensajeError) mensajeError.textContent = "";

  // Validaciones básicas
  if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
    alert('Por favor, completa todos los campos obligatorios.');
    return;
  }

// Validación de nombre
  const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/;
if (!nombreRegex.test(nombre)) {
  alert('El nombre debe tener al menos 3 letras y solo puede contener letras y espacios.');
  return;
}

  // Validación de correo
  const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!correoRegex.test(correo)) {
    alert('Por favor, ingresa un correo electrónico válido.');
    return;
  }

  // Validación de teléfono
  if (!/^\d{10}$/.test(telefono)) {
    alert('El teléfono debe tener exactamente 10 dígitos numéricos.');
    return;
  }

  // Validación de intereses y horario (si existen en el formulario)
  if (intereses.length === 0 || !horario) {
    alert('Por favor, selecciona al menos un interés y un horario.');
    return;
  }

  // Validación de fecha y hora (si existen en el formulario)
  if (fecha && hora) {
    const fechaEvento = new Date(fecha + 'T' + hora);
    const ahora = new Date();
    ahora.setSeconds(0, 0);
    if (fechaEvento < ahora) {
      alert('La fecha y hora del evento no pueden ser en el pasado.');
      return;
    }
  }

  // Si todo está bien
  alert('Registro exitoso. ¡Gracias por registrarte!');
});