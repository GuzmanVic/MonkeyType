let cont = 0;
let contIncorrectos = 0;
const nextButton = document.getElementById("next");
const textoInput = document.getElementById("texto");//TextArea con el texto a escribir
// Conjunto de frases
const frases = [
    "No es lo mismo 'huele a traste' que 'atrás te huele'",
    "Qué bueno que se hizo noche, para empezar la loquera",
    "Una vez al año, no hace daño. Una vez al mes, qué rico es. Una vez a la semana, van por tu hermana. Una vez al día, qué alegría. Una a cada rato, se te muere el aparato",
    "Aguas de las verdes matas",
    "Si yo fuera gay, yo podría enfundar tu pistola, te podría sacar la ponzoña... con todo y agijón",
    "Pujidos entre las palmas",
    "Amiga, date cuenta",
    "La fogata, la escalera al cielo, el llanero solitario, la fantasía",
    "El taladro del averno, el fetuccini, el DJ, el hombre araña, el dedo del glotón",
    "La inteligencia me persigue, pero yo soy más rápido",
    "Llegó papá",
    "Hoy se casó el huitlacoche",
    "¿Apoco sí, tilín?",
    "NOS VAMOS A MONTERREY!, NOS VAMOS A MONTERREY!!!",
    "Para mí, el 'pollo loco' es un 'pollo normal'",
    "Para mí, una locomotora, es una normalotora",
    "Hombres desnudos *buscar*",
    "EEeeEERRRRneeeeeeeeeEEEeeEEEstoooOOOoOoOoOOooooOoooo",
    "Más vale pájaro en mano, que ser padre a los 15"

    // Agrega más frases según sea necesario
];

const frasesUtilizadas = new Set(); // Conjunto para almacenar frases utilizadas

function obtenerNuevaFrase() {
    let nuevaFrase;

    // Obtén una frase que aún no se haya utilizado
    do {
        nuevaFrase = frases[Math.floor(Math.random() * frases.length)];
    } while (frasesUtilizadas.has(nuevaFrase));

    // Registra la frase como utilizada
    frasesUtilizadas.add(nuevaFrase);

    return nuevaFrase;
}

function cambiarFrase() {
    // Elige una nueva frase
    const nuevaFrase = obtenerNuevaFrase();

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
    if (textoInput.textContent !== "" && event.key !== "Shift" && event.key !== "Alt" && event.key !== "Control" && event.key !== "AltGraph") {//Se asegura de que el contador no sobrepase el tamaño del arreglo
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

    } else if (textoInput.textContent === "") {
        nextButton.disabled = false;
    }
});
// Agrega un evento al botón "Siguiente"
nextButton.addEventListener("click", cambiarFrase);

// Inicializa el primer texto
cambiarFrase();