const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// for (let index = 0; index < ingredients.length; index++) {
//   const element = ingredients[index];
//   const ingredientEl = document.createElement("li");

//   ingredientEl.textContent = element;
//   ingredientEl.classList.add("item");
//   console.log(ingredientEl);

//   document.querySelector("#ingredients").append(ingredientEl);
// }

const ingredientsList = document.querySelector("#ingredients");

const ingredientsItems = ingredients.map((ingredient) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("item");
  console.log(ingredientEl);
  return ingredientEl;
});

ingredientsList.append(...ingredientsItems);
