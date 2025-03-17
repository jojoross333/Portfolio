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