const pTimes = [...document.querySelectorAll('p.time')]
const endDate = new Date('2019-10-16 21:15:00').getTime();

const pSpendTime = document.querySelector('.spendTime');

let number = 0;

// tablica dlatego, że jak będe chciał dodać miesiać/rok/setne sekundy to tylko dodaje w html diva oraz w counter zmienną,warunek,dekrementację i gotowe

const summary = () => {
  number++;
  pSpendTime.textContent = number.toString().padStart(2, 0) + " seconds";
}

const counter = () => {
  let actualDate = new Date().getTime();
  let time = endDate - actualDate;
  i = pTimes.length - 1;

  let seconds = Math.floor((time / 1000) % 60);
  pTimes[i].textContent = seconds.toString().padStart(2, 0);
  i--;

  let minutes = Math.floor((time / (1000 * 60)) % 60);
  pTimes[i].textContent = minutes.toString().padStart(2, 0);
  i--;

  let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  pTimes[i].textContent = hours.toString().padStart(2, 0);
  i--;

  let days = Math.floor((time / (1000 * 60 * 60 * 24)));
  pTimes[i].textContent = days.toString().padStart(2, 0);
  i--;

  summary();
}
setInterval(counter, 1000)