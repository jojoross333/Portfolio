<section id="projets">
    <h3>Mes Projets</h3> <!-- Titre en haut -->
    <div class="projets-grid">
        <?php
        // La requête pour récupérer les projets
        $args = array(
            'post_type' => 'projet', // Ton Custom Post Type
            'posts_per_page' => -1,  // Afficher tous les projets
        );
        $projets = new WP_Query( $args );

        if ( $projets->have_posts() ) :
            while ( $projets->have_posts() ) : $projets->the_post();
                ?>
                <div class="projet">
                    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2> <!-- Lien vers la page du projet -->
                    <div class="projet-thumbnail">
                        <?php the_post_thumbnail('medium'); ?> <!-- Affiche l'image mise en avant du projet -->
                    </div>
                    <div class="projet-contenu">
                        <?php the_excerpt(); ?> <!-- Extrait du contenu du projet -->
                    </div>
                </div>
                <?php
            endwhile;
            wp_reset_postdata(); // Réinitialise les données de la requête
        else :
            echo '<p>Aucun projet trouvé.</p>';
        endif;
        ?>
    </div>
</section>


