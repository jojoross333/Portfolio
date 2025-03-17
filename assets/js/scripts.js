
// EFFET A PROPOS______________________________________________

document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner l'élément "À propos de moi" (h2 avec la classe .a-propos)
    const target = document.querySelector(".a-propos"); // Sélectionner le h2 avec la classe .a-propos

    // Créer l'observateur
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ajouter la classe 'animate' uniquement lorsque l'élément devient visible
                entry.target.classList.add("animate");
                observer.unobserve(entry.target); // Arrêter l'observation après l'activation de l'animation
            }
        });
    }, { threshold: 0.9 }); // Observer l'élément quand seulement 10% de la section est visible

    // Commencer à observer l'élément
    observer.observe(target);
});


// FLECHE RETOUR HAUT DE PAGE 

window.onscroll = function() {
    const scrollToTopButton = document.getElementById("scroll-to-top");
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;
  
    // Affiche la flèche lorsque l'utilisateur est à 75% du bas de la page
    if (scrollPosition > totalHeight * 0.75) {
      scrollToTopButton.style.display = "block"; // Affiche la flèche
    } else {
      scrollToTopButton.style.display = "none"; // Cache la flèche
    }
  };





  

