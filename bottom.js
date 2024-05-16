const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("siguiente");
const categorias = document.querySelectorAll(".category");
let categoriaActual = 0;

botonAnterior.addEventListener("click", () => {
    categoriaActual--;
    actualizarBotones();
    mostrarCategoria();
});

botonSiguiente.addEventListener("click", () => {
    categoriaActual++;
    actualizarBotones();
    mostrarCategoria();
});

function mostrarCategoria() {
    categorias.forEach((categoria, index) => {
        if (index === categoriaActual) {
            categoria.classList.add("active");
        } else {
            categoria.classList.remove("active");
        }
    });
}

function actualizarBotones() {
    if (categoriaActual === 0) {
        botonAnterior.style.display = "none";
    } else {
        botonAnterior.style.display = "block";
    }

    // Si llegamos a la última categoría, ocultamos el botón de siguiente
    if (categoriaActual === categorias.length - 1) {
        botonSiguiente.style.display = "none";
    } else {
        botonSiguiente.style.display = "block";
    }
}
