document.getElementById("showRegister").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
});

document.getElementById("showLogin").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
});

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
    mensaje.textContent = "La contraseña debe tener al menos un carácter especial.";
    return;
  }

  // Guardar el nuevo usuario en localStorage
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Evitar duplicados
  const existe = usuarios.find(u => u.usuario === usuario);
  if (existe) {
    mensaje.textContent = "Ese nombre de usuario ya está registrado.";
    return;
  }

  usuarios.push({ usuario, correo, clave });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  mensaje.style.color = "green";
  mensaje.textContent = "Registro exitoso. Puedes iniciar sesión.";

  // Volver al login
  setTimeout(() => {
    document.getElementById("registerForm").reset();
    mensaje.textContent = "";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
  }, 2000);
});
