const formulario = document.getElementById('form')
const text = document.getElementById('text')
const nombre = document.getElementById('nombre')
const numero = document.getElementById('numero')
const email = document.getElementById('email')
const pass = document.getElementById('pass')
const datetime = document.getElementById('datetime')
const textarea = document.getElementById('textarea')
const select = document.getElementById('select')




// TRAE LA FECHA Y HORA ACTUAL AL CAMPO DATE TIME
const fechaHoraActual = new Date().toISOString().slice(0, 16);
datetime.value = fechaHoraActual




formulario.addEventListener('submit', e =>{
    e.preventDefault()




    validateInputs()
})








const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');




    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}




const setSuccess = elemento =>{
    const inputControl = elemento.parentElement
    const errorDisplay = inputControl.querySelector('.error')




    errorDisplay.innerText = ""
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}


// VALIDA QUE EL FORMATO DEL CORREO ESTE BIEN(TEXTO @ TEXTO . TEXTO)
const validarCorreo = email =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// VALIDA QUE TENGA ALMENOS 8 CARACTERES
const validarContraseña = pass =>{
    const re = /^.{8,}$/
    return re.test(pass)
}


// VALIDA QUE SOLO SEAN LETRAS(SE PUEDEN ESPACIOS Y LETRAS CON ACENTOS)
const validarTexto = text => {
    const re = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]*$/
    return re.test(String(text))
}


// VALIDA QUE SOLO SE INGRESEN LETRAS Y QUE LA PRIMERA SEA MAYUSCULA (LA PUEDEN USAR PARA CAMPOS COMO NOMBRES)
const validarNombre = nombre => {
    const re = /^[A-Z\u00C0-\u00D6\u00D8-\u00DE][a-zA-Z\u00C0-\u00D6\u00D8-\u00DE ]*$/


// /^[A-Z\u00C0-\u00D6\u00D8-\u00DE][a-z\u00DF-\u00F6\u00F8-\u00FF ]*$/ (ESTA LINEA VALIDA QUE LA PRIMERA SEA MAYUSCULA PERO SI PONES TODAS MAYUSCULA TE MUESTRA ERROR DEPRONTO A ALGUIEN LE SIRVA POR ESO LA DEJO)
    return re.test(nombre)
}


// VALIDA QUE SOLO SE PUEDAN INGRESAR NUMEROS
const validarNumero = numero => {
    const re = /^\d+$/
    return re.test(numero)
}


const validateInputs = () =>{
    const textValue = text.value.trim()
    const emailValue = email.value.trim()
    const passValue = pass.value.trim()
    const textareaValue = textarea.value.trim()
    const selectValue = select.value.trim()
    const nombreValue = nombre.value.trim()
    const numeroValue = numero.value.trim()




    if(textValue === ""){
        setError(text, 'No puedes dejar este campo vacio.')
    }else if(!validarTexto(textValue)){
        setError(text, 'No se permiten caracteres especiales.')
    }else{
        setSuccess(text)
    }


    if(nombreValue === ""){
        setError(nombre, 'No puedes dejar este campo vacio.')
    }else if(!validarNombre(nombreValue)){
        setError(nombre, 'Se debe iniciar con la letra mayuscula y no se permiten caracteres especiales.')
    }else{
        setSuccess(nombre)
    }


    if(numeroValue === ""){
        setError(numero, 'No puedes dejar este campo vacio.')
    }else if(!validarNumero(numeroValue)){
        setError(numero, 'Solo puedes ingresar números.')
    }else{
        setSuccess(numero)
    }




    if(emailValue === ""){
        setError(email, 'El campo correo eléctronico debe de ser llenado.')
    }else if(!validarCorreo(emailValue)){
        setError(email, 'Ingresa un correo electrónico valido.')
    }else{
        setSuccess(email)
    }




    if(passValue === ""){
        setError(pass, 'El campo contraseña debe de ser llenado.')
    }else if(!validarContraseña(passValue)){
        setError(pass, 'La contraseña debe de tener al menos 8 caracteres.')
    }else{
        setSuccess(pass)
    }




    if(textareaValue === ""){
        setError(textarea, 'No puedes dejar este campo vacio')
    }else{
        setSuccess(textarea)
    }




    if(selectValue === "seleccionar"){
        setError(select, 'Debes de seleccionar una opción valida')
    }else{
        setSuccess(select)
    }




}
