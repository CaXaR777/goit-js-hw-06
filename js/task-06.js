const input = document.querySelector("#validation-input");
console.dir(input.attributes[2].nodeValue);
console.log(input.getAttribute("data-length"));
const dataLength = Number(input.getAttribute("data-length"));
console.log(dataLength);

input.addEventListener("blur", checkInput);

function checkInput() {
  const inputLength = input.value.length;
  console.log(inputLength);

  if (inputLength === dataLength) {
    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
    }
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}


