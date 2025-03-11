// EFFET DU TITRE PORFOLIO 

document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".fade-in-title");
    const words = title.innerText.split(" "); // Sépare chaque mot
    title.innerHTML = ""; // Vide le texte pour insérer des spans
    
    words.forEach((word, index) => {
        let span = document.createElement("span");
        span.innerText = word + " "; // Ajoute un espace après chaque mot
        span.style.opacity = "0";
        span.style.animation = `fadeIn 1s ease-out forwards`;
        span.style.animationDelay = `${index * 0.3}s`; // Décalage progressif
        title.appendChild(span);
    });
});

// EFFET POUR L'IMAGE QUI SCROLL (van) 

document.addEventListener("DOMContentLoaded", function () {
    let van = document.querySelector(".hero-img");

    let startScroll = 0; // À quel moment du scroll le mouvement commence
    let maxScroll = 800; // Distance pour atteindre la position finale (réduite pour un effet plus rapide)
    let maxTranslate = 40; // Distance maximale du déplacement en vw
    
    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;

        // Commence le mouvement dès que l'utilisateur scrolle
        let adjustedScrollY = Math.max(scrollY - startScroll, 0); 
        let scrollProgress = Math.min(adjustedScrollY / maxScroll, 1); // Valeur entre 0 et 1
        let easedProgress = Math.pow(scrollProgress, 2.8); // Courbe fluide
        let moveX = easedProgress * maxTranslate; // Déplacement progressif

        // Appliquer le mouvement dès le début du scroll
        van.style.transform = `translateX(${moveX}vw) rotate(${easedProgress * 3}deg)`;
    });
});



