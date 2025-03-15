document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner les éléments
    const contactBtnHeader = document.getElementById('menu-item-9'); // ID du bouton "Contact" dans le header
    const modale = document.getElementById('modale'); // La modale de contact
    const photoReferenceField = document.querySelector('input[name="your-ref"]'); // Le champ caché pour la référence
  
    // Afficher la modale au clic sur "Contact" dans le header
    if (contactBtnHeader !== null) {
        contactBtnHeader.addEventListener('click', function(event) {
            event.preventDefault();  // Empêcher le comportement par défaut du lien
            modale.classList.add('visible'); // Ajouter la classe "visible" pour afficher la modale
  
            // Optionnel: Remplir le champ de référence avec une valeur par défaut si besoin
            if (photoReferenceField) {
                photoReferenceField.value = '';  // Vide la référence si tu veux qu'elle soit vide par défaut
            }
        });
    }
  
    // Fermer la modale si on clique en dehors de la boîte de dialogue (overlay)
    if (modale) {
        modale.addEventListener('click', function(event) {
            if (event.target === modale) {
                modale.classList.remove('visible'); // Fermer la modale
            }
        });
    }
  });
  
