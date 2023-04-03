let counterValue = document.querySelector("#value");
counterValue.textContent = 0;
console.log(counterValue);
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
console.log(decrement, increment);

decrement.addEventListener("click", take);

function take() {
  counterValue.textContent = counterValue.textContent -= 1;
  console.log(counterValue);
}
console.log(counterValue);

increment.addEventListener("click", add);

function add() {
  counterValue.textContent++;
  console.log(counterValue);
}
