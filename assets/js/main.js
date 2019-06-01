(function($) {
    "use strict"
    jQuery(document).ready(function() {
        // Navigation for Mobile Device
        $('.custom-navbar').on('click', function(){
            $('.main-menu ul').slideToggle(500);
        });
        $(window).on('resize', function(){
            if ( $(window).width() > 767 ) {
                $('.main-menu ul').removeAttr('style');
            }
        });

        // Employee Slider
        $('.testimonial-slider').owlCarousel({
            loop: false,
            margin: 30,
            autoplay: false,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            nav: false,
            dots: true,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        });

        // Nice Select
        $('select').niceSelect();

        // Date Picker
        jQuery('#datepicker').datetimepicker({
            timepicker:false,
            format:'d.m.Y',
        });

        // Time Picker
        jQuery('#datepicker2').datetimepicker({
            datepicker:false,
            format:'H:i'
        });

        // Google Map
        if ( $('#mapBox').length ){
            var $lat = $('#mapBox').data('lat');
            var $lon = $('#mapBox').data('lon');
            var $zoom = $('#mapBox').data('zoom');
            var $marker = $('#mapBox').data('marker');
            var $info = $('#mapBox').data('info');
            var $markerLat = $('#mapBox').data('mlat');
            var $markerLon = $('#mapBox').data('mlon');
            var map = new GMaps({
            el: '#mapBox',
            lat: $lat,
            lng: $lon,
            scrollwheel: false,
            scaleControl: true,
            streetViewControl: false,
            panControl: true,
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            zoom: $zoom,
                styles: [
                    {
                        "featureType": "water",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#dcdfe6"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "stylers": [
                            {
                                "color": "#808080"
                            },
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#dcdfe6"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#ffffff"
                            },
                            {
                                "weight": 1.8
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#d7d7d7"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#ebebeb"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#a7a7a7"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#efefef"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#696969"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#737373"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#d6d6d6"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {},
                    {
                        "featureType": "poi",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#dadada"
                            }
                        ]
                    }
                ]
            });
        }

    });

    jQuery(window).on('load', function() {
        // WOW JS
        new WOW().init();
        // Preloader
		$('.preloader').fadeOut(500);
    });



// Функция плавное скрола меню
var mSkroll = (item) => {
  $(item).on('click', function() {
    var dest = $(this).attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({
            scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
        }, 500 // скорость прокрутки
        );
    }
    return false;
  })
};
// Вызов функции плавное скрола меню
mSkroll('.main-menu ul li a');
mSkroll('#header-logo a');

// /Функция плавное скрола меню



// Липкое меню
var lMenu = () => {
  var wrap = $(".header-area");
  $(window).scroll(function(e) {
    if ($(this).scrollTop() > 250) {
      wrap.addClass("fix-search");
    } else {
      if($(this).scrollTop() > 10){
        wrap.addClass("fix-search-top");
      }else{
        wrap.removeClass("fix-search-top");
      }
      wrap.removeClass("fix-search");
    }

  });
};
// Вызов функции
lMenu();

// /Липкое меню

// функция для всплывающего окна
var callPopup = (selecter) => {
  $(selecter).magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',

      // When elemened is focused, some mobile browsers in some cases zoom in
      // It looks not nice, so we disable it:
      callbacks: {
          beforeOpen: function() {
              if($(window).width() < 700) {
                  this.st.focus = false;
              } else {
                  this.st.focus = '#name';
              }
          }
      }
  });
};
// вызов функции
callPopup('.centerMyBtn'); // сотрудничество
callPopup('.coll_info'); // Подробнее
callPopup('.coll_product'); // Подробнее -> заказать товар
callPopup('.coll_product_to'); // заказать товар
callPopup('.all_coll_phone'); // все телефоны
callPopup('.block_provider'); // сотрудничество

// /функция для всплывающего окна

// функция для создания объекта продукта
var objectProduct = () => {
  var creactObject = {};
  $('.coll_info').on('click', function() {
    // Получаем родителей
    var parent = $(this).parent('.div_btn_info').parent('.wrap_btn_info');
    var parentInfo = parent.find('.wrap_block_visibility_hedden');
    // получаем текст
    var img = parent.parent('.food-content').siblings('.food-img').find('.img_product').data('img');
    var title = parent.siblings('.wrap_this_name').find('.this_name').text();
    var country = parentInfo.find('.wrap_country_this_desc').text();
    var description = parentInfo.find('.wrap_this_desc').text();
    var season = parentInfo.find('.wrap_this_age').text();
    creactObject = creactObject = {
      'img': img,
      'title': title,
      'country': country,
      'description': description,
      'season': season,
    }
    $('#coll_info').find('.wrap_img_product').find('img').attr({'src': creactObject.img});
    $('#coll_info').find('.wrap_text_product').find('.name_product').text(creactObject.title);
    $('#coll_info').find('.wrap_disc_product').find('.desc_product').text(creactObject.description);
    $('#coll_info').find('.wrap_country_product').find('.country_product').text(creactObject.country);
    $('#coll_info').find('.wrap_age_product').find('.desc_age_product').text(creactObject.season);
  });
  $('.coll_product').on('click', function() {
    $('#coll_product').find('.wrap_form_coll_product').find('.input_product').val(creactObject.title);
  })

}
objectProduct();
// /функция для создания объекта продукта

// получение название товара при нажатии на кнопку заказать
$('.coll_product_to').on('click', function() {
  var text = $(this).parent('.div_btn_info').parent('.wrap_btn_info').siblings('.wrap_this_name').find('.this_name').text();
  console.log(text);
  $('#coll_product_to').find('.wrap_form_coll_product').find('.input_product').val(text);
})
// /получение название товара при нажатии на кнопку заказать

// Выбор в контактах
$('.select_text').on('click', function() {
    $(this).parent('.my_select_body').parent('.wrap_my_select').toggleClass('open_select');
    $('.select_items').on('click', function() {
      var value_text = $(this).text();
      $(this).parent('.my_select_body').parent('.wrap_my_select').removeClass('open_select');
      $(this).siblings('.select_text').text(value_text);
      $(this).parent('.my_select_body').parent('.wrap_my_select').siblings('.input_text_hidden').val(value_text);
    })
});
// /Выбор в контактах

// Открытие отзывов

$('.btn_reviews').on('click', function() {
  $(this).parent('.div_btn_info').siblings('.wrap_reviews').toggleClass('open_wrap_reviews');
});
// /Открытие отзывов


// if($('.mfp-content').find('.white-popup-block').attr('id') == 'coll_info' ){
//   $(this).addClass('coll_info_mfp-content');
// }

})(jQuery);
