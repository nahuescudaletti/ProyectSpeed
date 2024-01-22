
<script>
  document.addEventListener('DOMContentLoaded', function() {
    window.onload = function() {
      // Encuentra el elemento con la clase "flasheada"
      var flasheadaElement = document.querySelector('.flasheada');

      // Verifica si el elemento existe antes de continuar
      if (flasheadaElement) {
        // Obtiene el tamaño del elemento y ajusta la cantidad de tiles según sea necesario
        var flasheadaRect = flasheadaElement.getBoundingClientRect();
        tiles = Math.round((flasheadaRect.width * flasheadaRect.height) / 100);

        // Crea una instancia de Matrix para el elemento específico
        var flasheadaMatrix = new Matrix(
          flasheadaRect.left,
          flasheadaRect.top,
          16, // Tamaño de las letras
          150, // Color de fondo
          2, // Nueva velocidad en X
          0.8 // Nueva velocidad en Y
        );

        // Limpia el contenido actual del elemento
        flasheadaElement.innerHTML = '';

        // Ejecuta la lluvia de letras solo para ese elemento
        for (var i = 0; i < tiles; i++) {
          flasheadaMatrix.spread();
          flasheadaMatrix.update(flasheadaElement);
        }
      }
    };
  });
</script>
