const resultado = document.getElementById('caja_resultado');
const contenido = document.querySelector('.seccion_contenido_resultado');
const advertencia = document.getElementById('textoinfo');

function encriptar(){
    var mensaje = document.getElementById('textoencriptar').value;
    let textoencriptado = mensaje;
    let textosolo = textoencriptado.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    //confirmar que es solo texto sin simbolos ni acentos

    if(textoencriptado !== textosolo){
        advertencia.style.background = "#95daf0";
        advertencia.style.color =  "#0307fc";
    }

    //confirmar que solo es minusculas
    else if(textoencriptado !== textosolo.toLowerCase()){
        advertencia.style.background = "#95daf0";
        advertencia.style.color =  "#0307fc";
    }
    else{
        //reemplazar las vocales
    textoencriptado = textoencriptado.replace(/e/mg, "enter");
    textoencriptado = textoencriptado.replace(/i/mg, "imes");
    textoencriptado = textoencriptado.replace(/a/mg, "ai");
    textoencriptado = textoencriptado.replace(/o/mg, "ober");
    textoencriptado = textoencriptado.replace(/u/mg, "ufat");

    //Movet texto de un textbox a otro
    resultado.innerHTML = textoencriptado;
    contenido.remove();
    document.getElementById('boton_copiar').removeAttribute('hidden');

    }

}

function desencriptar(){
    
    var mensaje = document.getElementById('textoencriptar').value;
    let textodesencriptado = mensaje;
    let textosolo = textodesencriptado.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(textodesencriptado !== textosolo){
        advertencia.style.background = "#95daf0";
        advertencia.style.color =  "#0307fc";
    }
    else if(textodesencriptado !== textosolo.toLowerCase()){
        advertencia.style.background = "#95daf0";
        advertencia.style.color =  "#0307fc";
    }
    else{
    //reemplazar palabras con vocales
    textodesencriptado = textodesencriptado.replace(/enter/mg, "e");
    textodesencriptado = textodesencriptado.replace(/imes/mg, "i");
    textodesencriptado = textodesencriptado.replace(/ai/mg, "a");
    textodesencriptado = textodesencriptado.replace(/ober/mg, "o");
    textodesencriptado = textodesencriptado.replace(/ufat/mg, "u");
    //mover textbox a otro
    resultado.innerHTML = textodesencriptado;
    contenido.remove();
    document.getElementById('boton_copiar').removeAttribute('hidden');
    }

}

//funcion para copiar texto del text area

function copiartexto(){
    let copiar = resultado;
    copiar.select();
}
