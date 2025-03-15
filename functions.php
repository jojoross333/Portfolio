<?php
/**
 * Porfolio functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Porfolio
 */

 function porfolio_scripts() {
    // Chargement du thème
    wp_enqueue_style('porfolio-style', get_template_directory_uri() . '/assets/css/theme.css', array(), 1.1);
    //chargement de scripts.js
    wp_enqueue_script('fade-in-text', get_template_directory_uri() . '/assets/js/scripts.js', array(), null, true);
    
}

// j'enregistre le menu personnalisé 
add_action('wp_enqueue_scripts', 'porfolio_scripts');

function porfolio_register_menus() {
    // Enregistrement du menu 
    register_nav_menus(
        array(
            'header' => __( 'Menu du Header' ),
            'footer' => __( 'Menu du Footer' ),
        )
    );
}
add_action( 'after_setup_theme', 'porfolio_register_menus' );

function my_custom_post_type() {
    $args = array(
        'labels' => array(
            'name' => 'Projets',
            'singular_name' => 'Projet',
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail'), // Ajoute 'thumbnail' ici pour activer l'image à la une
    );
    register_post_type('projet', $args);
}
add_action('init', 'my_custom_post_type');
