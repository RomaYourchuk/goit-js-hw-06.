const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector("#ingredients");

const ingredientsItem  = (ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  return item;
};

const makeElements = ingredients.map(ingredientsItem);
ingredientsList.append(...makeElements);


