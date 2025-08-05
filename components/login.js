let intentosRestantes = 3;

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const usuario = document.getElementById('usuario').value.trim();
  const clave = document.getElementById('clave').value.trim();
  const mensaje = document.getElementById('mensaje');

  // Verificar contra usuario por defecto
  if (usuario === 'admin' && clave === 'admin123') {
    window.location.href = '../html/index2.html';
    return;
  }

  // Verificar contra usuarios registrados
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const encontrado = usuarios.find(u => u.usuario === usuario && u.clave === clave);

  if (encontrado) {
    window.location.href = '../html/index2.html';
  } else {
    intentosRestantes--;
    if (intentosRestantes > 0) {
      mensaje.textContent = `Credenciales incorrectas. Intentos restantes: ${intentosRestantes}`;
    } else {
      mensaje.textContent = 'Demasiados intentos fallidos. Acceso bloqueado.';
      document.getElementById('usuario').disabled = true;
      document.getElementById('clave').disabled = true;
      e.target.querySelector('button[type="submit"]').disabled = true;
    }
  }
});
