<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Porfolio
 */

?>

<?php get_header(); ?>   <!-- le header -->

<section id="hero">
    <?php get_template_part('/templates/hero'); ?>    <!-- l'entête hero image -->
</section>

<section id="about">
    <?php get_template_part('/templates/about-me'); ?>    <!-- l'entête hero image -->
</section>

<section id="competence">
    <?php get_template_part('templates/competence'); ?>
</section>

<section id="projets">
    <?php get_template_part('templates/projet'); ?>
</section>
<!-- Flèche de retour en haut -->
<a href="#top" id="scroll-to-top" class="scroll-to-top">
  <i class="fas fa-arrow-up"></i> <!-- Icone de la flèche (Font Awesome) -->
</a>

<?php get_footer(); ?>
