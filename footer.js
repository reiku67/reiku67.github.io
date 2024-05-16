// En tu archivo script.js
window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    var scrollPosition = window.scrollY;
    var windowSize = window.innerHeight;
    var bodyHeight = document.body.offsetHeight;

    if ((scrollPosition + windowSize) >= bodyHeight) {
        footer.style.display = 'block'; // Muestra el pie de página al final de la página
    } else {
        footer.style.display = 'none'; // Oculta el pie de página en cualquier otro lugar
    }
});
