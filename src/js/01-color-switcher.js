const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
let timerId = null;

startButton.addEventListener('click', function () {
  if (!startButton.disabled) {
    startButton.disabled = true; 
    stopButton.disabled = false; 
  }
    document.body.style.backgroundColor = getRandomHexColor();
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

stopButton.addEventListener('click', function () {
  if (!stopButton.disabled) {
    stopButton.disabled = true; 
    startButton.disabled = false;
  }
     clearInterval(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

