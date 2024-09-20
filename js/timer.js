// timer.js

let seconds = 0;
let minutes = 0;
const timerElement = document.getElementById('timer');

function startTimer() {
    setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        // Formato de minutos y segundos
        let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

        // Actualiza el HTML del temporizador
        timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
    }, 1000); // Intervalo de 1 segundo
}

// Llama a la función para iniciar el temporizador cuando la página carga
window.onload = startTimer;
