function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");

const input = document.querySelector("input");

const boxes = document.querySelector("#boxes");

console.log(create, destroy, input, boxes);

input.addEventListener("input", () => {
  const amount = input.value;
});

create.addEventListener("click", () => {
  const amount = input.value;
  createBoxes(amount);
});

destroy.addEventListener("click", () => {
  const boxCount = boxes.querySelectorAll("div").length;
  destroyBoxes(boxCount);
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.appendChild(box);
    // const boxCount = boxes.querySelectorAll('div').length
  }
}

function destroyBoxes() {
  //   for (let i = 0; i < boxCount; i++) {
  // boxes.removeChild(box[i])
  //   }
  boxes.innerHTML = "";
}
