const nameInput = document.querySelector("#name-input");
console.log(nameInput);
const showName = document.querySelector("#name-output");
console.log(showName);

nameInput.addEventListener("input", () => {
  if (nameInput.value === "") {
    return (showName.textContent = "Anonymous");
  }
  showName.textContent = nameInput.value;
});
