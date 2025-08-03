   const cookieRain = document.getElementById("cookie-rain");

    function createCookie() {
      const img = document.createElement("img");
      img.src = "/imagenes/galleta2.png"; 
      img.classList.add("cookie");

      img.style.left = Math.random() * 100 + "vw";
      img.style.animationDuration = (2 + Math.random() * 3) + "s";

      cookieRain.appendChild(img);

      setTimeout(() => {
        img.remove();
      }, 6000);
    }

    setInterval(createCookie, 200);
  

setInterval(crearGalleta, 300);
