const textSize = document.querySelector("#text");
const tSControler = document.querySelector("#font-size-control");

console.log(textSize, tSControler);

textSize.style.fontSize = `${tSControler.value}px`;

tSControler.addEventListener("input", checkValue);

function checkValue(event) {
  const fontSize = event.currentTarget.value;
  textSize.style.fontSize = `${fontSize}px`;
}
