// Modal
function mostrarModal() {
  document.getElementById('modal').style.display = 'flex';
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}

// Formulario
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const mensaje = document.getElementById("mensajeFormulario");
  mensaje.textContent = "✅ Mensaje enviado correctamente. ¡Gracias por contactar!";
  mensaje.style.color = "#00ffcc";
  this.reset();
});

// Secciones
function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(sec => sec.classList.remove('visible'));

  const target = document.getElementById(id);
  if (target) {
    target.classList.add('visible');
  }
}
// Botón para cerrar sesión
document.getElementById("cerrarSesion").addEventListener("click", function () {
  window.location.href = "/comentarios-app/html/index.html"; 
});