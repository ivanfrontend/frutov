<?php
add_action('after_setup_theme', function(){
	register_nav_menus( array(
		'primary' => 'Меню в шапке',
		'primary_catalog' => 'Меню в шапке (КАТАЛОГ)',
		'primary_footer' => 'Меню в подвале',
		'primary_footer_catalog' => 'Меню в подвале (КАТАЛОГ)',
	) );
});



function wp_nav_menu_no_ul() {
  $options = array(
     'echo' => false,
     'container' => false,
     'theme_location' => 'primary',
     'fallback_cb'=> 'default_page_menu'
    );
    $menu = wp_nav_menu($options);
     echo preg_replace(array( '#^<ul[^>]*>#', '#</ul>$#' ), '', $menu);
    }
     function default_page_menu() { wp_list_pages('title_li='); }
