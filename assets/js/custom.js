
/*Magnific Popup*/
   $(function() {
    $('div.gallery').magnificPopup({delegate: 'a', 
      type: 'image',
      gallery: {
        enabled: true
      },
      removalDelay: 300,
      mainClass: 'mfp-fade'
    });
   });

/*Animated Headline*/
$(function() {
  $('.selector').animatedHeadline({
    animationType: 'type'
  });
})
/*Swiper*/
var mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 4000,
  },
});
/*Preloader*/
$(".preloader-wrap").delay(1500).fadeOut('slow');
