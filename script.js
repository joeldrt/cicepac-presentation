// Configuración e inicialización de Reveal.js
Reveal.initialize({
    hash: true,
    controls: true,
    progress: true,
    center: true,
    transition: 'slide',
    plugins: [ RevealNotes ]
});

// Manejo de efectos modal para imágenes
Reveal.addEventListener('fragmentshown', function(event) {
    const fragment = event.fragment;
    
    if (fragment.classList.contains('modal-to-position')) {
        // Buscar la imagen modal anterior en el mismo contenedor
        const container = fragment.parentElement;
        const modalImage = container.querySelector('.modal-image');
        if (modalImage) {
            modalImage.classList.add('final-position');
        }
    }
});

Reveal.addEventListener('fragmenthidden', function(event) {
    const fragment = event.fragment;
    
    if (fragment.classList.contains('modal-to-position')) {
        // Buscar la imagen modal anterior en el mismo contenedor
        const container = fragment.parentElement;
        const modalImage = container.querySelector('.modal-image');
        if (modalImage) {
            modalImage.classList.remove('final-position');
        }
    }
});