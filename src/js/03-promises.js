import Notiflix from 'notiflix';
const form = document.querySelector('.form');
const firstDelay = document.querySelector('[name=delay]');
const delayInput = document.querySelector('[name=step]');
const amount = document.querySelector('[name=amount]');
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
 return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const step = parseInt(delayInput.value);
  let first = parseInt(firstDelay.value);
  const number = parseInt(amount.value);

  for (let i = 0; i < number; i += 1) {
    const position = i + 1;
    const delay = first;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    first += step;
  }
  form.reset();
});
