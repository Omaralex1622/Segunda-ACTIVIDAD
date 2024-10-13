// Función para actualizar el contador de visitas
function updateVisitCount() {
    // Obtener el contador actual de visitas desde el localStorage
    let visitCount = localStorage.getItem('visitCount');

    // Si no existe, inicializarlo en 0
    if (visitCount === null) {
        visitCount = 0;
    }

    // Convertir el valor a número y sumarle 1
    visitCount = parseInt(visitCount) + 1;

    // Guardar el nuevo contador en el localStorage
    localStorage.setItem('visitCount', visitCount);

    // Mostrar el contador actualizado en el HTML
    document.getElementById('visitCount').innerText = visitCount;
}

// Llamar a la función cuando se cargue la página
updateVisitCount();
