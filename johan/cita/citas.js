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
    convertirAParrafos();
}

function convertirAParrafos() {
    var datosAdicionales = document.getElementById('datosAdicionales');
    var inputs = datosAdicionales.querySelectorAll('input[type="text"]');
    inputs.forEach(function (input) {
        var parrafo = document.createElement('p');
        parrafo.textContent = input.value;
        input.replaceWith(parrafo);
    });
}
