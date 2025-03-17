// CODE POUR LE BURGER EN RESPONSIVE___________________________________

//on récupére le HTML des class  (const-constant on applique)
document.addEventListener("DOMContentLoaded", function () { //execute code si html chargé
    const burger = document.querySelector(".burger-menu"); // Menu burger
    const navMenu = document.querySelector(".main-nav");  // Menu principal
    const navLinks = document.querySelectorAll(".main-nav a");  // Liens du menu
  
    // Écouteur d'événement pour le clic sur le burger
    burger.addEventListener("click", function () {
      // Toggle de la classe active sur le burger et le menu
      burger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  
    // Écouteur d'événement pour les liens du menu
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        // Ferme le menu en cliquant sur un lien
        burger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  });