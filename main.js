const pTimes = [...document.querySelectorAll('p.time')]
const endDate = new Date('2019-10-16 21:15:00').getTime();

const pSpendTime = document.querySelector('.spendTime');

let number = 0;

// tablica dlatego, że jak będe chciał dodać miesiać/rok/setne sekundy to tylko dodaje w html diva oraz w counter zmienną,warunek,dekrementację i gotowe

const summary = () => {
  number++;
  pSpendTime.textContent = number + " seconds";
  if (number < 10) {
    pSpendTime.textContent = ` 0${number} seconds`;
  }
}

const counter = () => {
  let actualDate = new Date().getTime();
  let time = endDate - actualDate;
  i = pTimes.length - 1;

  let seconds = Math.floor((time / 1000) % 60);
  seconds < 10 ? pTimes[i].textContent = "0" + seconds : pTimes[i].textContent = seconds;
  i--;

  let minutes = Math.floor((time / (1000 * 60)) % 60);
  minutes < 10 ? pTimes[i].textContent = "0" + minutes : pTimes[i].textContent = minutes;
  i--;

  let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  hours < 10 ? pTimes[i].textContent = "0" + hours : pTimes[i].textContent = hours;
  i--;

  let days = Math.floor((time / (1000 * 60 * 60 * 24)));
  days < 10 ? pTimes[i].textContent = "0" + days : pTimes[i].textContent = days;
  i--;

  summary();
}
setInterval(counter, 1000)