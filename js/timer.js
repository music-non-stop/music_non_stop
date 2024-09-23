// timer.js

let seconds = 0;
let minutes = 0;
timerInterval = null;

const timerElement = document.getElementById('timer');

function startTimer() {
    if (timerInterval) return;

    timerInterval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

        timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
    }, 1000);
}

// Stop timer when finishing game
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;    
}

// Reset timer when restarting game
function resetTimer() {
    stopTimer(); // stop Timer before restart
    seconds = 0;
    minutes = 0;
    timerElement.textContent = "00:00"; //
    startTimer(); 
}


window.onload = startTimer;
