const userData = document.querySelectorAll("input");
const form = document.querySelector(".form");

form.addEventListener('submit', onSubmit);

function onSubmit(e) { 
  e.preventDefault();

  const delay = Number(userData[0].value);
  const step = Number(userData[1].value);
  const amount = Number(userData[2].value);

  for (let i = 0; i < amount; i += 1) { 
    createPromise(i+1, delay + step * i).then(onSuccess).catch(onError);
  }
}



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((res, rej) => {
      setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay })
      } else {
        rej({ position, delay })
      }
    }, delay);
  });
};

function onSuccess({ position, delay }) { 
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

function onError({ position, delay }) {
  console.error(`❌ Rejected promise ${position} in ${delay}ms`);
};

