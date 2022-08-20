/* 
    As "chaves" de criptografia que utilizaremos são:
    A letra "e" é convertida para "enter"
    A letra "i" é convertida para "imes"
    A letra "a" é convertida para "ai"
    A letra "o" é convertida para "ober"
    A letra "u" é convertida para "ufat"
*/

const input = document.querySelector("#input-texto");
const btnCriptografar = document.querySelector("#btn-criptografar");
const btnDescriptografar = document.querySelector("#btn-descriptografar");
const mensagem = document.querySelector("#mensagem");
const btnCopiar = document.querySelector("#btn-copiar");

//capturando o id e escondendo a div-aparece da tela
document.getElementById("div-aparece").style.display = 'none';
inputverificar();

//capturando o id no momento do click e direcionando para o método que encripta o texto
document.getElementById("btn-criptografar").onclick = (e) => {
    e.preventDefault();
    const textoEncriptado = encriptar(input.value.toLowerCase());
    mensagem.value = textoEncriptado;
    input.value = "";
    aparece()
}

document.getElementById("btn-descriptografar").onclick = (e) => {
    e.preventDefault();
    const textoDescriptado = decodificar(input.value.toLowerCase());
    mensagem.value = textoDescriptado;
    input.value = "";
    aparece()
}

//capturando o id no momento do click e fazendo a validação de copiar o texto
document.getElementById("btn-copiar").onclick = (e) => {
    e.preventDefault();
    const mensagem = document.querySelector("#mensagem");
    mensagem.select();
    navigator.clipboard.writeText(mensagem.value)
    mensagem.value = "";
}

//encriptando o texto
function encriptar(stringEncriptada) {
    let matrizCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCode.length; i++) {
        if (stringEncriptada.includes(matrizCode[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCode[i][0], matrizCode[i][1])
        }
    }
    return stringEncriptada;
}

//decodificando o texto
function decodificar(stringDecriptada) {
    let matrizCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDecriptada = stringDecriptada.toLowerCase();
    for (let i = 0; i < matrizCode.length; i++) {
      if (stringDecriptada.includes(matrizCode[i][1])) {
        stringDecriptada = stringDecriptada.replaceAll(matrizCode[i][1],matrizCode[i][0])
      }
    }
    return stringDecriptada;
  }

//manipulando o dom para que alguns componentes apareçam e desapareçam da tela
function aparece() {
    document.getElementById("div-desaparece").style.display = 'none';
    document.getElementById("div-aparece").style.display = 'block';
}

//manipulando o dom para que laguns componentes apareçam e desapareçam da tela
function home() {
    document.getElementById("div-aparece").style.display = 'none';
    document.getElementById("div-desaparece").style.display = 'block';
}

//verificando qual foi o texto digitado pelo usuário
function inputverificar() {
    var inputPalavra = document.querySelector("#input-texto");
    inputPalavra.addEventListener("keypress", function (e) {
        var keyCode = (e.keyCode ? e.keyCode : e.which);

        if (keyCode > 47 && keyCode < 65) {
            e.preventDefault();
        }
    });
}