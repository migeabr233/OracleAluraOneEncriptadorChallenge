//Declarando vriables y seleccioanndo elementos del mundo html
const textoEncriptar = document.querySelector("#textoEn");
const boton = document.querySelector("#encriptar");
const encriptado = document.querySelector("#textoDes");
const botonDesncriptar = document.querySelector("#desencriptar");
//funcion encriptar
function Encriptar() {
  let textoEncriptado = "";
  //convertimos el texto en una cadena de strings
  let cadena = textoEncriptar.value;
  //y la almacenamos en una variable temporal
  let temporal = "";
  // pasamos la temporal a una cadena limpia de mayusculas
  let cadenaLimpio = cadena.toLowerCase();
  //declaramos una nueva variable cadena de caracteres
  let cadenaCaracteres = [];
//for para separar las letras una por una y asignarlas a la variable cadena.
  for (let x of cadenaLimpio) {
    temporal += x;
    cadenaCaracteres = temporal.split("");
    console.log(cadenaCaracteres); //Console log para ver como funciona
  }
//for para ir verificando una por una las letras que estan puestas en la variable de cadena limpia
//y cambiandolas por las letras que se asignan al ejercicio.
  for (let i = 0; i <= cadenaCaracteres.length; i++) {
    if (cadenaCaracteres[i] == "a") {
      cadenaCaracteres[i] = "ai";
    } else if (cadenaCaracteres[i] == "e") {
      cadenaCaracteres[i] = "enter";
    } else if (cadenaCaracteres[i] == "i") {
      cadenaCaracteres[i] = "imes";
    } else if (cadenaCaracteres[i] == "o") {
      cadenaCaracteres[i] = "ober";
    } else if (cadenaCaracteres[i] == "u") {
      cadenaCaracteres[i] = "ufat";
    }
    textoEncriptado = cadenaCaracteres.join("");
  }
  encriptado.value = textoEncriptado;
}

//funcion desencriptar.
function Desencriptar() {
  let cadena = textoEncriptar.value;
  let temporal = "";

  for (let x of cadena) {
    temporal += x;
    if (temporal.includes("ai")) {
      temporal = temporal.replace("ai", "a");
    } else if (temporal.includes("enter")) {
      temporal = temporal.replace("enter", "e");
    } else if (temporal.includes("imes")) {
      temporal = temporal.replace("imes", "i");
    } else if (temporal.includes("ober")) {
      temporal = temporal.replace("ober", "o");
    } else if (temporal.includes("ufat")) {
      temporal = temporal.replace("ufat", "u");
    }
  }
  encriptado.value = temporal;
}
//funcion copiar
const btnCopiar = document.getElementById("copy");//llamando al boton copy y declarando la variable copiar
btnCopiar.addEventListener("click", function () {
  const textoDes = document.getElementById("textoDes");//llamando el textarea del cual se va a copiar 
  const contenido = textoDes.value;
  navigator.clipboard.writeText(contenido).then(
    function () {
      alert("El texto ha sido copiado al portapapeles.");
    },
    function (err) {
      alert("Ocurrió un error al copiar el texto: " + err);
    }
  );
});

boton.onclick = Encriptar;//boton pulsado ejecuta la funcion encriptar
botonDesncriptar.onclick = Desencriptar;//boton pulsado ejecuta la funcion desencriptar
