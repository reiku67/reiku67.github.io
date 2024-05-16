function mostrarHora() {
    var fecha = new Date();
    
    // Crear una nueva fecha con la zona horaria de Mendoza
    var fechaMendoza = new Date(fecha.toLocaleString('en-US', {timeZone: 'America/Argentina/Mendoza'}));

    var hora = fechaMendoza.getHours();
    var minutos = fechaMendoza.getMinutes();
    var segundos = fechaMendoza.getSeconds();

    // Determinar si es AM o PM
    var meridiano = hora >= 12 ? 'PM' : 'AM';

    // Convertir la hora de 24 horas a formato de 12 horas
    hora = hora % 12 || 12;

    // Agregar un cero delante si los minutos o segundos son menores que 10
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    // Obtener la zona horaria
    var zonaHoraria = 'GMT-3';

    // Formatear la hora completa
    var horaFormateada = hora + ':' + minutos + ':' + segundos + ' ' + meridiano + ' ' + zonaHoraria;

    document.getElementById("hora").innerHTML = horaFormateada;

    setTimeout(mostrarHora, 1000); // Llamar a esta función nuevamente cada segundo para mantener la hora actualizada
}

mostrarHora(); // Llamar a la función para mostrar la hora al cargar la página

