const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newIngredients = [];
const ingredientsUl = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  let newIngredient = document.createElement("li");
  newIngredient.classList.add("item");
  newIngredient.textContent = ingredient;
  newIngredients.push(newIngredient);
  return;
});

ingredientsUl.append(...newIngredients);
