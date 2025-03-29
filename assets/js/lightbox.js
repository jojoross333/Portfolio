//code js LIGHTBOX DONNÉES

jQuery(document).ready(function($) {
    // Ouvrir la lightbox au clic sur "En savoir plus"
    $('.btn-en-savoir-plus').on('click', function(e) {
        e.preventDefault(); // Empêche le comportement par défaut du lien

        var description = $(this).data('description'); // Récupère la description du projet
        var github = $(this).data('github'); // Récupère le lien GitHub
        var contexte = $(this).data('contexte'); // Récupère le contexte du projet
        var siteWeb = $(this).data('site-web'); // Récupère le lien site-web

        // Mettre à jour le contenu de la lightbox avec la description, le contexte et le lien
        $('#lightbox-description').text(description);
        $('#lightbox-contexte').text(contexte);
        $('#lightbox-github-link').attr('href', github);
        $('#lightbox-site-link').attr('href', siteWeb); // Ajout du lien site web dans la lightbox

        // Afficher la lightbox
        $('#lightbox').fadeIn();
    });

    // Fermer la lightbox
    $('.close').on('click', function() {
        $('#lightbox').fadeOut();
    });

    // Fermer la lightbox en cliquant en dehors de celle-ci
    $('#lightbox').on('click', function(e) {
        if ($(e.target).is('#lightbox')) {
            $(this).fadeOut();
        }
    });
});
