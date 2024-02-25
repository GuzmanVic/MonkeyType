// Variables para el juego
let cont = 0; // Contador de posición actual en la frase
let puntos = 0; // Puntuación del jugador
let contIncorrectos = 0; // Contador de teclas incorrectas presionadas
const mensaje = document.getElementById("mensaje"); // Elemento de mensaje para mostrar la puntuación
const nextButton = document.getElementById("next"); // Botón para pasar a la siguiente frase
const textoInput = document.getElementById("texto"); // Área de texto para la frase a escribir
mensaje.textContent = mensaje.textContent + puntos; // Inicializa el mensaje de puntuación

// Conjunto de frases
const frases = [
    "No es lo mismo 'huele a traste' que 'atrás te huele'",
    "Qué bueno que se hizo noche, para empezar la loquera",
    "Una vez al año, no hace daño. Una vez al mes, qué rico es. Una vez a la semana, van por tu hermana. Una vez al día, qué alegría. Una a cada rato, se te muere el aparato",
    "Aguas de las verdes matas",
    "Si yo fuera gay, yo podría enfundar tu pistola, te podría sacar la ponzoña... con todo y aguijón",
    "Pujidos entre las palmas",
    "Amiga, date cuenta",
    "La fogata, la escalera al cielo, el llanero solitario, la fantasma",
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
];

const frasesUtilizadas = new Set(); // Conjunto para almacenar frases utilizadas

function obtenerNuevaFrase() {
    let nuevaFrase;

    // Obtiene una frase que aún no se haya utilizado
    do {
        nuevaFrase = frases[Math.floor(Math.random() * frases.length)];
    } while (frasesUtilizadas.has(nuevaFrase));

    // Registra la frase como utilizada
    frasesUtilizadas.add(nuevaFrase);

    return nuevaFrase;
}

function cambiarFrase() {
    if (frasesUtilizadas.size === frases.length) {
        // Todas las frases se han utilizado, muestra la pantalla de fin de juego
        document.getElementById("gameContainer").style.display = "none";
        document.getElementById("endContainer").style.display = "block";

        // Muestra la puntuación final
        document.getElementById("puntuacionFinal").textContent = puntos;
    } else {
        // Elige una nueva frase
        const nuevaFrase = obtenerNuevaFrase();

        // Establece la nueva frase como texto
        textoInput.innerHTML = nuevaFrase;
        textoInput.innerHTML = `<span class="letra-actual">${nuevaFrase[0]}</span>` + textoInput.innerHTML;
        cont = 0;
        contIncorrectos = 0;

        // Deshabilita el botón "Siguiente" al cambiar la frase
        nextButton.disabled = true;
    }
}

const caracteres = [];//Almacenará los caracteres del texto

//La ventana permanece a la escucha de las teclas presionadas por el usuario
document.addEventListener("keydown", function (event) {

    //Recorre la cadena de texto para almacenar los caracteres en el arreglo
    for (let index = 0; index < textoInput.textContent.length; index++) {
        const letra = textoInput.textContent[index];
        caracteres[index] = letra;
    }
    // Se asegura de que el texto esté vacío antes de entrar a la condicional, y de que no se puedan ingresar las teclas de control
    if (textoInput.textContent !== "" && /^[a-zA-ZáéíóúÁÉÍÓÚüÜ0-9,.'"\[\]!@#$%^&*()_+-=<>?:;{}|\\/¿ñ ]$/
        .test(event.key)) {
        // Compara la tecla presionada con la primera letra de la cadena de texto
        if (event.key.toLowerCase() === caracteres[cont].toLowerCase()) {
            //Se asegura de que no pueda ingresar una letra incorrecta más de 1 vez
            if (contIncorrectos == 0) {
                textoInput.textContent = textoInput.textContent.substring(1);//Si la tecla es correcta, elimina dicha letra en la cadena de texto.
                puntos += 2;//Aumenta 2 puntos por cada acierto
            }
        } else if (event.key != "Backspace" && event.key.toLowerCase() != caracteres[cont]) {
            // Si la tecla es incorrecta, agrega el caracter al inicio del texto y lo colorea de rojo
            textoInput.innerHTML = `<span class="incorrecto">${event.key}</span>` + textoInput.innerHTML;
            contIncorrectos++;//Actualiza el contador de incorrectos para controlar los caracteres que se puedan borrar
            puntos -= 1;//Elimina un punto por cada incorrecto
            // Al presionar Bacspace se asegura de que no borre mas caracteres de los permitidos con el contador de incorrectos
        }
        // Permite borrar caracteres, siempre y cuando existan caracteres incorrectos
    } else if (contIncorrectos > 0 && event.key === "Backspace") {
        textoInput.textContent = textoInput.textContent.substring(1);//Elimina el caracter incorrecto.
        contIncorrectos--;//Actualiza el contador de incorrectos para controlar los caracteres que se puedan borrar
        // Si ya ha escrito toda la frase, habilita el botón para acceder a una nueva frase
    } else if (textoInput.textContent === "") {
        nextButton.disabled = false;
    }
    mensaje.textContent = "Puntos: " + puntos;//Actualiza los puntos en pantalla
});
// Agrega un evento al botón "Siguiente"
nextButton.addEventListener("click", cambiarFrase);
// Agrega un evento al botón "Reintentar"
document.getElementById("reintentar").addEventListener("click", function () {
    // Reinicia el juego
    frasesUtilizadas.clear();
    puntos = 0;
    mensaje.textContent = "Puntos: " + puntos;//Actualiza los puntos en pantalla
    cambiarFrase();

    // Oculta el contenedor de fin de juego y muestra el contenedor del juego
    document.getElementById("gameContainer").style.display = "block";
    document.getElementById("endContainer").style.display = "none";
});

// Inicializa el primer texto
cambiarFrase();
