function validarFormulario() {
    var formulario = document.getElementById('ordenMedicaForm');

    // Ejemplo de validación simple
    if (!formulario.checkValidity()) {
        alert('Por favor, completa todos los campos correctamente.');
        return false;
    }

    // Aquí puedes agregar más validaciones según tus necesidades

    return true;
}

function limpiarFormulario() {
    document.getElementById('ordenMedicaForm').reset();
}