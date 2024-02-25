function handleKeyDown(event) {
    const keyPressed = event.key.toUpperCase(); // Obtener la tecla presionada
    const keys = document.querySelectorAll('.key'); // Obtener todas las teclas

    keys.forEach(function (key) {
        // Remover la clase de tecla presionada de todas las teclas
        key.classList.remove('key-pressed');
    });

    switch (event.key) {
        case '1':
        case '!':
            handleKeyHighlight('key-1');
            break;
        case '2':
        case '"':
            handleKeyHighlight('key-2');
            break;
        case '3':
        case '#':
            handleKeyHighlight('key-3');
            break;
        case '4':
        case '$':
            handleKeyHighlight('key-4');
            break;
        case '5':
        case '%':
            handleKeyHighlight('key-5');
            break;
        case '6':
        case '&':
            handleKeyHighlight('key-6');
            break;
        case '7':
        case '/':
            handleKeyHighlight('key-7');
            break;
        case '8':
        case '(':
            handleKeyHighlight('key-8');
            break;
        case '9':
        case ')':
            handleKeyHighlight('key-9');
            break;
        case '0':
        case '=':
            handleKeyHighlight('key-0');
            break;
        case 'Tab':
            handleKeyHighlight('key-tab');
            break;
        case 'q':
        case 'Q':
            handleKeyHighlight('key-q');
            break;
        case 'w':
        case 'W':
            handleKeyHighlight('key-w');
            break;
        case 'e':
        case 'E':
            handleKeyHighlight('key-e');
            break;
        case 'r':
        case 'R':
            handleKeyHighlight('key-r');
            break;
        case 't':
        case 'T':
            handleKeyHighlight('key-t');
            break;
        case 'y':
        case 'Y':
            handleKeyHighlight('key-y');
            break;
        case 'u':
        case 'U':
            handleKeyHighlight('key-u');
            break;
        case 'i':
        case 'I':
            handleKeyHighlight('key-i');
            break;
        case 'o':
        case 'O':
            handleKeyHighlight('key-o');
            break;
        case 'p':
        case 'P':
            handleKeyHighlight('key-p');
            break;
        case '[':
        case '{':
            handleKeyHighlight('key-open-bracket');
            break;
        case ']':
        case '}':
            handleKeyHighlight('key-close-bracket');
            break;
        case 'Enter':
            handleKeyHighlight('key-enter');
            break;
        case 'a':
        case 'A':
            handleKeyHighlight('key-a');
            break;
        case 's':
        case 'S':
            handleKeyHighlight('key-s');
            break;
        case 'd':
        case 'D':
            handleKeyHighlight('key-d');
            break;
        case 'f':
        case 'F':
            handleKeyHighlight('key-f');
            break;
        case 'g':
        case 'G':
            handleKeyHighlight('key-g');
            break;
        case 'h':
        case 'H':
            handleKeyHighlight('key-h');
            break;
        case 'j':
        case 'J':
            handleKeyHighlight('key-j');
            break;
        case 'k':
        case 'K':
            handleKeyHighlight('key-k');
            break;
        case 'l':
        case 'L':
            handleKeyHighlight('key-l');
            break;
        case ';':
        case ':':
            handleKeyHighlight('key-comma');
            break;
        case '\'':
        case '"':
            handleKeyHighlight('key-apos');
            break;
        case '\\':
        case '|':
            handleKeyHighlight('key-lees-grater');
            break;
        case 'z':
        case 'Z':
            handleKeyHighlight('key-z');
            break;
        case 'x':
        case 'X':
            handleKeyHighlight('key-x');
            break;
        case 'c':
        case 'C':
            handleKeyHighlight('key-c');
            break;
        case 'v':
        case 'V':
            handleKeyHighlight('key-v');
            break;
        case 'b':
        case 'B':
            handleKeyHighlight('key-b');
            break;
        case 'n':
        case 'N':
            handleKeyHighlight('key-n');
            break;
        case 'm':
        case 'M':
            handleKeyHighlight('key-m');
            break;
        case ',':
        case '<':
            handleKeyHighlight('key-comma');
            break;
        case '.':
        case '>':
            handleKeyHighlight('key-dot');
            break;
        case '/':
        case '?':
            handleKeyHighlight('key-question');
            break;
        case 'Space':
            handleKeyHighlight('key-space');
            break;
        case 'CapsLock':
            handleKeyHighlight('key-caps-lock');
            break;
        case 'Shift':
            handleKeyHighlight('key-shift');
            break;
        case 'Control':
            handleKeyHighlight('key-ctrl');
            break;
        case 'Meta':
            handleKeyHighlight('key-win');
            break;
        case 'Alt':
            handleKeyHighlight('key-alt');
            break;
        case 'Escape':
            handleKeyHighlight('key-esc');
            break;
        case 'Backspace':
            handleKeyHighlight('key-backspace');
            break;
        default:
            console.log("Tecla no manejada: " + event.key);
            break;
    }
}

function handleKeyHighlight(keyId) {
    const key = document.getElementById(keyId);
    if (key) {
        key.classList.add('key-pressed');
    }
}

document.addEventListener('keydown', handleKeyDown);