/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});

$('.feedback-slide').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  $(".footer-iconandlink").mouseover(function() {
    $( "#imgContact", this ).removeClass("txt-hidden").addClass( "readmore");
  });
  
  $(".footer-iconandlink").mouseout(function() {
    $( "#imgContact", this ).removeClass("readmore").addClass("txt-hidden");    
  });
  
  $(".close-button").click(function() {
    $( "#messenger", this ).removeClass("chatbox");
  });
  
  $( ".close-button" ).click(function() {
    $( "#messenger" ).slideUp();
  });
  
  $( ".logo-messenger" ).click(function() {
    $( "#messenger" ).slideDown();
  });
  
  $( ".header-nav" ).click(function() {
    $ (".header-nav").removeClass("nav-link-active");
    $(  this ).addClass("nav-link-active");
  });
  
  var c = 0;
  $( ".navbar-toggler" ).click(function() { 
    if (c == 0) {
      $(  ".navbar-toggler-icon" ).removeClass("navbar-toggler-icon").addClass("navbar-close");
      c = 1;
      $( ".header" ).addClass("header-mobile");
    } 
    else {
      $( ".navbar-close" ).removeClass("navbar-close").addClass("navbar-toggler-icon");
      c = 0;
      $( ".header" ).removeClass("header-mobile");
    }
  });
  