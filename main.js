var campoTexto = document.getElementById("campoTexto");
var campoTextoEncriptado = document.getElementById("campoTextoEncriptado");
var botonEncriptar = document.getElementById("botonEncriptar");
var botonDesencriptar = document.getElementById("botonDesencriptar");

botonEncriptar.addEventListener("click", function() {
    var textoEncriptado = encriptarTexto(campoTexto.value);
    campoTextoEncriptado.value = textoEncriptado;
});

botonDesencriptar.addEventListener("click", function() {
    var textoDesencriptado = desencriptarTexto(campoTexto.value);
    campoTextoEncriptado.value = textoDesencriptado;
});

function encriptarTexto (texto) {
    texto = texto.replace("e", "enter");
    texto = texto.replace("i", "imes");
    texto = texto.replace("a", "ai");
    texto = texto.replace("o", "ober");
    texto = texto.replace("u", "ufat");
    return texto;
}

function desencriptarTexto (textoEncriptado) {
    textoEncriptado = textoEncriptado.replace("enter", "e");
    textoEncriptado = textoEncriptado.replace("imes", "i");
    textoEncriptado = textoEncriptado.replace("ai", "a");
    textoEncriptado = textoEncriptado.replace("ober", "o");
    textoEncriptado = textoEncriptado.replace("ufat", "u");
    return textoEncriptado;
}

