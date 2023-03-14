let countValue = 0;

const counterOutput = document.querySelector('.counter');
counterOutput.textContent = countValue;

const counterDecrease = document.querySelector('.decrease');
const counterReset = document.querySelector('.reset');
const counterIncrease = document.querySelector('.increase');

counterDecrease.addEventListener('click', function () {
  counterOutput.textContent = countValue--
});

counterIncrease.addEventListener('click', function () {
    counterOutput.textContent = countValue++
});

counterReset.addEventListener('click', function () {
  counterOutput.textContent = 0;
});
