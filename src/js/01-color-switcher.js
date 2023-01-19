function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const start = document.querySelector("[data-start]");
const stop = document.querySelector("[data-stop]");
let intervalID = null;

console.log(start);
console.log(stop);

start.addEventListener('click', onStart);
stop.addEventListener('click', onStop);

function onStart() { 
    start.disabled = true;
    intervalID = setInterval(colorChange, 1000)
}

function onStop() { 
    start.disabled = false;
    clearInterval(intervalID);
}

function colorChange() { 
    const body = document.querySelector('body');
    body.style.backgroundColor = getRandomHexColor();
}