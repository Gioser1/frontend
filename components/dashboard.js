function mostrarModal() {
  document.getElementById('modal').style.display = 'block';
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const mensaje = document.getElementById("mensajeFormulario");
  mensaje.textContent = "✅ Mensaje enviado correctamente. ¡Gracias por contactar!";
  mensaje.style.color = "#00ffcc";
  this.reset();
});

