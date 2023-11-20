function mostrarCamposAdicionales() {
    var departamentoSelect = document.getElementById('departamento');
    var camposAdicionalesDiv = document.getElementById('camposAdicionales');

    if (departamentoSelect.value === 'Consulta Externa') {
        // Mostrar campos adicionales para Consulta Externa
        camposAdicionalesDiv.style.display = 'block';
    } else {
        // Ocultar campos adicionales para otras opciones
        camposAdicionalesDiv.style.display = 'none';
    }
}

document.getElementById('citaForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var paciente = document.getElementById('paciente').value;
    var fecha = document.getElementById('fecha').value;
    var hora = document.getElementById('hora').value;
    var medico = document.getElementById('medico').value;
    var departamento = document.getElementById('departamento').value;
    var ubicacion = document.getElementById('ubicacion').value;

    var ordenGenerada = document.getElementById('ordenGenerada');
    ordenGenerada.innerHTML = `
        <p><strong>Paciente:</strong> ${paciente}</p>
        <p><strong>Fecha:</strong> ${fecha}</p>
        <p><strong>Hora:</strong> ${hora}</p>
        <p><strong>Médico:</strong> ${medico}</p>
        <p><strong>Departamento:</strong> ${departamento}</p>
        ${ubicacion ? `<p><strong>Ubicación:</strong> ${ubicacion}</p>` : ''}
    `;
});