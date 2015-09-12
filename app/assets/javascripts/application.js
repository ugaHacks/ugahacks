//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .
//= require scrollReveal.js/dist/scrollReveal.min.js
//= require fakeloader/fakeLoader.min.js
//= require bootstrap/dist/js/bootstrap.js

$(document).ready(function() {

  // indicate active section in navbar
  $(window).scroll(function () {
        var y = $(this).scrollTop();

        $('nav li a').each(function (event) {
            if (y >= $($(this).attr('href')).offset().top - 100) {
                $('nav li a').not(this).removeClass('active');
                $(this).addClass('active');
            }
        });
    });

  // animates elements to scroll into view when viewport shifts
  window.sr = new scrollReveal();

  // smoothly scroll when clicking on anchor links
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 50
          }, 1500);
          return false;
        }
      }
    });
  });

  // redirects to typeform directly if on mobile
  window.isMobile = /iphone|ipod|ipad|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase());
  if (window.isMobile) {
    document.querySelector(".spotlight a").href = "https://jaicob.typeform.com/to/rXE0ra";
    document.querySelector("a[href='#register']").href = "https://jaicob.typeform.com/to/rXE0ra"
    document.querySelector("#register").style.display = "none";

    document.querySelector(".jumbotron h2").innerText = "University of Georgia";

    document.querySelector("#mlh-trust-badge").style.display = "none";
  };

});