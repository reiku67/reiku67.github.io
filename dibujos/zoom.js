const imagen = document.getElementById('imagen');
const zoomInButton = document.getElementById('zoom-in');
const zoomOutButton = document.getElementById('zoom-out');

let escalaActual = 0.3; // Escala inicial

aplicarZoom();

zoomInButton.addEventListener('click', function() {
    escalaActual += 0.1; // Incrementa la escala en 0.1 (ajusta según lo necesites)
    aplicarZoom();
});

zoomOutButton.addEventListener('click', function() {
    escalaActual -= 0.1; // Decrementa la escala en 0.1 (ajusta según lo necesites)
    aplicarZoom();
});

function aplicarZoom() {
    imagen.style.transform = `scale(${escalaActual})`;
}
