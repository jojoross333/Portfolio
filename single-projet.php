<?php get_header(); ?>

<section class="single-projet">
    <div class="projet-header">
        <h1><?php the_title(); ?></h1> <!-- Affiche le titre du projet -->
        <div class="projet-image">
            <?php the_post_thumbnail('large'); ?> <!-- Affiche l'image mise en avant du projet -->
        </div>
    </div>

    <!-- Contexte du projet -->
    <div class="projet-contexte">
        <h2>Contexte</h2>
        <p><strong>Nom du projet :</strong> <?php the_title(); ?></p>
        <p><strong>Description :</strong> <?php the_excerpt(); ?></p>
        <p><strong>Fichiers sources :</strong> Wireframes, spécifications fonctionnelles, etc.</p>
    </div>

    <!-- Spécificités du projet -->
    <div class="projet-specifications">
        <h2>Spécificités</h2>
        <p><?php the_field('specificites'); // Si tu as des champs personnalisés ou des infos supplémentaires ?></p>
    </div>

    <!-- Mes ajouts personnels -->
    <div class="projet-ajouts">
        <h2>Mes ajouts aux attendus</h2>
        <ul>
            <li>Création d’une galerie en visionneuse</li>
            <li>Ajout d’un effet hover sur le logo SVG</li>
            <li>Optimisation SEO</li>
            <li>Création d’une page 404 personnalisée</li>
        </ul>
    </div>

    <!-- Technologies utilisées -->
    <div class="projet-technologies">
        <h2>Composantes et Technologies</h2>
        <p><strong>Plateforme utilisée :</strong> WordPress avec le thème <strong>OcéanWP</strong></p>
        <p><strong>Langages abordés :</strong> CSS3, Nocode (gestion de contenu avec des plugins WordPress)</p>
    </div>

    <!-- Objectifs et Résultats -->
    <div class="projet-objectifs">
        <h2>Objectifs et Résultats</h2>
        <p>Le projet a permis de créer un site fonctionnel et optimisé pour la visibilité sur les moteurs de recherche.</p>
    </div>

    <div class="projet-footer">
        <!-- Ajouter des informations supplémentaires si nécessaire -->
    </div>
</section>

<?php get_footer(); ?>

