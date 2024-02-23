let cont = 0;
let contIncorrectos = 0;
const nextButton = document.getElementById("next");
const textoInput = document.getElementById("texto");//TextArea con el texto a escribir
// Conjunto de frases
const frases = [
    "La lluvia cae sobre el tejado, haciendo un sonido relajante.",
    "El sol brilla en el cielo azul, iluminando el dia.",
    "Los pajaros cantan melodias alegres en la mañana.",
    // Agrega más frases según sea necesario
];

// Función para cambiar a la siguiente frase
function cambiarFrase() {
    // Elige una frase aleatoria del conjunto
    const nuevaFrase = frases[Math.floor(Math.random() * frases.length)];

    // Establece la nueva frase como texto
    textoInput.innerHTML = nuevaFrase;

    cont = 0;
    contIncorrectos = 0;

    // Deshabilita el botón "Siguiente" al cambiar la frase
    nextButton.disabled = true;
}
const caracteres = [];//Almacenará los caracteres del texto

//La ventana permanece a la escucha de las teclas presionadas por el usuario
document.addEventListener("keydown", function (event) {
    //Recorre la cadena de texto para almacenar los caracteres en el arreglo
    for (let index = 0; index < textoInput.textContent.length; index++) {
        const letra = textoInput.textContent[index];
        caracteres[index] = letra;
    }
    console.log(caracteres);
    console.log(caracteres.length);
    if (textoInput.textContent!="") {//Se asegura de que el contador no sobrepase el tamaño del arreglo
        // Compara la tecla presionada con la primera letra de la cadena de texto
        if (event.key.toLowerCase() === caracteres[cont].toLowerCase()) {
            textoInput.textContent = textoInput.textContent.substring(1);//Si la tecla es correcta, elimina dicha letra en la cadena de texto.
        } else if (event.key != "Backspace" && event.key.toLowerCase() != caracteres[cont]) {
            // Si la tecla es incorrecta, agrega el caracter al inicio del texto y lo colorea de rojo
            textoInput.innerHTML = `<span class="incorrecto">${event.key}</span>` + textoInput.innerHTML;
            contIncorrectos++;
        } else if (contIncorrectos > 0 && event.key === "Backspace") {
            textoInput.textContent = textoInput.textContent.substring(1);//Elimina el caracter incorrecto.
            contIncorrectos--;
        }

    } else {
        nextButton.disabled = false;
    }
});
// Agrega un evento al botón "Siguiente"
nextButton.addEventListener("click", cambiarFrase);

// Inicializa el primer texto
cambiarFrase();