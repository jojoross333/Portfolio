// MODALE DE CONTACT ________________________________________

document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner les éléments
    const contactBtnHeader = document.getElementById('menu-item-9'); // ID du bouton "Contact" dans le header
    const emailLink = document.getElementById('email-link'); // Lien de l'email dans le header
    const footerContactLink = document.querySelector(".menu-link"); // Lien "Contact" du footer
    const modale = document.getElementById('modale'); // La modale de contact
    const closeButton = document.getElementById('close-btn'); // Le bouton de fermeture
  
    // Afficher la modale au clic sur "Contact" dans le header
    if (contactBtnHeader !== null) {
        contactBtnHeader.addEventListener('click', function(event) {
            event.preventDefault();  // Empêcher le comportement par défaut du lien
            modale.classList.add('visible'); // Ajouter la classe "visible" pour afficher la modale
        });
    }
    
    // Ouvrir la modale au clic sur l'icône email
    if (emailLink !== null) {
        emailLink.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche l'action par défaut du lien
            modale.classList.add('visible'); // Ouvre la modale de contact
        });
    }

    // Ouvrir la modale au clic sur le lien "Contact" du footer
    if (footerContactLink !== null) {
        footerContactLink.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche l'action par défaut du lien
            modale.classList.add('visible'); // Ouvre la modale de contact
        });
    }

    // Fermer la modale lorsqu'on clique sur le bouton de fermeture
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            modale.classList.remove('visible'); // Fermer la modale
        });
    }
});


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

// LE CUBE ______________________________________________________

let isMouseDown = false;
let startX, startY, rotationX = 0, rotationY = 0;
const cube = document.querySelector('.cube');
const cubeContainer = document.querySelector('.cube-container');

// Vérifie la taille de l'écran et applique le comportement
if (window.innerWidth > 768) { // Si l'écran est plus grand que 768px (pas en responsive)
    // Lorsque la souris entre dans le cube, on arrête l'animation
    cubeContainer.addEventListener('mouseenter', () => {
        cube.style.animation = 'none'; // Désactive l'animation
    });

    // Lorsque la souris quitte le cube, on relance l'animation
    cubeContainer.addEventListener('mouseleave', () => {
        cube.style.animation = 'rotateCube 10s infinite linear'; // Réactive l'animation
    });

    // Commence à manipuler le cube avec la souris
    cube.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        startX = e.clientX;
        startY = e.clientY;
    });

    // Déplace le cube avec la souris
    cube.addEventListener('mousemove', (e) => {
        if (isMouseDown) {
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            rotationX += deltaY * 0.5;
            rotationY -= deltaX * 0.5;
            cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
            startX = e.clientX;
            startY = e.clientY;
        }
    });

    // Arrête la manipulation du cube lorsque la souris est relâchée
    cube.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    // Permet à l'utilisateur de manipuler le cube sur mobile
    cube.addEventListener('touchstart', (e) => {
        isMouseDown = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        cube.style.animation = 'none'; // Désactive l'animation
    });

    cube.addEventListener('touchmove', (e) => {
        if (isMouseDown) {
            const deltaX = e.touches[0].clientX - startX;
            const deltaY = e.touches[0].clientY - startY;
            rotationX += deltaY * 0.5;
            rotationY -= deltaX * 0.5;
            cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }
    });

    cube.addEventListener('touchend', () => {
        isMouseDown = false;
        cube.style.animation = 'rotateCube 10s infinite linear'; // Réactive l'animation
    });
}
