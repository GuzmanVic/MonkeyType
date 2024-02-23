let cont = 0;//contador para posicionarse en el array
const textoInput = document.getElementById("texto");//TextArea con el texto a escribir
let textoPlaceholder = "La lluvia cae sobre el tejado, haciendo un sonido relajante.";//Texto predeterminado para escribir
textoInput.value = textoPlaceholder;//asigna el texto predeterminado al textarea
//La ventana permanece a la escucha de las teclas presionadas por el usuario
document.addEventListener("keydown", function (event) {
    const mensaje = document.getElementById('mensaje');//Mensaje que avisa si el texto es correcto
    const caracteres = [];//Almacenará los caracteres del texto
    //Recorre la cadena de texto para almacenar los caracteres en el arreglo
    for (let index = 0; index < textoPlaceholder.length; index++) {
        const letra = textoPlaceholder[index];
        caracteres[index] = letra;
    }
    // Compara la tecla presionada con la primera letra de la cadena de texto
    if (event.key.toLowerCase() === caracteres[cont].toLowerCase()) {
        textoInput.value = textoInput.value.substring(1);//Si la tecla es correcta, elimina dicha letra en la cadena de texto.
        cont++;
    } else {
        textoInput.innerHTML = `<span class="incorrecto">${event.key}</span>` + textoInput.value;
    }
    // Actualiza el contenido del textarea
    //    textoInput.value = textoInput.value.substring(0, textoPlaceholder.length);
    // textoInput.addEventListener("input", (event) => {
    //     textoInput.setSelectionRange(0, 0);
    //     let textoEscrito = textoInput.value;

    //     // Mostrar mensaje de error si el texto es incorrecto
    //     if (textoEscrito !== textoPlaceholder) {
    //         mensaje.textContent = "Error: el texto no coincide.";
    //         mensaje.classList.add("error");
    //         return;
    //     }

    //     // Resaltar el texto escrito correctamente
    //     let textoResaltado = "";
    //     for (let i = 0; i < textoEscrito.length; i++) {
    //         if (textoEscrito[i] === textoPlaceholder[i]) {
    //             textoResaltado += `<span class="correcto">${textoEscrito[i]}</span>`;
    //         } else {
    //             textoResaltado += `<span class="incorrecto">${textoEscrito[i]}</span>`;
    //         }
    //     }

    //     // Mostrar el texto resaltado en el textarea
    //     textoInput.innerHTML = textoResaltado;

    //     // Mostrar mensaje de éxito si el texto se ha escrito correctamente
    //     if (textoEscrito === textoPlaceholder) {
    //         mensaje.textContent = "¡Felicidades! Has escrito el texto correctamente.";
    //         mensaje.classList.remove("error");
    //         mensaje.classList.add("exito");
    //     }
    // });

});
