const BtnDecrease = document.querySelector('button[data-action="decrement"]');
const BtnIncrease = document.querySelector('button[data-action="increment"]');

const calc = document.querySelector("#value");

let counterValue = 0;

BtnDecrease.addEventListener("click", decreaseValue);

function decreaseValue(event) {
  counterValue -= 1;
  calc.textContent = counterValue;
}

BtnIncrease.addEventListener("click", increaseValue);

function increaseValue(event) {
  counterValue += 1;
  calc.textContent = counterValue;
}
