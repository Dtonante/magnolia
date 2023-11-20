const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    fecha: /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/,
    contraseñaFuerte:/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
    
}   

const campos = {

    beneficiario: false,
    targetaIdentidad: false,
    fechaNacimiento: false,
    sexoBiologico: false,
    cuidadorPrincipal: false,
    cedulaCuidador: false,
    parentesco: false,
    numeroContacto: false,
    telefono: false,
    diagnosticoPrincipal: false,
    direccion: false,
    sesion: false,
    numeroAutorizacion: false,
    fechaAutorizacion: false,
    observaciones: false,
    epsSelect: false,
    
    // usuario: false,
    // password: false,
    // correo: false,
    // telefono: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {

        case "epsSelect":
            validarCampo(expresiones.nombre, e.target, 'epsSelect');
            break;

        case "beneficiario":
            validarCampo(expresiones.nombre, e.target, 'beneficiario');
            break;
        case "targetaIdentidad":
            validarCampo(expresiones.telefono, e.target, 'targetaIdentidad');
            break;
        case "fechaNacimiento":
            validarCampo(expresiones.fecha, e.target, 'fechaNacimiento');
            break;
        case "sexoBiologico":
            validarCampo(expresiones.nombre, e.target, 'sexoBiologico');
            break;
        case "cuidadorPrincipal":
            validarCampo(expresiones.nombre, e.target, 'cuidadorPrincipal');
            break;
        case "cedulaCuidador":
            validarCampo(expresiones.telefono, e.target, 'cedulaCuidador');
            break;
        case "parentesco":
            validarCampo(expresiones.nombre, e.target, 'parentesco');
            break;
        case "numeroContacto":
            validarCampo(expresiones.telefono, e.target, 'numeroContacto');
            break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
            break;
        case "diagnosticoPrincipal":
            validarCampo(expresiones.nombre, e.target, 'diagnosticoPrincipal');
            break;
        case "direccion":
            validarCampo(expresiones.nombre, e.target, 'direccion');
            break;
        case "sesion":
            validarCampo(expresiones.telefono, e.target, 'sesion');
            break;
        case "numeroAutorizacion":
            validarCampo(expresiones.telefono, e.target, 'numeroAutorizacion');
            break;
            case "fechaAutorizacion":
            validarCampo(expresiones.fecha, e.target, 'fechaAutorizacion');
            break;
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
            break;
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
            break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            validarPassword2();
            break;
        case "password2":
            validarPassword2();
            break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
        
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos['password'] = false;
    } else {
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['password'] = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terminos');
    if (campos.usuario && campos.targetaIdentidad && campos.sexoBiologico && campos.beneficiario && campos.password && campos.correo && campos.telefono && terminos.checked) {
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});