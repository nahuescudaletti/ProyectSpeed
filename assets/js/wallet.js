$(document).ready(function() {
  $(".card").click(function() {
    // Si la tarjeta ya está activa, la desactiva
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      // Remover la clase 'active' de todas las tarjetas
      $(".card").removeClass("active");

      // Agregar la clase 'active' a la tarjeta seleccionada
      $(this).addClass("active");
    }
  });
});
