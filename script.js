// Cambiar entre tema claro y oscuro
document.getElementById("toggle-theme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const themeText = document.getElementById("toggle-text");
    if (document.body.classList.contains("dark")) {
        themeText.textContent = "Modo Claro";
        document.getElementById("toggle-icon").src = "assets/icons/sun.svg"; // Cambia la imagen del ícono
    } else {
        themeText.textContent = "Modo Oscuro";
        document.getElementById("toggle-icon").src = "assets/icons/moon.svg"; // Cambia la imagen del ícono
    }
});

// Cambiar color de tema
document.querySelectorAll(".colors__item").forEach(item => {
    item.addEventListener("click", () => {
        const color = item.getAttribute("data-color");
        document.documentElement.style.setProperty('--primary-color', color);
    });
});

// Función para decifrar el texto con el Cifrado César
function decifrarTexto() {
    let texto = document.getElementById("texto").value;
    let clave = parseInt(document.getElementById("clave").value);
    let resultado = "";

    // Recorremos cada carácter del texto
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];

        // Verificamos si el carácter es una letra
        if (char.match(/[a-zA-Z]/)) {
            let code = texto.charCodeAt(i);

            // Si es una letra mayúscula
            if (char >= 'A' && char <= 'Z') {
                char = String.fromCharCode(((code - 65 - clave + 26) % 26) + 65);
            }
            // Si es una letra minúscula
            else if (char >= 'a' && char <= 'z') {
                char = String.fromCharCode(((code - 97 - clave + 26) % 26) + 97);
            }
        }

        // Añadimos el carácter (decifrado o no) al resultado
        resultado += char;
    }

    // Mostramos el texto decifrado
    document.getElementById("resultado").value = resultado;
}
