// timer.js

let seconds = 0;
let minutes = 0;
const timerElement = document.getElementById('timer');
timerInterval = null;

function startTimer() {
    timerInterval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

        timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
    }, 1000);
}

// Stop timer when finishing game
function stopTimer() {
    clearInterval(timerInterval);      
}

// Reset timer when restarting game
function resetTimer() {
    seconds = 0;
    minutes = 0;
}


window.onload = startTimer;
