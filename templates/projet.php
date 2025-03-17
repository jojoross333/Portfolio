<section id="projets">
    <h3>Mes projets réalisés</h3>
    <div class="projets-grid">
        <?php
        $args = array(
            'post_type' => 'projet',
            'posts_per_page' => -1,  
        );
        $projets = new WP_Query( $args );

        if ( $projets->have_posts() ) :
            while ( $projets->have_posts() ) : $projets->the_post();
                $description = get_field('description'); // Description du projet
                $github = get_field('github'); // Lien GitHub
                $contexte = get_field('contexte'); // Champ personnalisé "Contexte"
                ?>
                <div class="projet">
                    <h2><?php the_title(); ?></h2>
                    <div class="projet-thumbnail">
                        <?php the_post_thumbnail('large'); ?>
                    </div>
                    <div class="projet-overlay">
                        <a href="#" class="btn-en-savoir-plus" data-description="<?php echo esc_attr($description); ?>" data-contexte="<?php echo esc_attr($contexte); ?>" data-github="<?php echo esc_url($github); ?>">En savoir plus</a>
                        <a href="<?php echo esc_url($github); ?>" target="_blank" class="btn-github">GitHub</a>
                    </div>
                </div>
                <?php
            endwhile;
            wp_reset_postdata();
        endif;
        ?>
    </div>
</section>


<!-- Template part pour la lightbox -->
<?php get_template_part('template-parts/lightbox'); ?>




