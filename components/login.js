

let intentosRestantes = 3;

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const usuario = document.getElementById('usuario').value;
  const clave = document.getElementById('clave').value;
  const mensaje = document.getElementById('mensaje');

  if (usuario === 'admin' && clave === 'admin123') {
   
    window.location.href = 'html/index2.html';

 // Redirige al dashboard
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
