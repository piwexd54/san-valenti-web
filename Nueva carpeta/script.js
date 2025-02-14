document.getElementById("continuar").addEventListener("click", function() {
    document.getElementById("mensajeInicial").style.display = "none";
    document.getElementById("pregunta").style.display = "block";
});

document.getElementById("yes").addEventListener("click", function() {
    let responseDiv = document.getElementById("response");
    responseDiv.innerHTML = `
        <h3>¡Yay! ❤️ ¡Eres mi San Valentín! 🎉💖</h3>
        <p>Te amo amo amo amo amo amo amo , mi linda princesita bella , mi corazon. 💘</p>
        <p>Te amo con toda mi alma y no puedo esperar a compartir mi vida contigo. ✨</p>
        
        <!-- Contenedor de imágenes -->
        <div class="imagenes-container">
            <img src="imagen1.jpg" alt="Imagen 1" class="imagen-romantica">
            <img src="imagen2.jpg" alt="Imagen 2" class="imagen-romantica">
            <img src="imagen3.jpg" alt="Imagen 3" class="imagen-romantica">
        </div>
    `;

    // Agregar corazones flotantes
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
});

document.getElementById("no").addEventListener("click", function() {
    document.getElementById("response").innerHTML = "😭 MALA. 💔";
});
