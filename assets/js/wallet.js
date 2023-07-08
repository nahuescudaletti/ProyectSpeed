$(document).ready(function() {
  $('.card').click(function() {
    if ($(this).hasClass('hidden')) {
      // Restaurar estado original
      $('.card').css({
        'transform': '',
        'z-index': ''
      });
      $('.card').removeClass('hidden');
      $('.card').fadeIn();
      $('.card-info').fadeOut(300, function() {
        $(this).removeClass('fade-in').addClass('hidden');
      });
    } else {
      // Obtener el índice de la tarjeta clickeada
      var index = $(this).index();

      if ($(this).css('z-index') === '4') {
        // Restaurar estado original
        $(this).css({
          'transform': '',
          'z-index': ''
        });
        $('.card').fadeIn();
        $('.card-info').fadeOut(300, function() {
          $(this).addClass('hidden');
        });
      } else {
        // Aplicar el transform: translateY(0px) y z-index: 4 a la tarjeta clickeada
        $(this).css({
          'transform': 'translateY(0px)',
          'z-index': 4
        });

        // Ocultar las otras tarjetas con animación fadeOut
        $('.card').not(this).fadeOut();
        $('.card-info').removeClass('hidden').addClass('fade-in').fadeIn(300);
      }
    }
  });
});
