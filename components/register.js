// Mostrar el formulario de registro y ocultar el login
document.getElementById("showRegister").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
});

// Mostrar el login desde el formulario de registro
document.getElementById("showLogin").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
});

// Validar y procesar registro
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const usuario = document.getElementById("nuevoUsuario").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const clave = document.getElementById("nuevaClave").value.trim();
  const mensaje = document.getElementById("mensajeRegistro");

  const contieneEspecial = /[^A-Za-z0-9]/.test(clave);

  if (!correo.includes("@")) {
    mensaje.textContent = "El correo debe contener un '@'.";
    return;
  }

  if (!contieneEspecial) {
    mensaje.textContent = "La contraseña debe contener al menos un carácter especial.";
    return;
  }

  // Aquí iría la lógica para guardar el usuario, si usas base de datos
  mensaje.style.color = "green";
  mensaje.textContent = "Usuario registrado con éxito. Ahora inicia sesión.";

  // Regresar al login
  setTimeout(() => {
    document.getElementById("registerForm").reset();
    mensaje.textContent = "";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
  }, 2000);
});
