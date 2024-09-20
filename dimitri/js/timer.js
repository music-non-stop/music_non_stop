// timer.js
let timerInterval;
let seconds = 0;

function startTimer() {
    timerInterval = setInterval(() => {
        seconds++;
        const timerDisplay = document.querySelector('.timer');
        timerDisplay.textContent = `Timer: ${formatTime(seconds)}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    const timerDisplay = document.querySelector('.timer');
    timerDisplay.textContent = 'Timer: 0:00';
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

