var campoTexto = document.getElementById("campoTexto");
var campoTextoEncriptado = document.getElementById("campoTextoEncriptado");
var botonEncriptar = document.getElementById("botonEncriptar");
var botonDesencriptar = document.getElementById("botonDesencriptar");
var botonCopiar = document.getElementById("botonCopiar");
var imagenMuñeco = document.getElementById("imagenMuñeco");
var mensaje1 = document.getElementById("mensaje1");
var mensaje2 = document.getElementById("mensaje2");

botonEncriptar.addEventListener("click", function () {
    var textoEncriptado = encriptarTexto(campoTexto.value);
    campoTextoEncriptado.value = textoEncriptado;
    ocultar();
});

botonDesencriptar.addEventListener("click", function () {
    var textoDesencriptado = desencriptarTexto(campoTexto.value);
    campoTextoEncriptado.value = textoDesencriptado;
    ocultar();
});

botonCopiar.addEventListener("click", function () {
    try {
        navigator.clipboard.writeText(campoTextoEncriptado.value);
    } catch (error) {
        console.error("Error al copiar el texto al portapapeles:", error);
    }
});


function ocultar() {
    if (campoTextoEncriptado.value.trim().length > 0) {
      imagenMuñeco.style.display = "none";
      mensaje1.style.display = "none";
      mensaje2.style.display = "none";
      campoTextoEncriptado.style.height = "57vh";
      botonCopiar.style.display = "block";
    } else {
      imagenMuñeco.style.display = "block";
      mensaje1.style.display = "block";
      mensaje2.style.display = "block";
    }
  }

function encriptarTexto(texto) {
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;
}


function desencriptarTexto(textoEncriptado) {
    textoEncriptado = textoEncriptado.replace(/enter/g, "e");
    textoEncriptado = textoEncriptado.replace(/imes/g, "i");
    textoEncriptado = textoEncriptado.replace(/ai/g, "a");
    textoEncriptado = textoEncriptado.replace(/ober/g, "o");
    textoEncriptado = textoEncriptado.replace(/ufat/g, "u");
    return textoEncriptado;

}

