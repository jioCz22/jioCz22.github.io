 // Lista de mensajes románticos que aparecerán en burbujas
 const messages = [
     "Te amo muchísimo ❤️",
     "Gracias por estar en mi vida 🌟",
     "Eres La persona de mis sueños 💕",
     "Juntos por siempre 🥰",
     "Tú y yo, para siempre 💖",
     "Tu sonrisa me ilumina 💫",
     "Eres lo mejor que me ha pasado 😍",
     "Cada momento contigo es mágico ✨",
     "Siempre pienso en ti 💭",
     "Mi corazón es tuyo 💘",
     "Eres mi razón de exisitr 🥺"
 ];

 const videos = [
     "a2.mp4",
     "a3.mp4"
 ];
 const images = [
     "a1.jpeg"
 ];



 // Posicionamiento común
 function getRandomPosition() {
     return {
         left: Math.random() * 67 + 5 + "vw",
         top: Math.random() * 80 + 10 + "vh"
     };
 }

 // Crear burbuja de texto
 function createTextBubble() {
     const bubble = document.createElement("div");
     bubble.className = "bubble text-bubble";
     bubble.innerText = messages[Math.floor(Math.random() * messages.length)];
     const pos = getRandomPosition();
     bubble.style.left = pos.left;
     bubble.style.top = pos.top;

     document.getElementById("bubbles-text").appendChild(bubble);
     setTimeout(() => bubble.remove(), 8000);
 }

 // Crear burbuja de imagen
 function createImageBubble() {
     const bubble = document.createElement("div");
     bubble.className = "bubble image-bubble";

     const img = document.createElement("img");
     img.src = images[Math.floor(Math.random() * images.length)];

     bubble.appendChild(img);
     const pos = getRandomPosition();
     bubble.style.left = pos.left;
     bubble.style.top = pos.top;

     document.getElementById("bubbles-media").appendChild(bubble);
     setTimeout(() => bubble.remove(), 6000);
 }


 // Crear burbuja de video
 function createVideoBubble() {
     const bubble = document.createElement("div");
     bubble.className = "bubble video-bubble";

     const video = document.createElement("video");
     video.src = videos[Math.floor(Math.random() * videos.length)];
     video.autoplay = true;
     video.loop = true;
     video.muted = true;

     bubble.appendChild(video);
     const pos = getRandomPosition();
     bubble.style.left = pos.left;
     bubble.style.top = pos.top;

     document.getElementById("bubbles-media").appendChild(bubble);
     setTimeout(() => bubble.remove(), 6000);
 }

 // Lanzar burbujas en intervalos
 setInterval(createTextBubble, 800);
 setInterval(createImageBubble, 2500);
 setInterval(createVideoBubble, 4000);

 // Llamamos a la función createTextBubble cada 500 milisegundos (0.5 segundos)
 setInterval(createTextBubble, 500);


 // Función para reproducir el audio
 function reproducirSonido() {
     const audio = document.getElementById('sonido');
     audio.play();

     // Quitamos el event listener después de la primera reproducción
     document.removeEventListener('click', reproducirSonido);
 }

 // Esperamos a que el usuario haga clic en cualquier parte
 document.addEventListener('click', reproducirSonido);