document.addEventListener('DOMContentLoaded', function() {
    var currentImageIndex = 1;
    var maxImages = 2; // Cambia esto según la cantidad de imágenes que tengas

    function updateImage() {
        var imageUrl = 'img/';
        if (currentImageIndex === 1) {
            imageUrl += 'IMG_20240421_153545683.png';
        } else if (currentImageIndex === 2) {
            imageUrl += 'IMG-20240204-WA0038.jpeg';
        }
        document.getElementById('lenticular-image').style.backgroundImage = 'url(' + imageUrl + ')';
    }

    window.addEventListener('deviceorientation', function(event) {
        // Utiliza event.alpha, event.beta, event.gamma para obtener los datos del giroscopio
        // Implementa tu efecto lenticular basado en los datos del giroscopio aquí
        // Esto es solo un marcador de posición
        var newImageIndex = Math.floor((event.beta + 180) / (360 / maxImages)) + 1;
        if (newImageIndex > maxImages) {
            newImageIndex = maxImages;
        } else if (newImageIndex < 1) {
            newImageIndex = 1;
        }
        if (newImageIndex !== currentImageIndex) {
            currentImageIndex = newImageIndex;
            updateImage();
        }
    });

    // Actualización inicial de la imagen
    update

});
