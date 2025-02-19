onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
document.addEventListener("DOMContentLoaded", function() {
  // Crear el elemento para el mensaje
  var message = document.createElement("div");
  message.classList.add("message");
  message.textContent = "Sol, Eres mi amor eterno, tu tan bella como estas flores, sin duda alguna 💕";
  
  // Agregar el elemento al final del body
  document.body.appendChild(message);
});
