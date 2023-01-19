import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector("input#datetime-picker");
const timer = document.querySelector(".timer");
const fields = document.querySelectorAll(".field");
const values = document.querySelectorAll("span.value");
const btn = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
let selectDate = [];
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= new Date()) {
            btn.disabled = true;
            window.alert("Please choose a date in the future");
        } else { 
            btn.disabled = false;
            selectDate = selectedDates;
            return selectDate;
        }
  },
};
flatpickr(input, options);

btn.disabled = true;

btn.addEventListener('click', startTimer);

toDecor();

function startTimer() { 
    setInterval(()=>{
                days.textContent = convertMs(selectDate[0] - new Date()).days;
                hours.textContent = addLeadingZero(convertMs(selectDate[0] - new Date()).hours);
                minutes.textContent = addLeadingZero(convertMs(selectDate[0] - new Date()).minutes);
                seconds.textContent = addLeadingZero(convertMs(selectDate[0] - new Date()).seconds);
            }, 1000)
}

function toDecor() { 
    timer.style.display = 'flex';
    timer.style.gap = '15px';
    timer.style.marginTop = '20px';

    fields.forEach((elem) => { 
    elem.style.display = 'flex';
    elem.style.flexDirection = 'column';
    elem.style.alignItems = 'center';
})

values.forEach((elem) => { 
    elem.style.fontSize = "30px";
})
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) { 
    return value.toString().padStart(2, "0");
}
