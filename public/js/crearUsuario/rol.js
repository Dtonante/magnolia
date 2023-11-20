function mostrarCamposAdicionales() {
    var rolUsuarioselect = document.getElementById('rolUsuario');
    var camposAdicionalesDiv = document.getElementById('camposAdicionales');

    if (rolUsuarioselect.value === 'administrador') {
        // Mostrar campos adicionales para Consulta Externa
        camposAdicionalesDiv.style.display = 'block';
    } else {
        // Ocultar campos adicionales para otras opciones
        camposAdicionalesDiv.style.display = 'none';
    }
}