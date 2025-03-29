
// EFFET TITRE______________________________________________

document.addEventListener("DOMContentLoaded", function() {
  // Sélectionner tous les éléments avec la classe 'fade-in-title'
  const targets = document.querySelectorAll(".fade-in-title"); // Sélectionner tous les h2 avec la classe fade-in-title

  // Créer l'observateur
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Ajouter la classe 'animate' uniquement lorsque l'élément devient visible
              entry.target.classList.add("animate");
              observer.unobserve(entry.target); // Arrêter l'observation après l'activation de l'animation
          }
      });
  }, { threshold: 0.3 }); // Observer l'élément quand seulement 90% de la section est visible

  // Commencer à observer chaque élément
  targets.forEach(target => {
      observer.observe(target);
  });
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





  

