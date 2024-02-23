let cont = 0;//contador para posicionarse en el array
let contIncorrectos = 0;
const textoInput = document.getElementById("texto");//TextArea con el texto a escribir
let textoPlaceholder = "La lluvia cae sobre el tejado, haciendo un sonido relajante.";//Texto predeterminado para escribir
textoInput.innerHTML = textoPlaceholder;//asigna el texto predeterminado al textarea
//La ventana permanece a la escucha de las teclas presionadas por el usuario
document.addEventListener("keydown", function (event) {
    const mensaje = document.getElementById('mensaje');//Mensaje que avisa si el texto es correcto
    const caracteres = [];//Almacenará los caracteres del texto
    //Recorre la cadena de texto para almacenar los caracteres en el arreglo
    for (let index = 0; index < textoPlaceholder.length; index++) {
        const letra = textoPlaceholder[index];
        caracteres[index] = letra;
    }

    if (cont < caracteres.length) {//Se asegura de que el contador no sobrepase el tamaño del arreglo
        // Compara la tecla presionada con la primera letra de la cadena de texto
        if (event.key.toLowerCase() === caracteres[cont].toLowerCase()) {
            textoInput.textContent = textoInput.textContent.substring(1);//Si la tecla es correcta, elimina dicha letra en la cadena de texto.
            cont++;
        } else if (event.key != "Backspace" && event.key.toLowerCase() != caracteres[cont]) {
            // Si la tecla es incorrecta, agrega el caracter al inicio del texto y lo colorea de rojo
            textoInput.innerHTML = `<span class="incorrecto">${event.key}</span>` + textoInput.innerHTML;
            contIncorrectos++;
            cont--;
        } else if (contIncorrectos > 0 && event.key === "Backspace") {
            textoInput.textContent = textoInput.textContent.substring(1);//Elimina el caracter incorrecto.
            contIncorrectos--;
            cont++;
        }

    } else {
        const next = document.getElementById("next");
        next.disabled = false;
    }
});
