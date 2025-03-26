let sec = 0;
let min = 0;
let hr = 0;
let interval;
const timerElement = document.getElementById('timer');

function formatDigit(digit) {
    return String(digit).padStart(2, '0');
}

function start() {
    if (!interval) {
        interval = setInterval(timer, 1000);
    }
}

function pause() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    clearInterval(interval);
    interval = null;
    sec = 0;
    min = 0;
    hr = 0;
    updateDisplay();
}

function timer() {
    sec++;
    if (sec === 60) {
        sec = 0;
        min++;
        if (min === 60) {
            min = 0;
            hr++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    timerElement.innerText = `${formatDigit(hr)}:${formatDigit(min)}:${formatDigit(sec)}`;
}
