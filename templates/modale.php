<!-- Modale de contact -->
<div id="modale" class="popup-overlay">
    <div class="popup-contact">
        <div class="popup-header">
            <button id="close-btn" class="close-btn">×</button>
            <img class="popup-img" src="<?php echo get_theme_file_uri("/assets/img/blogo-jo.png"); ?>" alt="Contact Image">
        </div>
        <div class="popup-details">
            <!-- Formulaire de contact -->
            <?php echo do_shortcode('[contact-form-7 id="53ba9e5" title="Contact form 1"]'); ?>
        </div>
    </div>
</div>
