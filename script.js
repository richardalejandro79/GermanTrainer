const preguntas = [
    { pregunta: "___ Hund ist groß", respuestaCorrecta: "der", caso: "Nominativo" },
    { pregunta: "Ich sehe ___ Hund", respuestaCorrecta: "den", caso: "Acusativo" },
    { pregunta: "Ich gebe ___ Hund das Essen", respuestaCorrecta: "dem", caso: "Dativo" },
    { pregunta: "Das Haus ___ Hundes ist schön", respuestaCorrecta: "des", caso: "Genitivo" },
];

let preguntaActual = 0;
let respuestasCorrectas = 0;

document.getElementById("verificar").addEventListener("click", verificarRespuesta);
document.getElementById("reiniciar").addEventListener("click", reiniciarJuego);

// Agregar evento para capturar la tecla Enter
document.getElementById("respuesta").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        verificarRespuesta();
    }
});

function iniciarJuego() {
    preguntaActual = 0;
    respuestasCorrectas = 0;
    document.getElementById("reiniciar").classList.add("d-none");
    mostrarPregunta();
}

function mostrarPregunta() {
    if (preguntaActual < preguntas.length) {
        document.getElementById("pregunta").textContent = preguntas[preguntaActual].pregunta;
        document.getElementById("respuesta").value = "";
        document.getElementById("mensaje").textContent = "";
        document.getElementById("progreso").textContent = `Pregunta ${preguntaActual + 1} de ${preguntas.length}`;
    } else {
        document.getElementById("mensaje").textContent = `¡Felicidades! Respondiste correctamente ${respuestasCorrectas} de ${preguntas.length} preguntas.`;
        document.getElementById("reiniciar").classList.remove("d-none");
    }
}

function verificarRespuesta() {
    const respuestaUsuario = document.getElementById("respuesta").value.trim().toLowerCase();
    const respuestaCorrecta = preguntas[preguntaActual].respuestaCorrecta;

    if (respuestaUsuario === respuestaCorrecta) {
        respuestasCorrectas++;
        document.getElementById("mensaje").textContent = "¡Correcto!";
    } else {
        document.getElementById("mensaje").textContent = "Incorrecto, inténtalo de nuevo.";
    }

    preguntaActual++;
    setTimeout(() => {
        mostrarPregunta();
    }, 1000);
}

function reiniciarJuego() {
    respuestasCorrectas = 0;
    preguntaActual = 0;
    document.getElementById("reiniciar").classList.add("d-none");
    mostrarPregunta();
}

function checkAnswer() {
    const respuesta = document.getElementById('respuesta').value.trim().toLowerCase();
    const mensaje = document.getElementById('mensaje');

    if (respuesta === preguntas[currentIndex].respuesta) {
        mensaje.textContent = "¡Correcto! Bien hecho.";
        mensaje.className = 'correcto'; // Añade clase para estilo correcto
        currentIndex++;
        if (currentIndex < preguntas.length) {
            mostrarPregunta();
        } else {
            mensaje.textContent = "¡Felicidades! Has completado todas las preguntas.";
            document.getElementById('verificar').classList.add('d-none');
            document.getElementById('reiniciar').classList.remove('d-none');
        }
    } else {
        mensaje.textContent = "Respuesta incorrecta. ¡Inténtalo de nuevo!";
        mensaje.className = 'incorrecto'; // Añade clase para estilo incorrecto
    }
}


// Iniciar el juego al cargar la página
window.onload = iniciarJuego;
