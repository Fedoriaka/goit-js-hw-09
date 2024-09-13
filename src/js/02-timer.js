import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.querySelector('input');
const butStart = document.querySelector('button');
const day = document.querySelector('.value[data-days]');
const hour = document.querySelector('.value[data-hours]');
const min = document.querySelector('.value[data-minutes]');
const sec = document.querySelector('.value[data-seconds]');
let selectedDate = 0;

butStart.disabled = true;
flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (!selectedDates[0] || selectedDates[0] < new Date()) {
      butStart.disabled = true;
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      butStart.disabled = false;
      selectedDate = selectedDates[0];
    }
  },
});

butStart.addEventListener('click', function (e) {
  const start = selectedDate.getTime();
  const intervalId = setInterval(() => {
    const currtime = new Date().getTime();
    const deltatime = start - currtime;
    if (deltatime <= 0) {
      clearInterval(intervalId);
      return;
    }
    const time = convertMs(deltatime);
    updateTimer(time);
  }, 1000);
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}
function updateTimer({ days, hours, minutes, seconds }) {
  day.textContent = String(days);
  hour.textContent = String(hours);
  min.textContent = String(minutes);
  sec.textContent = String(seconds);
}
