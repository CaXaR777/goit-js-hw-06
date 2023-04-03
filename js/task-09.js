function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
console.log(body);
const button = document.querySelector(".change-color");
console.log(button);
const text = document.querySelector(".color");
  
  button.addEventListener("click", () => {
    body.style.backgroundColor = getRandomHexColor();

    text.textContent = body.style.backgroundColor;
  });
