function validarEnviar(){

    if(document.formulario.nombre.value.length <= 2){
        alert("Ingrese un nombre correcto.")
        document.formulario.nombre.focus()
        return
    }

    if(document.formulario.apellido.value.length <= 2){
        alert("Ingrese un apellido correcto.")
        document.formulario.apellido.focus()
        return
    }

    if(document.formulario.email.value.length <= 2){
        alert("Ingrese un Email correcto.")
        document.formulario.email.focus()
        return
    }

    if(document.formulario.mensaje.value.length <= 10){
        alert("Ingrese un consulta por favor.")
        document.formulario.mensaje.focus()
        return
    }

    alert("Muchas gracias por su consulta!")
    document.formulario.submit()

    // let edadEntera = parseInt(document.formulario.edad.value)
    // if(isNaN(edadEntera)){
    //     alert("Tiene que ingresar un numero valido")
    //     document.formulario.edad.focus()
    //     return
    // }

}