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

        // Completar la información al azar en "card-info"
        var cardInfo = $(this).siblings('.card-info');
        completeCardInfo(cardInfo);
      }
    }
  });

  // Función para completar al azar la información en "card-info"
  function completeCardInfo(cardInfo) {
    var renglonSuperior = cardInfo.find('.small-text');
    var dataContainer = cardInfo.find('.data');

    renglonSuperior.text('Últimos movimientos');

    var randomCount = getRandomNumber(1, 5); // Generar un número aleatorio de columnas

    dataContainer.empty(); // Vaciar el contenedor de datos existentes

    var cont = "";

    for (var i = 0; i < randomCount; i++) {
      var randomValue = Math.random() > 0.5 ? 2000 : -900;
      var randomType = randomValue > 0 ? 'Depósito' : 'Compra';

      cont += '<div class="col">';
      cont += '  <div class="row">';
      cont += '    <div class="col d-flex align-items-center">';
      cont += '      <span class="me-1 small-text">' + randomType + ' </span>';
      if (randomValue <= 0) {
        cont += '        <a class="ms-2" href="https://example.com">info</a>';
      }
      cont += '    </div>';
      cont += '    <div class="col d-flex align-items-start justify-content-start">';
      cont += '      <img class="img-fluid small-image-speed" src="./assets/img/luna_money.svg" alt="">';
      cont += '      <span class="ms-1" style="color: ' + (randomValue > 0 ? 'green' : 'red') + ';">' + (randomValue > 0 ? '+' + randomValue : randomValue);
      cont += '      </span>';
      cont += '    </div>';
      cont += '  </div>';
      cont += '</div>';

      // Agregar <hr> entre columnas, excepto para la última columna
      if (i < randomCount - 1) {
        cont += '<hr class="mt-2 mb-2">';
      }
    }

    dataContainer.html(cont);
  }

  // Función para obtener la fecha y hora actual
  function getCurrentDateTime() {
    var year = 2023;
    var month = getRandomNumber(0, 11); // Generar un número aleatorio del 0 al 11 para representar los meses de enero a diciembre
    var day = getRandomNumber(1, 31); // Generar un número aleatorio del 1 al 31 para representar los días
    var hour = getRandomNumber(0, 23); // Generar un número aleatorio del 0 al 23 para representar las horas
    var minute = getRandomNumber(0, 59); // Generar un número aleatorio del 0 al 59 para representar los minutos

    var dateFormatted = ('0' + day).slice(-2) + '/' + ('0' + (month + 1)).slice(-2) + '/' + year;
    var timeFormatted = ('0' + hour).slice(-2) + ':' + ('0' + minute).slice(-2) + ' hs';

    return dateFormatted + ' ' + timeFormatted;
  }

  // Función para generar un número aleatorio en un rango dado
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


});







