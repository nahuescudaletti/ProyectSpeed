    // Inicializar el controlador de ScrollMagic
    var controller = new ScrollMagic.Controller();

    // Crear una línea de tiempo de GSAP para coordinar las animaciones
    var timeline = gsap.timeline();

    // Añadir las animaciones a la línea de tiempo
    timeline.fromTo('#animation-container-1', { x: '-50%' }, { x: '0%', ease: 'linear' });
    timeline.fromTo('#animation-container-2', { x: '50%' }, { x: '0%', ease: 'linear' }, 0); // Inicia al mismo tiempo que la anterior

    // Crear una escena de ScrollMagic para la línea de tiempo
    var scene = new ScrollMagic.Scene({
        triggerElement: '#animation-container-1',
        triggerHook: 0.8, // Comienza cuando el 50% del contenedor del gatillo está en la parte superior del viewport
        duration: '60%'
    })
    .setTween(timeline)
    .addIndicators() // Opcional: Añadir indicadores para depuración
    .addTo(controller);
